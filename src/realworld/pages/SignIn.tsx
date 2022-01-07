import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import currentUserAtom from '../../CurrentUserAtom';
import { EMAIL_OPTION, PASSWORD_OPTION } from '../validation';
import api from '../api';

interface SignInFormData {
  email: string;
  password: string;
}

function SignIn() {
  // https://react-hook-form.com/get-started/#IntegratingwithUIlibraries

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [_, setCurrentUser] = useAtom(currentUserAtom);

  // v6 useHistory -> useNavigate
  // https://velog.io/@soryeongk/ReactRouterDomV6
  // 공식문서 migration guide 참고
  const navigate = useNavigate();

  const onSubmit = (data: SignInFormData) => {
    // https://frw.nsidnev.dev/docs
    // 제출하면...

    // interface => 계약, 약속 => 쉽게 변경할 수 없어요!
    // api에 fetch로 post 요청을 보내고...

    // 응답을 받으면... res => json body를 꺼내고
    // body에서 user를 꺼내서
    // setCurrentUser로 넣어준다
    //
    api.login(data).then((body) => setCurrentUser(body.user));

    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <a className="" href="#register">
                Need an account?
              </a>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* ;ㅇ; 변수로 만들기 */}
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    {...register('email', EMAIL_OPTION)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    {...register('password', PASSWORD_OPTION)}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

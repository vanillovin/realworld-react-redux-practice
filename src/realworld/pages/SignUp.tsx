import React from 'react';
import { useForm } from 'react-hook-form';
import { EMAIL_OPTION, PASSWORD_OPTION } from '../validation';

interface SignUpFD {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFD>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignUpFD) => {
    alert(JSON.stringify(data));
  };
  console.log('errors', errors);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <a className="" href="#login">
                Have an account?
              </a>
            </p>
            <ul className="error-messages">
              {errors.username?.type === 'required' && (
                <li>사용자 이름(필수)을 입력해주세요.</li>
              )}
              {errors.email?.type === 'required' && (
                <li>이메일(필수)을 입력해주세요.</li>
              )}
              {errors.password?.type === 'required' && (
                <li>비밀번호(필수)을 입력해주세요.</li>
              )}
              {errors.password?.type === 'minLength' && (
                <li>비밀번호를 8자 이상 입력해주세요</li>
              )}
            </ul>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    {...register('username', { required: true })}
                  />
                </fieldset>
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
};

export default SignUp;

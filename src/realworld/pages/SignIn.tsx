import React from 'react';
import { useForm } from 'react-hook-form';
import { EMAIL_OPTION, PASSWORD_OPTION } from '../validation';

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
  const onSubmit = (data: SignInFormData) => alert(JSON.stringify(data));

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

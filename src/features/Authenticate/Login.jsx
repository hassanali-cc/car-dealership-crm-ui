import Button from '../../components/Button';
import { useNavigation, useActionData, redirect, Form } from 'react-router-dom';
import { isValidEmail } from '../../utils/helpers'
import { notification } from "../../lib/utils.ts";
import { authenticateUser } from '../../services/apiAuth.js';
import { userInfo } from '../../reducers/userSlice.js';
import store from "../../store"

function Login() {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
      <div className="my-10 px-4 text-center sm:my-16">
          <h1 className="mb-8  text-xl font-semibold md:text-3xl">
              LOG
              <span className="text-yellow-500">IN</span>
          </h1>
          <Form method="POST">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <label className="sm:basis-40">Email</label>
                  <input className="input grow" type="email" name="email" required />
                  {formErrors?.email && (
                      <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                          {formErrors.email}
                      </p>
                  )}
              </div>

              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <label className="sm:basis-40">Password</label>
                  <input className="input grow" type="password" name="password" required />
              </div>

              <div className="flex justify-end">
                  <Button name="login" disabled={isSubmitting} type="primary">
                      {isSubmitting ? 'Logging in....' : `Login`}
                  </Button>
              </div>
          </Form>
      </div>

  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const errors = {};
  if (!isValidEmail(data.email)) errors.email = 'Please give us your valid email. You will need it for login.';
  if (Object.keys(errors).length > 0) return errors;

  const user = await authenticateUser(data);
  if (user.success) {
      store.dispatch(userInfo(user.data))
      return redirect(`/dashboard`);
  } else {
      notification(user.message, 'error');
      console.error(user);
  }
  return redirect(`/`);
}

export default Login;

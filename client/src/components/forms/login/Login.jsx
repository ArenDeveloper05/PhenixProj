import "./Login.scss";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROUTER } from "../../../router/router";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  return (
    <div className="login">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {() => (
          <Form>
            <p>Login with Email</p>
            <div className="form-row">
              <Field type="email" name="email" placeholder="Your email..." />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-row">
              <Field
                type="password"
                name="password"
                placeholder="Your password..."
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <Link>Forgot your password</Link>
            <p>OR</p>
            <p>
              Dont have account?{" "}
              <Link to={ROUTER.REGISTER_ROUTE}>Register Now</Link>
            </p>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

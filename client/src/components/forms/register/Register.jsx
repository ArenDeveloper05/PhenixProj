import "./Register.scss";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROUTER } from "../../../router/router";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  repeat: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Register = () => {
  return (
    <div className="register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          repeat: "",
          email: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form>
            <p>Registration</p>
            <div className="form-row">
              <Field type="text" name="firstName" placeholder="First Name" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div className="form-row">
              <Field type="text" name="lastName" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="div" />
            </div>
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
            <div className="form-row">
              <Field
                type="text"
                name="repeat"
                placeholder="Repeat password..."
              />
              <ErrorMessage name="repeat" component="div" />
            </div>
            <p>
              Already have account?{" "}
              <Link to={ROUTER.LOGIN_ROUTE}>Login Now</Link>
            </p>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { logInUser } from "../../redux/slices/userAuthSlice";

function LogInForm() {
  const dispatch = useDispatch();
  const { error, authorized } = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("You need to enter valid email").required("You need to enter your email to continue"),
      password: Yup.string().required("Password required"),
    }),
    onSubmit: (values) => {
      dispatch(logInUser({ email: values.email, password: values.password }));
    },
  });

  return (
    <form className="log-in-form" onSubmit={formik.handleSubmit}>
      <div className="input-wrapper">
        <label>Email:</label>
        {formik.errors.email && formik.touched.email ? (
          <label className="form-input-error">{formik.errors.email}</label>
        ) : null}
        <input
          className="input"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>
      <div className="input-wrapper">
        <label>Password:</label>
        {formik.errors.password && formik.touched.password ? (
          <label className="form-input-error">{formik.errors.password}</label>
        ) : null}
        <input
          className="input"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>
      <button type="submit" className="button log-in-form-btn">
        Log In
      </button>
      {error ? <p className="error">User with this email does not exist, you need to register first</p> : null}
      {authorized === false ? <p className="error">You entered the wrong password</p> : null}
    </form>
  );
}

export default LogInForm;

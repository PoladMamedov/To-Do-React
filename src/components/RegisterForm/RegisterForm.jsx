import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { registerUser } from "../../redux/slices/userAuthSlice";

function RegisterForm() {
  const dispatch = useDispatch();
  const { userExists, userCreated, userInfo } = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("You need to enter your name to continue"),
      email: Yup.string().email("You need to enter valid email").required("You need to enter your email to continue"),
      password: Yup.string().required("Password required"),
    }),
    onSubmit: (values) => {
      dispatch(registerUser({ name: values.name, email: values.email, password: values.password }));
    },
  });

  return (
    <form className="log-in-form" onSubmit={formik.handleSubmit}>
      <div className="input-wrapper">
        <label>Name:</label>
        {formik.errors.name && formik.touched.name ? (
          <label className="form-input-error">{formik.errors.name}</label>
        ) : null}
        <input
          className="input"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>
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
        Register
      </button>
      {userCreated ? <p className="success">User created succesfully, now you can login!</p> : null}
      {userExists ? <p className="error">User {userInfo.name} with this email already exists, please login</p> : null}
    </form>
  );
}

export default RegisterForm;

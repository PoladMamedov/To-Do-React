// import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// import * as Yup from "yup";

// function SetNameForm() {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("You need to enter your name to continue!"),
//     }),
//     onSubmit: (values) => {
//       dispatch(setName(values.name));
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className="log-in-form">
//       <h2 className="welcome">
//         Welcome! <br /> Enter your Name to continue:
//       </h2>
//       {formik.errors.name && formik.touched.name ? (
//           <label className="set-name-form-error">
//             {formik.errors.name}
//           </label>
//         ) : null}
//       <input
//         className="input"
//         type="text"
//         placeholder="Enter your name..."
//         name="name"
//         value={formik.values.name}
//         onBlur={formik.handleBlur}
//         onChange={formik.handleChange}
//       />
//       <button type="submit" className="button log-in-form-btn">
//         Log In
//       </button>
//     </form>
//   );
// }

// export default SetNameForm;

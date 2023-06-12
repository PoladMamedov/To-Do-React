import { useDispatch, useSelector } from "react-redux";
import { addToDo, addToDoToState } from "../../redux/slices/toDoListSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import dateFormat from "dateformat";

function ToDoAdd() {
  const dispatch = useDispatch();
  const { email, token } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      toDo: "",
    },
    validationSchema: Yup.object({
      toDo: Yup.string().required("This field is required when adding to-do"),
    }),
    onSubmit: (values, { resetForm }) => {
      const addingDate = dateFormat(new Date());
      const toDoInfo = { email: email, toDo: values.toDo, date: addingDate, done: false };
      dispatch(addToDoToState(toDoInfo));
      dispatch(addToDo({ toDoInfo, token: token }));
      resetForm();
    },
  });

  return (
    <section>
      <form onSubmit={formik.handleSubmit} className="container todo-add-container">
        {formik.errors.toDo && formik.touched.toDo ? (
          <label htmlFor="toDo" className="todo-add-form-error">
            {formik.errors.toDo}
          </label>
        ) : null}
        <input
          className="input"
          type="text"
          placeholder="I need to do..."
          name="toDo"
          value={formik.values.toDo}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </section>
  );
}

export default ToDoAdd;

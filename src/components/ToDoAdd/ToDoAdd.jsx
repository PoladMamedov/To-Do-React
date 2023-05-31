import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/slices/toDoListSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

function ToDoAdd() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      toDo: "",
    },
    validationSchema: Yup.object({
      toDo: Yup.string().required("This field is required when adding to-do"),
    }),
    onSubmit: (values) => {
      const date = new Date();
      const addingDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
      dispatch(addToDo({id: Date.now(), toDo: values.toDo, date: addingDate, done: false }));
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

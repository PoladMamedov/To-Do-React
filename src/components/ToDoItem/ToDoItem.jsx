/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, deleteToDoFromState, doneToggle, markAsDone } from "../../redux/slices/toDoListSlice";

function ToDoItem({ item }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const { date, _id, done, toDo } = item;
  return (
    <li className="todo-item">
      <label className="checkbox-container">
        <input
          type="checkbox"
          onChange={() => {
            dispatch(markAsDone(_id));
            dispatch(doneToggle({ _id, token }));
          }}
          checked={done ? true : false}
        />
        <svg viewBox="0 0 64 64" height="2em" width="2em">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className="path"
          ></path>
        </svg>
      </label>
      <p className="date">{date}</p>
      <p className="todo-text" style={done ? { textDecoration: "line-through" } : null}>
        {toDo}
      </p>
      <button
        onClick={() => {
          dispatch(deleteToDoFromState(_id));
          dispatch(deleteToDo({ _id, token }));
        }}
        className="button delete-button"
      >
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;

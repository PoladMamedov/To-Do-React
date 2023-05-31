import { useDispatch, useSelector } from "react-redux";
import { removeAllToDos } from "../../redux/slices/toDoListSlice";
import { setName } from "../../redux/slices/userNameSlice";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.name);

  return (
    <header className="header">
      <div className="container header-container">
        <div>
          <h1>To-Do list</h1>
          <h3>Hello, {userName}!</h3>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(removeAllToDos());
            }}
            className="button"
          >
            Delete All
          </button>
          <button
            onClick={() => {
              dispatch(setName(""));
              dispatch(removeAllToDos());
            }}
            className="button log-in-btn"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

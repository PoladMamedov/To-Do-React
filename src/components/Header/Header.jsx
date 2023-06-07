import { useDispatch, useSelector } from "react-redux";
import { removeAllToDos } from "../../redux/slices/toDoListSlice";
import { logOut } from "../../redux/slices/userAuthSlice";

function Header() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);
  return (
    <header className="header">
      <div className="container header-container">
        <div>
          <h1>To-Do list</h1>
          <h3>Hello, {name}!</h3>
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
              dispatch(logOut());
              localStorage.removeItem("userName");
              localStorage.removeItem("token");
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

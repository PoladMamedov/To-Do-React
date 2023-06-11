import { useDispatch, useSelector } from "react-redux";
import { deleteAll, removeAllToDos } from "../../redux/slices/toDoListSlice";
import { logOut } from "../../redux/slices/userAuthSlice";

function Header() {
  const dispatch = useDispatch();
  const { name, email, token } = useSelector((state) => state.user);
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
              dispatch(deleteAll({email, token}));
            }}
            className="button"
          >
            Delete All
          </button>
          <button
            onClick={() => {
              dispatch(logOut());
              localStorage.removeItem("userInfo");
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

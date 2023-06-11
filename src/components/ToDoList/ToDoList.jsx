import { useSelector } from "react-redux";
import ToDoItem from "../ToDoItem/ToDoItem";
import Loader from "../Loader/Loader";

function ToDoList() {
  const toDoItems = useSelector((state) => state.toDoList);
  return toDoItems.loading ? (
    <Loader />
  ) : (
    <section>
      <div className="container">
        <ul className="todo-list">
          {toDoItems?.map((item, index) => {
            return <ToDoItem key={index} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default ToDoList;

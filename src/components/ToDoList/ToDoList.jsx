import { useSelector } from "react-redux";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList() {
  const toDoItems = useSelector((state) => state.toDoList);
  return (
    <section>
      <div className="container">
        <ul className="todo-list">
          {toDoItems.map((item, index) => {
            return <ToDoItem key={index} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default ToDoList;

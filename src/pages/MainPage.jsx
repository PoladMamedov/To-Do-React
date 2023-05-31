import { useEffect } from "react";
import Header from "../components/Header/Header";
import ToDoAdd from "../components/ToDoAdd/ToDoAdd";
import ToDoList from "../components/ToDoList/ToDoList";
import { useDispatch } from "react-redux";
import { setToDos } from "../redux/slices/toDoListSlice";

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToDos(JSON.parse(localStorage.getItem("todos"))));
  });
  return (
    <>
      <Header />
      <ToDoAdd />
      <ToDoList />
    </>
  );
}

export default MainPage;

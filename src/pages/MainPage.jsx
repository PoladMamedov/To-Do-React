import { useEffect } from "react";
import Header from "../components/Header/Header";
import ToDoAdd from "../components/ToDoAdd/ToDoAdd";
import ToDoList from "../components/ToDoList/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { getToDos } from "../redux/slices/toDoListSlice";

function MainPage() {
  const dispatch = useDispatch();
  const { email, token } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getToDos({ email, token }));
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

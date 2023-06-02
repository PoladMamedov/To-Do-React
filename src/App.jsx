import { useEffect } from "react";
import SetNameForm from "./components/setNameForm/setNameForm";
import MainPage from "./pages/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./redux/slices/userNameSlice";

function App() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.name);
  useEffect(() => {
    if (localStorage.getItem("name")) {
      const name = localStorage.getItem("name");
      dispatch(setName(name));
    }
  });
  return (
    <>
      {userName ? <MainPage /> : <SetNameForm />}
      <footer className="main-footer">Designed & created by Polad Mamedov 2023</footer>
    </>
  );
}

export default App;

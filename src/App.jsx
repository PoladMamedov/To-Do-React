import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { setUserNameToken } from "./redux/slices/userAuthSlice";
import LoginPage from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userName"));
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    if (token) {
      dispatch(setUserNameToken({ userName, token }));
    }
  }, [dispatch]);
  return (
    <>
      {token ? <MainPage /> : <LoginPage />}
      <footer className="main-footer">Designed & created by Polad Mamedov 2023</footer>
    </>
  );
}

export default App;

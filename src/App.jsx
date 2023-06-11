import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { setUserNameToken } from "./redux/slices/userAuthSlice";
import LoginPage from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      const { name, email, token } = userInfo;
      dispatch(setUserNameToken({ name, email, token }));
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

import { useState } from "react";
import LogInForm from "../components/LogInFrom/LogInForm";
import { useSelector } from "react-redux";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Loader from "../components/Loader/Loader";

function LoginPage() {
  const [registerForm, setRegisterForm] = useState(false);
  const { loading } = useSelector((state) => state.user);
  return (
    <section>
      <div className="container">
        <div className="forms-wrapper">
          <h2 className="welcome">
            Welcome! <br /> Register or log in to continue:
          </h2>
          <div className="form-change-btns">
            <button
              onClick={() => {
                setRegisterForm(false);
              }}
              className={registerForm ? "form-change-btn" : "form-change-btn active-form-btn"}
            >
              Log in
            </button>
            <button
              onClick={() => {
                setRegisterForm(true);
              }}
              className={registerForm ? "form-change-btn active-form-btn" : "form-change-btn"}
            >
              Register
            </button>
          </div>
          {registerForm ? <RegisterForm /> : <LogInForm />}
        </div>
      </div>
      {loading ? <Loader /> : null}
    </section>
  );
}

export default LoginPage;

import React from "react";
import LoginField from "../components/LoginField";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="Login__">
      <div className="title">
        <h1>Добро Пожаловать!</h1>
        <span>Введите свои данные для входа</span>
      </div>
      <LoginField />
    </div>
  );
};

export default Login;

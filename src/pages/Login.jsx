import React from "react";
import LoginField from "../components/LoginField";

const Login = () => {
    return (
        <div>
            <h1>Добро Пожаловать!</h1>
            <span>Введите свои данные для входа</span>
            <LoginField/>
        </div>
    );
};

export default Login;
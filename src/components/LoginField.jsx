import React from "react";
import "./LoginField.css";

const LoginField = () => {
  const [passInputChanged, setPassInputChanged] = React.useState("");
  const [type, setType] = React.useState("password");

  const togglePassInput = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className="login-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="login">Email</label>
        <input type="text" name="login" className="input-password" placeholder="Введите почту"/>
        <label htmlFor="password">Пароль</label>
        <div className="password-container">
          <input
            type={type}
            value={passInputChanged}
            onChange={(e) => setPassInputChanged(e.target.value)}
            placeholder="Введите пароль" className="input-password"
          />
          <button
            type="button"
            onClick={togglePassInput}
            className="toggle-button"
          >
            {type === "password" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="15"
                height="15"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="15"
                height="15"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="button-container">
            <div className="check">
                <input type="checkbox" id="remember" name="remember" />
                <span>Запомнить меня</span>
            </div>
            <a>Забыли пароль?</a>
        </div>
        <button type="submit" className="submit-button">Войти</button>
      </form>
    </div>
  );
};

export default LoginField;

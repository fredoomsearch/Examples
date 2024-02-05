/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const Login = () => {
  const navigation = useNavigate();
  const { setIslogin } = useUser();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const userLogin = (e) => {
    e.preventDefault();
    if (userInfo.email === "julian@gmail.com" && userInfo.password === "1234") {
      alert("Bienvenido");
      setIslogin(true);
      localStorage.setItem("login", true);
      navigation("/");
      return;
    }

    alert("Email y contraseña inválidos");
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url("https://cloudfront-us-east-1.images.arcpublishing.com/infobae/SPWTFYRISZBN5HGORXSB4655AY.jpg")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black"
      }}
    >
      <div className="">
        <h1 className="text-center" style={{ color: "white" }}>
          Login
        </h1>
        <form onSubmit={userLogin}>
          {/* Capturar el correo */}
          <div className="mb-3" style={{ marginBottom: "10px" }}>
            <label className="form-label" style={{ color: "white" }}>
              Correo:
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              autoFocus
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Capturar la contraseña */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>
              Contraseña:
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="text-center mt-3">
            <button
              type="submit"
              className="btn btn-dark btn-lg"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

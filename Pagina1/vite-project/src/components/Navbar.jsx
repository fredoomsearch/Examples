/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const Navbar = () => {
  const navigation = useNavigate();
  const { isLogin, setIslogin } = useUser();

  const salir = () => {
    setIslogin(false);
    navigation("/login");
    localStorage.setItem("login", false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light bg-light navbar-dark bg-dark"
       
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to={"/"}
            style={{ color: "white" }}
          >
            Inicio
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLogin ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      style={{ backgroundColor: "transparent", color: "white" }}
                      to={"/recetas"}
                    >
                      Recetas
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={"/inscripcion"}
                      style={{ backgroundColor: "transparent", color: "white" }}
                    >
                      Inscripcion
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-primary"
                      onClick={() => salir()}
                      style={{ backgroundColor: "transparent", color: "white" }}
                    >
                      Salir
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={"/info"}
                      style={{ backgroundColor: "transparent", color: "white" }}
                    >
                      Info
                    </NavLink>
                  </li>

          
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

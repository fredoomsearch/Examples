/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/recetas");
      setRecetas(data.data);
    } catch (error) {
      console.log("Error al obtener la receta", error.message);
    }
  };

  return (
    <div className="app">
      <h1 className="text-center text-white">HOLA BIENVENIDO A TU PAGINA DE RECETAS</h1>
      <footer className="p-5  text-center text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis sint quae! Doloremque, natus veniam.
                <img
                  src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/11/06/5fb28928955c4.jpeg"
                  alt=""
                />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <i className=""></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>

              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
              ></link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

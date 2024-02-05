/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  nombrePlato: "",
  imgUrl: "",
  videoUrl: "",
  cultura: "",
  categoria: "",
  presupuesto: "",
};

export const Inscripcion = () => {
  const [inscripciones, setInscripciones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEdit] = useState(false);

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    obtenerInscripciones();
  }, []);

  const obtenerInscripciones = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("http://localhost:8080/recetas");
      setInscripciones(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(`Error in obtenerInscripciones function: ${error.message}`);
    }
  };

  const eliminarInscripcion = async (id) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminarlo",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        const { data } = await axios.delete(`http://localhost:8080/recetas/${id}`);
        obtenerInscripciones();
        setIsLoading(false);
        Swal.fire({
          text: data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await actualizarInscripcion();
    } else {
      guardarInscripcion();
    }
  };

  const guardarInscripcion = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/recetas", formData);
      Swal.fire({
        icon: "success",
        text: data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      obtenerInscripciones();
    } catch (error) {
      handleApiError(error);
    }
  };

  const actualizarInscripcion = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/recetas/${formData.id}`,
        formData
      );
      Swal.fire({
        icon: "success",
        text: data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      obtenerInscripciones();
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleApiError = (error) => {
    if (error.response && error.response.data && error.response.data.message) {
      Swal.fire({
        icon: "error",
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "Error occurred while processing the request",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    console.log(`API Error: ${error.message}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "right", paddingRight: "3px" }}>Agrega Nuevas Ideas</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Agregar nueva inscripción
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <form onSubmit={handleSubmit}>
                <div style={{ textAlign: "right", paddingRight: "3px" }}>
                  <label htmlFor="nombrePlato">Nombre:</label>
                  <input
                    type="text"
                    id="nombrePlato"
                    name="nombrePlato"
                    value={formData.nombrePlato}
                    onChange={handleInputChange}
                  />
                </div>

                <div style={{ textAlign: "right", paddingRight: "3px" }}>
                  <label htmlFor="imgUrl">ImgUrl:</label>
                  <input
                    type="text"
                    id="imgUrl"
                    name="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleInputChange}
                  />
                </div>

                <div style={{ textAlign: "right", paddingRight: "3px" }}>
                  <label htmlFor="videoUrl">VideoUrl:</label>
                  <input
                    type="text"
                    id="videoUrl"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleInputChange}
                  />
                </div>

                <div style={{ textAlign: "right", paddingRight: "3px" }}>
                  <label htmlFor="cultura">Cultura y Descripcion:</label>
                  <input
                    type="text"
                    id="cultura"
                    name="cultura"
                    value={formData.cultura}
                    onChange={handleInputChange}
                  />
                </div>

                <div style={{ textAlign: "right", paddingRight: "3px" }}>
                  <label htmlFor="categoria">CATEGORIA:</label>
                  <h5 className="text">1 BBQ</h5>
                  <input
                    type="text"
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleInputChange}
                  />
                </div>

                <div style={{ textAlign: "right", paddingRight: "3px" }}>
                  <button type="submit">
                    {isEdit ? "Actualizar" : "Guardar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      {isLoading ? (
        <p></p>
      ) : (
        <ul>
          {inscripciones.map((inscripcion) => (
            <li key={inscripcion.id}>
              {inscripcion.nombrePlato} 
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => eliminarInscripcion(inscripcion.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      <footer className="p-5 bg-dark text-center text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis sint quae! Doloremque, natus veniam.
              </p>
              <h2></h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <i className=""></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </footer>
    </div>
  );
};

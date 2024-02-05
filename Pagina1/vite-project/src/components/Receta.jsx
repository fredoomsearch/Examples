/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

// Modal Component
const Modal = ({ receta, closeModal }) => {
  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
          <img src={receta.imgUrl} className="card-img-top" alt="img" />
            <h5>{receta.nombrePlato}</h5>
            <p>{receta.cultura}</p>
            <a href={receta.videoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Ver video
          </a>
          
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Receta Component
export const Receta = ({ receta }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* Card Component */}
      <div className="card text-white bg-dark" style={{ width: "18rem" }} onClick={openModal}>
        <img src={receta.imgUrl} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{receta.nombrePlato}</h5>
          <p className="card-text">{receta.cultura}</p>
          <p className="card-text">Categoria: 1 ASADOS</p>
         
        </div>
      </div>

      {/* Modal Component */}
      {modalVisible && <Modal receta={receta} closeModal={closeModal} />}
    </>
  );
};

export default Receta;

/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
export const Inicio = () => {
  return (
    <div>
        
      <Link className="btn btn-warning" to={"/"}>
        
      <i class="bi bi-backspace-fill" style={{ color: "black" }}></i>
      </Link>

      <h1>HOLA BIENVENIDO A TU PAGINA DE RECETAS</h1>
      <footer class="p-5 bg-dark text-center text-white">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis sint quae! Doloremque, natus
                        veniam.</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <i class=""></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
        </div>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>

    </footer>
      

      <img
        src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/11/06/5fb28928955c4.jpeg"
        alt=""
      />     
      {/* <button className="btn btn-warning" onClick={() => navigation("/")}>Vover a la App</button> */}     
    </div>
    
  );
};

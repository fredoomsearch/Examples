import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { InputSearch } from "../components/InputSearch";
import { Receta } from "../components/Receta.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Recetas = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [recetas, setRecetas] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clean = useCallback(() => {
    setRecetas([]);
    setInputSearch("");
    navigate("");
  }, [navigate]);

  useEffect(() => {
    const nombre = searchParams.get("nombre") || "";
    if (nombre === "") {
      return clean();
    }
    setInputSearch(nombre);
    getRecetas(nombre);
  }, [searchParams, clean]);

  const getRecetas = async (nombre) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "http://localhost:8080/recetas/nombre/" + nombre
      );
      setRecetas(data.data); // Actualiza el estado recetas con los datos obtenidos
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false); // Establece isLoading en false en caso de error
      console.log("Error en getRecetas", error.message);
    }
  };

  const search = (e) => {
    if (e.target.value === "") {
      return clean();
    }
    setInputSearch(e.target.value);
    navigate(`?nombre=${e.target.value}`);
  };

  return (
    <div className="recetas-container">
      <div className="background-image"></div>
      <InputSearch valueSearch={inputSearch} search={search} />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="row">
          {recetas && recetas.length > 0 ? (
            recetas.map((receta) => <Receta key={receta.id} receta={receta} />)
          ) : (
            <div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Recetas;


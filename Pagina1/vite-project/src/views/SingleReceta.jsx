/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const SingleReceta = () => {
  const { id } = useParams();

  const [, setReceta] = useState({});
  const [, setError] = useState(false);
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    const searchReceta = async () => {
      setIsLoading(true);
      setIsLoading(false);
      if (data.Error) {
        setError(true);
        return
      }
      setReceta(data);
    }
    searchReceta()
  }, [id]);


}

export default SingleReceta;
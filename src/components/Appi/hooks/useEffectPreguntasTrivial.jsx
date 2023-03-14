import PreguntasTrivialApi from "../PreguntasTrivialApi";
import { useEffect, useState } from "react";

function useEffectPreguntasTrivial() {
  const [preguntasTrivial, setPreguntasTrivial] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await PreguntasTrivialApi();
        setPreguntasTrivial(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  console.log("preguntasTrivial", preguntasTrivial);
  return preguntasTrivial;
}

export default useEffectPreguntasTrivial;

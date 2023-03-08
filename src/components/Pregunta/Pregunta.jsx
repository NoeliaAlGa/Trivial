import React, { useState } from 'react'
import Preguntas from '../preguntas/Preguntas'
import ImgPajaro from "../../img/pajaro.jpg";
import ImgSuperheroes from "../../img/marvel.jpg";
import ImgColon from "../../img/colon.jpg"
import {DivPregunta, UlStyle, ImgStyle, LiStyle} from './style/preguntaStyle';



const Pregunta = () => {
    const [indice, setIndice] = useState(0);
    const [imgActual, setImgActual] = useState(ImgPajaro);

  return (
    <div>
        <h1>{Preguntas[indice].pregunta}</h1>
        <DivPregunta>
            <UlStyle>
                {Preguntas[indice].respuestas.map((respuesta, index) => {
                    if(respuesta === "Tienen hambre") {
                        return <LiStyle onClick={() => {
                            setIndice(indice + 1);
                            setImgActual(ImgSuperheroes);
                        }} key={index}>{respuesta}</LiStyle>
                    }
                    else if(respuesta === "Spiderman") {
                        return <LiStyle onClick={() =>{ 
                            setIndice(indice + 1);
                            setImgActual(ImgColon);
                        }} key={index}>{respuesta}</LiStyle>
                    }
                    else if(respuesta === "Colón" ) {
                        return <LiStyle onClick={() => {
                            setIndice(0);
                            setImgActual(ImgPajaro);
                            alert("Has hacertado todas las preguntas!");
                        }} key={index}>{respuesta}</LiStyle>
                    }
                    else {
                        return <LiStyle key={index}>{respuesta}</LiStyle>
                    }
                })}
            </UlStyle>
            <ImgStyle src={imgActual} alt={Preguntas[indice].pregunta}></ImgStyle>
        </DivPregunta>
    </div>
  )
}

export default Pregunta
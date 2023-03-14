import React, { useState } from 'react'
import ImgTrivial from "../../img/trivial.jpg";
import ImgArtsLiterature from "../../img/ArtLiterature.png";
import ImgGeneralKnowledge from "../../img/GeneralKnowledge.jpg";
import ImgFilmTV from "../../img/Film&TV.jpg";
import ImgHistory from "../../img/history.jpg";
import ImgScience from "../../img/Science.jpg";
import ImgGeography from "../../img/Geography.jpg";
import ImgMusic from "../../img/Music.jpg";
import ImgSocietyCulture from "../../img/Society&Culture.jpg";
import ImgSportLeisure from "../../img/Sport&Leisure.png";
import {DivPregunta, UlStyle, ImgStyle, LiStyle} from './style/preguntaStyle';
import useEffectPreguntasTrivial from '../Appi/hooks/useEffectPreguntasTrivial';



const Pregunta = () => {
    
    const [indice, setIndice] = useState(0);
    const [imgActual, setImgActual] = useState(ImgTrivial);
    const [isLoading, setIsLoading] = useState(true);
    const preguntas = useEffectPreguntasTrivial();
    const preguntasTrivial = [];

    preguntas.map(pregunta => {
        const respuestas = pregunta.incorrectAnswers.concat(pregunta.correctAnswer) ;
        return preguntasTrivial.push({
            pregunta: pregunta.question,
            categoria: pregunta.category,
            respuestas: respuestas.sort(),
            respuestCorrecta: pregunta.correctAnswer
        })
    })

    if (preguntasTrivial.length > 0 && isLoading) {
        setIsLoading(false);
    }
    
    if (isLoading) {
        return <div>Cargando...</div>;
    }
      
    console.log("preguntas", preguntas);
    console.log("preguntasTrivial", preguntasTrivial);
    
  return (
    <div>
        <h2>{preguntasTrivial[indice].pregunta}</h2>
        <DivPregunta>
                    <UlStyle>
                        {preguntasTrivial[indice].respuestas.map((respuesta, index) => {
                            if(respuesta === preguntasTrivial[indice].respuestCorrecta) {
                                return <LiStyle key={index} onClick ={() => {
                                    if(preguntasTrivial.length -1 === indice) {
                                        alert("EL juego a finalizado!");
                                        setIndice(0);
                                    } else {
                                        setIndice(indice + 1);
                                        if(preguntasTrivial[indice + 1].categoria === "Arts & Literature") {
                                            setImgActual(ImgArtsLiterature)
                                        } else if(preguntasTrivial[indice + 1].categoria === "General Knowledge") {
                                            setImgActual(ImgGeneralKnowledge)
                                        } else if(preguntasTrivial[indice + 1].categoria === "Film & TV") {
                                            setImgActual(ImgFilmTV)
                                        } else if(preguntasTrivial[indice + 1].categoria === "History") {
                                            setImgActual(ImgHistory)
                                        } else if(preguntasTrivial[indice + 1].categoria === "Science") {
                                            setImgActual(ImgScience)
                                        } else if(preguntasTrivial[indice + 1].categoria === "Geography") {
                                            setImgActual(ImgGeography)
                                        } else if(preguntasTrivial[indice + 1].categoria === "Music") {
                                            setImgActual(ImgMusic)
                                        } else if(preguntasTrivial[indice + 1].categoria === "Society & Culture") {
                                            setImgActual(ImgSocietyCulture)
                                        } else {
                                            setImgActual(ImgSportLeisure)
                                        }
                                    }
                                    
                                }}>{respuesta}</LiStyle>
                            } else {
                                return <LiStyle key={index}>{respuesta}</LiStyle>
                            } 
                        })}
                    </UlStyle>
                    <ImgStyle src={imgActual} alt={preguntasTrivial[indice].pregunta}></ImgStyle>
                </DivPregunta>
    </div>
  )
}

export default Pregunta
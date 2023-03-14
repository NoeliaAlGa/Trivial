import ImgPajaro from "../../img/pajaro.jpg";
import ImgSuperheroes from "../../img/marvel.jpg";
import ImgColon from "../../img/colon.jpg"

const Preguntas = [
    {
        pregunta: "¿Por qué lo pájaros pían?",
        respuestas: ["Tienen frío", "Están tristes", "Tienen hambre", "Están contentos"],
        respuestCorrecta: "Tienen hambre",
        imagen: {ImgPajaro}
    },
    {
        pregunta: "¿Quién es el mayor superheroe de todos los tiempos?",
        respuestas: ["Batman", "Spiderman", "Daredevil", "Tanos"],
        respuestCorrecta: "Spiderman",
        imagen: {ImgSuperheroes}
    },
    {
        pregunta: "¿Quien descubrió América?",
        respuestas: ["Colón", "El Fari", "Obama", "Da Vinci"],
        respuestCorrecta: "Colón",
        imagen: {ImgColon}
    },
];
export default Preguntas;
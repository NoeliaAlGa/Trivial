import axios from 'axios';

async function PreguntasTrivialApi() {
try {
const response = await axios.get('https://the-trivia-api.com/api/questions');
const preguntas = response.data;
return preguntas;
} catch (error) {
console.error(error);
}
}

export default PreguntasTrivialApi;
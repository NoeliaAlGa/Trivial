import logo from './img/trivial2.png';
import {ImgTrivial, DivGeneral, TrivialH1} from './style/AppStyle';
import Pregunta from './components/Pregunta/Pregunta.jsx'

function App() {
  return (
    <DivGeneral className="App">
      <header className="App-header">
        <ImgTrivial src={logo} className="App-logo" alt="logo" />
        <TrivialH1>
          TRIVIAL
        </TrivialH1>
        <Pregunta />
      </header>
    </DivGeneral>
  );
}

export default App;

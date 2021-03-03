import React, { useCallback } from 'react';
import {FiArrowRight} from 'react-icons/fi';

import Background from './background.png';
import './App.css';

const App: React.FC = () => {
  const handleOnSubmit = useCallback((event) => {
    event.preventDefault();
    let resultadoBanda = 0;

    const {devices, stream, gamer} = event.target;

    if(gamer && !stream) {
      resultadoBanda += 50;
    }

    if(!gamer && stream){
      resultadoBanda += 25;
    }

    if(gamer && stream) {
      resultadoBanda += 50;
    }

    resultadoBanda += devices.value * 5;

    alert(`Sua velocidade Ideal é de ${resultadoBanda}MB`)
  },[]);

  return (
    <div className="Container">
      <div className="Content">
        <h1>Cálculo de banda</h1>

        <form onSubmit={handleOnSubmit} >
          <div className="radioInputs">
            <p>Quantidade de dispositivos conectados</p>

            <input name="devices" id="devicesInput" type="number" placeholder="Dispositivos Conectados"/>
            
          </div>
          
          <div className="radioInputs">
            <p>Utiliza Youtube, Netflix ou Amazon Prime?</p>

            <input type="radio" id="simStream" name="stream" value="sim" />
            <label htmlFor="simStream">Sim</label>
            <input type="radio" id="naoStream" name="stream" value="nao" />
            <label htmlFor="naoStream">Não</label>
          </div>

          <div className="radioInputs">
            <p>Usuários Gamer?</p>
            
            <input type="radio" id="simGamer" name="gamer" value="sim" />
            <label htmlFor="simGamer">Sim</label>
            <input type="radio" id="naoGamer" name="gamer" value="nao" />
            <label htmlFor="naoGamer">Não</label>
          </div>
  
          <button type="submit">Calcular</button>

          <a href="/">
            Análise Avançada
            <FiArrowRight size="20"/>
          </a>
        </form>
      </div>

      <img src={Background} alt="Planeta Iluminado"/>
    </div>
  );
}

export default App;

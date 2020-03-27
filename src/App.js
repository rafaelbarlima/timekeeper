import React from 'react';
import './App.css';
import Formulario from './views/Formulario/index.js';
import CardsUteis from './views/FiltrosECardsUteis/CardsUteis/index.js';
import FiltroPeriodo from './views/FiltrosECardsUteis/FiltroPeriodo/index.js';
import Dados from './views/TimeEntries/Dados/index.js';
import Botoes from './views/TimeEntries/Botoes/index.js';

class App extends React.Component {

  render(){
    return (
      <div>
        <div>
          <Formulario />   
        </div>
  
        <div>
          <CardsUteis />
          <FiltroPeriodo />
        </div>
  
        <div className="ui container">
          <main className="ui one cards">
            <div className="card">
              <div className="content center aligned">
                <div className="ui label">
                  <span>Sexta, 13 de Março</span>
                </div>
              </div>
              <div className="content">
                <Dados/>
                <Botoes />
              </div>
              <div className="content center aligned">
                <div className="ui label">
                    <span>Total de horas: 1:47:00</span>
                </div>
              </div>
            </div>
          </main>
        </div>

        <div className="ui center aligned basic segment">
          <button className="ui blue basic button">Carregar mais</button>
        </div>
      </div>
    );
  }
  
}

export default App;

import React from 'react';
import './App.css';
import Formulario from './views/Formulario/index.js';
import CardsUteis from './views/FiltrosECardsUteis/CardsUteis/index.js';
import FiltroPeriodo from './views/FiltrosECardsUteis/FiltroPeriodo/index.js';
import TimeEntries from './views/TimeEntries/index.js';

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
            <TimeEntries />
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

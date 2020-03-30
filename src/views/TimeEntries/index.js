import React from 'react';
import Dados from './Dados/index.js';
import Botoes from './Botoes/index.js';

class TimeEntries extends React.Component{

    render(){
        return (
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
        );
    }
}




export default TimeEntries;
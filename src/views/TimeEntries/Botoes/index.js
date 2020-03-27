import React from 'react';

class Botoes extends React.Component{

    render(){
        return(
            <div className="botoes"> {/*\ 1 Evento - GET\*/}
                <span className="right floated mini ui">
                    <div className="ui button basic green" title="Continuar atividade">
                        <i className="play icon"></i>
                    </div>
                </span>
                <span className="right floated mini ui"> {/*\ 1 Evento - PUT/PATCH\*/}
                    <div className="ui button basic orange" title="Editar atividade">
                        <i className="edit icon"></i>
                    </div>
                </span>
                <span className="right floated mini ui"> {/*\ 1 Evento - DELETE\*/}
                    <div className="ui button basic red" title="Excluir atividade">
                        <i className="trash icon"></i>
                    </div>
                </span>
            </div>
        );
    }
}




export default Botoes;
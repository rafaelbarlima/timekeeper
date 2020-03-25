import React from 'react';
import UiButton from '../Botao/UiButton.js';

class Botoes extends React.Component{

    render(){
        return(
            <div className="botoes"> {/*\ 1 Evento - GET\*/}
                <span className="right floated mini ui">
                    <UiButton className="basic green" title="Continuar atividade">
                        <i className="play icon"></i>
                    </UiButton>
                </span>
                <span className="right floated mini ui"> {/*\ 1 Evento - PUT/PATCH\*/}
                    <UiButton className="basic orange" title="Editar atividade">
                        <i className="edit icon"></i>
                    </UiButton>
                </span>
                <span className="right floated mini ui"> {/*\ 1 Evento - DELETE\*/}
                    <UiButton className="basic red" title="Excluir atividade">
                        <i className="trash icon"></i>
                    </UiButton>
                </span>
            </div>
        );
    }
}




export default Botoes;
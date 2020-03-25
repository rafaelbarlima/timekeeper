import React from 'react';
import Item from './Item.js';
import Input from './Input.js';
import Cronometro from './Cronometro.js';
import BotaoEnviar from './BotaoEnviar.js';

class Formulario extends React.Component {

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="ui form five menu item borderless large" method="POST" action="" onSubmit={this.onFormSubmit} id="formularioId">
                <Item classeItem="item">  { /*\ 2 eventos GET CARD E PROJETOS\*/}
                    <Input classe="ui left corner label" id="card" classeIcone="asterisk icon"/>
                </Item>
                <Item classeItem="item maior-input">
                    <Input
                        classe="ui left corner label"
                        classeIcone="keyboard icon"
                        numeroCaracteres="1024"
                    />
                </Item>
                <Item classeItem="item right aligned">
                    <Cronometro/>
                </Item>
                <Item classeItem="item right aligned">
                    <BotaoEnviar /> { /*\ 1 evento POST ATIVIDADES\*/}
                </Item>
            </form>
        );
    }

}




export default Formulario;
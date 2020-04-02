import React from 'react';
import './index.css';

class ProjetosECards extends React.Component {

    funcionExibirMenuFlutuante = () => {
        this.props.exibeMenuFlutuante(true);
    };

    funcionProjetosECardsInput = () => {
        return (
            <React.Fragment>
                <div className="ui left corner label">
                    <i className="asterisk icon"></i>
                </div>
                <div className="ui selection fluid dropdown" >
                    <button type="button">
                        <span className="opacidade espaco-esquerda" placeholder="">Projetos</span>
                    </button> 
                    <i className="dropdown icon"></i>
                </div>
            </React.Fragment>
        );
    }


    funcionProjetosECardsPreenchidos = () => {
        return (
            <React.Fragment>
                <div className="ui left corner label">
                    <i className="green save icon"></i>
                </div>
                <div className="ui selection fluid dropdown" >
                    <button type="button" className="espaco-esquerda">
                        <span>[{this.props.projeto}, </span>
                        <span>{this.props.card}]</span>
                    </button>
                    <i className="dropdown icon"></i>
                </div>
            </React.Fragment>
        );
    }

    funcionConteudo = () => {

        if ((this.props.projeto) && (this.props.card)) {
            return this.funcionProjetosECardsPreenchidos();
        } else {
            return this.funcionProjetosECardsInput();
        }
    }



    render() {
        return (
            <div className="ui selection left corner labeled input" onClick={this.funcionExibirMenuFlutuante}>

                {this.funcionConteudo()}


            </div>

        );
    }
}





export default ProjetosECards;
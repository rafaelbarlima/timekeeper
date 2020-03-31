import React from 'react';
import ProjetosECards from './ProjetosECards/index.js';
import Descricao from './Descricao/index.js';
import Cronometro from './Cronometro/index.js';
import './index.css';

class Formulario extends React.Component {

    state = {
        projeto: "",
        card: "",
        descricao: "",
        totalTrabalho: "",
        variavelMenu: false
    }

    gravaProjeto = (event) => {
        this.setState({ projeto: event.target.value });
    }

    gravaCard = (event) => {
        this.setState({ card: event.target.value });
    }



    exibeMenuFlutuante = (valor) => {
        this.setState({ variavelMenu: valor });

        //O primeiro valor a aparecer é false, depois é true.
    }

    gravaDescricao = (valor) => {
        this.setState({ descricao: valor });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    onPlayClick = (event) => {

        var iconePlay = document.querySelector("#iconePlay");
        var iconeEscondido = document.querySelector(".esconder");

        iconePlay.classList.add("esconder");
        iconeEscondido.classList.remove("esconder");
    }

    onSaveClick = () => {
        this.setState({ variavelMenu: false });
    }

    onCancelClick = () => {
        this.setState({ variavelMenu: false });
        this.setState({ projeto: "" });
        this.setState({ card: "" });
    }

    menuFlutuante = (e) => {

        if (this.state.variavelMenu === true) {

            return (
                <div className="ui menuFlutuante">
                    <div className="ui labeled right icon input loading">
                        <div className="ui label">
                            Projetos
                        </div>
                        <input type="text" onChange={this.gravaProjeto} />
                        <i className="search icon"></i>
                    </div>
                    <div className="ui labeled right icon input">
                        <div className="ui label">
                            Cards
                        </div>
                        <input type="text" onChange={this.gravaCard} />
                        <i className="search icon"></i>
                    </div>
                    <button type="submit" onClick={this.onSaveClick}>
                        <i className="green icon save" title="Salvar Opções"></i>
                    </button>
                    <button onClick={this.onCancelClick}>
                        <i className="red icon cancel" title="Fechar Menu"></i>
                    </button>

                </div>
            );
        }

    }

    render() {

        return (

            <form onSubmit={this.onFormSubmit} method="POST" action="" id="formularioId">
                <div className="ui form five menu item borderless large">
                    <div className="item">
                        <ProjetosECards exibeMenuFlutuante={this.exibeMenuFlutuante} />
                    </div>
                    <div className="item maior-input">
                        <Descricao gravaDescricao={this.gravaDescricao} />
                    </div>
                    <div className="item right aligned">
                        <Cronometro />
                    </div>
                    <div className="item right aligned">
                        <i className="green play circle icon big animation sw-go" onClick={this.onPlayClick} title="Iniciar cronômetro" id="iconePlay"></i>
                        <button type="submit" >
                            <i className="red stop circle icon big animation esconder sw-go"></i>
                        </button>
                    </div>
                </div>

                {this.menuFlutuante()}
            </form>
        );


    }

}

export default Formulario;



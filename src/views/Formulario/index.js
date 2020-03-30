import React from 'react';
import ProjetosECards from './ProjetosECards/index.js';
import Descricao from './Descricao/index.js';
import Cronometro from './Cronometro/index.js';
import './index.css';

class Formulario extends React.Component {

    state = {
        card: "",
        descricao: "",
        totalTrabalho: ""
    }

    gravaCard = (valor) => {
        this.setState({ card: valor });
        //Perguntar depois o pq ele salva mas n grava o valor console.log("Componente Formulário: " + this.state.card)
        //1)Crie um estado do tipo booleano que será atualizado. Exemplo: menuFluante: false
        //2)Crie uma propriedade no Componente ProjetosECards que irá passar uma função. Exemplo: funcaoExemplo={this.funcaoExemplo}
        //3)Crie uma função que irá atualizar o estado. Ex: funcaoExemplo = (parametro) => { this.setState({menuFluante:true});}
        //4)console.log(this.state.menuFluante) ==> TRUE
        //5)Crie uma função com um if verificando se o this.state.menuFluante === true, a função retornará o menuFluante
        //6)Aplique a função no local onde o menuFluante deverá aparecer
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



    render() {
        return (

            <form onSubmit={this.onFormSubmit} method="POST" action="" id="formularioId">
                <div className="ui form five menu item borderless large">
                    <div className="item">
                        <ProjetosECards gravaCard={this.gravaCard}/>
                    </div>
                    <div className="item maior-input">
                        <Descricao gravaDescricao={this.gravaDescricao} />
                    </div>
                    <div className="item right aligned">
                        <Cronometro />
                    </div>
                    <div className="item right aligned">
                        <i className="green play circle icon big animation sw-go" onClick={this.onPlayClick} id="iconePlay"></i>
                        <button type="submit" >
                            <i className="red stop circle icon big animation esconder sw-go"></i>
                        </button>
                    </div>
                </div>
                <div className="ui center aligned menuFlutuante display">
                    <div className="ui labeled right icon input loading">
                        <div className="ui label">
                            Projetos
                        </div>
                        <input type="text" />
                        <i className="search icon"></i>
                    </div>
                    <div className="ui labeled right icon input loading espacamento-esquerda">
                        <div className="ui label">
                            Cards
                        </div>
                        <input type="text" />
                        <i className="search icon"></i>
                    </div>
                </div>
            </form>
        );
    }

}

export default Formulario;



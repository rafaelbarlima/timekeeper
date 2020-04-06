import React from 'react';
import ProjetosECards from './ProjetosECards/index.js';
import Descricao from './Descricao/index.js';
import Cronometro from './Cronometro/index.js';
import './index.css';
import axios from 'axios';

class Formulario extends React.Component {

    state = {
        form: {
            projeto: "",
            card: "",
            descricao: "",
            tempoTrabalhado: 0,
            data: {
                dia: "",
                diaDaSemana: "",
                mes: "",
                ano: ""
            },
            hora: 0,
            minuto: 0,
            segundo: 0
        },
        menuFlutuante: {
            variavelMenu: false,
            projetoMenu: "",
            cardMenu: ""
        }
    }

    gravaProjeto = (event) => {
        var exibirLista = document.querySelector("#divListaProjeto");
        if (exibirLista.classList.contains("displayNone")) {
            exibirLista.classList.remove("displayNone");
        }
        var menuFlutuante = this.state.menuFlutuante;
        var projetoEscolhido = event.target.value;
        
        axios.get("http://localhost:3001/api-timekeeper/projetos/" + projetoEscolhido)
        .then(resposta => {
            menuFlutuante.projetoMenu = resposta.data.nome;
        });

        this.setState({ menuFlutuante: menuFlutuante });
    }

    gravaCard = (event) => {
        var exibirLista = document.querySelector("#divListaCard");
        if (exibirLista.classList.contains("displayNone")) {
            exibirLista.classList.remove("displayNone");
        }
        var menuFlutuante = this.state.menuFlutuante;
        var cardEscolhido = event.target.value;

        axios.get("http://localhost:3001/api-timekeeper/cards/" + cardEscolhido)
        .then(resposta => {
            menuFlutuante.cardMenu = resposta.data.key;
        });

        menuFlutuante.cardMenu = cardEscolhido;
        this.setState({ menuFlutuante: menuFlutuante });
    }

    gravaDescricao = (valor) => {
        var form = this.state.form;
        form.descricao = valor;
        this.setState({ form: form });
    }

    gravaValoresDoCronometro = (dataParametro) => {
        var form = this.state.form;
        form.data = dataParametro;
        this.setState({ form: form });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        var form = this.state.form;
        var tempoDeTrabalho = document.querySelector("#sw-time").textContent;
        form.tempoTrabalhado = tempoDeTrabalho;
        this.setState({ form : form});
        console.log(this.state.form);

    }

    onPlayClick = (event) => {
        var iconePlay = document.querySelector("#iconePlay");
        var iconeEscondido = document.querySelector(".esconder");
        var form = this.state.form;

        iconePlay.classList.add("esconder");
        iconeEscondido.classList.remove("esconder");

        form.hora = new Date().getHours();
        form.minuto = new Date().getMinutes();
        form.segundo = new Date().getSeconds();

        
        this.setState({ form: form });
    }

    onSaveClick = () => {
        var form = this.state.form;
        var menuFlutuante = this.state.menuFlutuante;

        menuFlutuante.variavelMenu = false;
        form.projeto = this.state.menuFlutuante.projetoMenu;
        form.card = this.state.menuFlutuante.cardMenu;
        this.setState({ form: form });
        this.setState({ menuFlutuante: menuFlutuante });
    }

    onCancelClick = () => {
        var menuFlutuante = this.state.menuFlutuante;
        menuFlutuante.variavelMenu = false;
        menuFlutuante.projetoMenu = "";
        menuFlutuante.cardMenu = "";
        this.setState({ menuFlutuante: menuFlutuante });
    }

    exibeMenuFlutuante = (valor) => {
        var menuFlutuante = this.state.menuFlutuante;
        menuFlutuante.variavelMenu = valor;
        this.setState({ menuFlutuante: menuFlutuante });

    }

    menuFlutuante = () => {

        if (this.state.menuFlutuante.variavelMenu === true) {

            return (
                <div className="ui menuFlutuante">
                    <div className="ui labeled right icon input" >
                        <div className="ui label" href="">
                            Projetos
                        </div>
                        <input type="text" onChange={this.gravaProjeto} />
                        <div className="ui vertical menu displayNone listaFlutuante" id="divListaProjeto">
                            <a className="active teal item" href="#">
                                GoCup
                            </a>
                            <a className="active teal item" href="#">
                                PreviFamilia
                            </a>
                            <a className="active teal item" href="#">
                                Tribunal
                            </a>
                        </div>
                    </div>
                    <div className="ui labeled right icon input" >
                        <div className="ui label">
                            Cards
                        </div>
                        <input type="text" onChange={this.gravaCard} />
                        <div className="ui vertical menu displayNone listaFlutuante" id="divListaCard">
                            <a className="active teal item" href="#">
                                Inbox
                            </a>
                            <a className="active teal item" href="#">
                                Spam
                            </a>
                            <a className="active teal item" href="#">
                                Updates
                            </a>
                        </div>
                    </div>
                    <button type="button" onClick={this.onSaveClick}>
                        <i className="green icon save" title="Salvar Opções"></i>
                    </button>
                    <button type="button" onClick={this.onCancelClick}>
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
                        <ProjetosECards exibeMenuFlutuante={this.exibeMenuFlutuante}
                            projeto={this.state.form.projeto}
                            card={this.state.form.card} />
                    </div>
                    <div className="item maior-input">
                        <Descricao gravaDescricao={this.gravaDescricao} />
                    </div>
                    <div className="item right aligned">
                        <Cronometro gravaValoresDoCronometro={this.gravaValoresDoCronometro}
                            hora={this.state.form.hora}
                            minuto={this.state.form.minuto}
                            segundo={this.state.form.segundo} />
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



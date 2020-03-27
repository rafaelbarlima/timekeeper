import React from 'react';
import  ProjetosECards  from './ProjetosECards/index.js';
import  Descricao  from './Descricao/index.js';
import Cronometro from './Cronometro/index.js';

class Formulario extends React.Component {
    
    state = {
        card: "",
        descricao: "",
        totalTrabalho: ""
    }

    gravaCard = (valor) =>{
        this.setState({card : valor});
        //Perguntar depois o pq ele salva mas n grava o valor console.log("Componente Formulário: " + this.state.card);
    } 

    gravaDescricao = (valor) =>{
        this.setState({descricao : valor});
    }

    onPlayClick= (event) =>{
        
        var iconePlay = document.querySelector("#iconePlay");
        var iconeEscondido = document.querySelector(".esconder");
        
        iconePlay.classList.add("esconder");
        iconeEscondido.classList.remove("esconder");
    }

    onFormSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            
            <form className="ui form five menu item borderless large" onSubmit={this.onFormSubmit} method="POST" action="" id="formularioId">
                <div className="item">  
                    <ProjetosECards gravaCard={this.gravaCard}/>
                </div>
                <div className="item maior-input">
                    <Descricao gravaDescricao={this.gravaDescricao}/>
                </div>
                <div className="item right aligned">
                    <Cronometro/>
                </div>
                <div className="item right aligned">
                    <i className="green play circle icon big animation sw-go" onClick={this.onPlayClick}  id="iconePlay"></i>
                    <button type="submit" >
                        <i className="red stop circle icon big animation esconder sw-go"></i>
                    </button>
                </div>
            </form>
        );
    }

}

export default Formulario;



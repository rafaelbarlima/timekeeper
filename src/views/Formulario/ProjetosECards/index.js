import React from 'react';

class ProjetosECards extends React.Component {

    state = {
        valor: "",
    }

    onInputPress = (event) => {
        if (event.key === 'Enter') {
            this.setState({ valor: event.target.value });
            this.props.gravaCard(this.state.valor);
            // console.log("Component Input" + this.state.valor);
        }

    }

    //1)Crie um event handler que irá ouvir o evento na página. Exemplos: onClick, onChange, onKeyPress...
    //2)Dentro do event handler, chame a função. Exemplo: onClick={this.funcaoExemplo}
    //3)Crie a função e dentro dela atualize a função que foi passada como propriedade. 
    //Exemplo: funcaoExemplo = (parametro) => {this.props.funcaoExemplo(true)}
    

    render() {
        return (
            <div className="ui  selection left corner labeled  input">

                <div className="ui left corner label" id="card">
                    <i className="asterisk icon"></i>
                </div>
                <div className="ui selection fluid dropdown" >
                    <input type="hidden" name="gender" onClick={this.onInputPress}/>
                    <i className="dropdown icon"></i>
                </div>

            </div>

        );
    }
}





export default ProjetosECards;
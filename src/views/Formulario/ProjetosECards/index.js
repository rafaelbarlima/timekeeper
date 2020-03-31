import React from 'react';

class ProjetosECards extends React.Component {

    state = {
        valor: "",
    }

    funcionExibirMenuFlutuante = () => {
        this.props.exibeMenuFlutuante(true)
    };

    onInputPress = (event) => {
        if (event.key === 'Enter') {
            this.setState({ valor: event.target.value });
            this.props.gravaCard(this.state.valor);
            // console.log("Component Input" + this.state.valor);
        }

    }

    render() {
        return (
            <div className="ui selection left corner labeled input" onClick={this.funcionExibirMenuFlutuante}>

                <div className="ui left corner label">
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
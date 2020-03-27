import React from 'react';

class ProjetosECards extends React.Component{

    state = {
        valor: "",
    }

    onInputPress = (event) =>{
        if (event.key === 'Enter'){
            this.setState({valor: event.target.value});
            this.props.gravaCard(this.state.valor);
            // console.log("Component Input" + this.state.valor);
        }
        {/*\Fazer Depois o axios.get\*/}
    }

    render(){
        return(
            <div className="ui left corner labeled input">

                <input type="text" maxLength="15" onKeyPress={this.onInputPress} />

                <div className="ui left corner label" id="card">
                    <i className="asterisk icon"></i>
                </div>

                
                <div className="ui fluid popup">
                    <div className="ui grid">
                        <div className="one column row">
                            <label>Projeto x</label>
                        </div>
                        <div className="one column row">
                            <label>Card: {this.state.valor}</label>
                        </div>
                    </div>
                </div> 
            </div>
            
        );
    }
}





export default ProjetosECards;
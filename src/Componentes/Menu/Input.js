import React from 'react';
import axios from 'axios';

class Input extends React.Component{

    state = {valor: ""}

    onInputPress = (event) =>{
        if (event.key === 'Enter'){
            this.setState({valor: event.target.value});
        }
        {/*\Fazer Depois o axios.get\*/}
    }

    render(){
        return(
            <div className="ui left corner labeled input">
                <input type="text" maxLength={this.props.numeroCaracteres} onKeyPress={this.props.id != null? this.onInputPress : null} />
                <div className={this.props.classe} id={this.props.id}>
                    <i className={this.props.classeIcone}></i>
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





export default Input;
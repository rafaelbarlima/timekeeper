import React from 'react';
import './Cronometro.css';

class BotaoEnviar extends React.Component{

    onButtonClick= (event) =>{
        var iconeSubmit = document.getElementById("sw-go");
        var iconePause = document.getElementById("iconePause");
        
        iconeSubmit.removeAttribute("id");
        iconePause.classList.remove("esconder");
        iconeSubmit.classList.remove("green" , 'play', 'circle', 'icon', 'big', 'animation');
        iconeSubmit.classList.add('red','stop','circle','icon','big','animation');
        iconePause.setAttribute("id", "sw-go");
        
        
    }

   
    render(){
        return (
            <div>
                    <button type="submit" onClick={this.onButtonClick}>
                        <i className="yellow pause circle icon big animation esconder" id="iconePause"></i>
                         <i className="green play circle icon big animation"  id="sw-go"></i>
                     </button>

                
            </div>
        );
    }
}



export default BotaoEnviar;
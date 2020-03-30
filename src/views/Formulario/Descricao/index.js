import React from 'react';

class Descricao extends React.Component{

    render(){
        return(
            <div className="ui left corner labeled large input">
                
                <div className="ui left corner label">
                    <i className="keyboard icon"></i>
                </div>
                <input type="text" maxLength="1024"/>
                
                
            </div>
            
        );
    }
}





export default Descricao;
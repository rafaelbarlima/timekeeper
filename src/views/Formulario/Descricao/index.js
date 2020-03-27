import React from 'react';

class Descricao extends React.Component{

    render(){
        return(
            <div className="ui left corner labeled input">

                <input type="text" maxLength="1024"/>

                <div className="ui left corner label">
                    <i className="keyboard icon"></i>
                </div>
            </div>
            
        );
    }
}





export default Descricao;
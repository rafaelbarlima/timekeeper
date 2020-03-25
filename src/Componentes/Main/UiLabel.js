import React from 'react';


class UiLabel extends React.Component{

    render(){
        return(
            <div className="ui label">
                <span>{this.props.conteudo}</span>
            </div>
        );
    }
}



export default UiLabel;
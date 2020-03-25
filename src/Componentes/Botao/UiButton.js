import React from 'react';

class UiButton extends React.Component{
    
    render(){
        return(
            <div className={"ui " + (this.props.className || "") + " button"}  
                id={this.props.id}
                title={this.props.title || ""}>
                {this.props.children}
                {this.props.conteudo}
            </div> 
        );
    }
}

export default UiButton;
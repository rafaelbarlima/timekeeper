import React from 'react';

class Descricao extends React.Component {

funcionConteudoDescricao = (event) => {
    var descricao = event.target.value;
    this.props.gravaDescricao(descricao);
}

render(){
    return (
        <div className="ui left corner labeled large input">

            <div className="ui left corner label">
                <i className="keyboard icon"></i>
            </div>
            <input type="text" maxLength="1024" placeholder="Descreva sua atividade" onChange={this.funcionConteudoDescricao}/>

        </div>

    );
}
}





export default Descricao;
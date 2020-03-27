import React from 'react';


class FiltroPeriodo extends React.Component{

    render(){
        return(
            <div className="ui button labeled icon top center pointing dropdown" id="filtro">
                <i className="filter icon"></i>
                <span className="text">Filtrar por periodo</span>
                <div className="menu">
                    <div className="header">
                        <i className="calendar icon"></i>
                        Filtro por data
                    </div>
                    <div className="item">
                        <i className="olive circle icon"></i>
                        Essa Semana
                    </div>
                    <div className="item">
                        <i className="violet circle icon"></i>
                         Esse Mês
                    </div>
                    <div className="item">
                        <i className="orange circle icon"></i>
                        Esse Ano
                    </div>
                </div>
            </div>
        );
    }
}



export default FiltroPeriodo;
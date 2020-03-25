import React from 'react';


class FiltroPeriodo extends React.Component{

    render(){
        return(
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}



export default FiltroPeriodo;
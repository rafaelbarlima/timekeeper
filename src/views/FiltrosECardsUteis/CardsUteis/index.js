import React from 'react';

class CardsUteis extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="ui button" id="cardsuteis">
                    <a className="browse item">
                        CARDS ÚTEIS
                        <i className="dropdown icon"></i>
                    </a>
                </div>

                <div className="ui fluid popup">
                    <div className="ui three column divided grid">
                        <div className="column" >
                            <h4 className="ui header">RH</h4>
                            <div className="ui sticky link list">
                                <a className="item">WRHC-41 - APRESENTAÇÃO DO JIRA</a>
                                <a className="item">WRHC-43 - COMUNICAÇÕES INTERNAS</a>
                                <a className="item">WRHC-36 - FEEDBACK DEMISSIONAL</a>
                            </div>
                        </div>
                        <div className="column">
                            <h4 className="ui header">Card Útil 2</h4>
                            <div className="ui link list">
                                <a className="item">Card1</a>
                                <a className="item">Card2</a>
                                <a className="item">Card3</a>
                            </div>
                        </div>
                        <div className="column">
                            <h4 className="ui header">Card Útil 3</h4>
                            <div className="ui link list">
                                <a className="item">Card1</a>
                                <a className="item">Card2</a>
                                <a className="item">Card3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CardsUteis;
import React from 'react';

class Cards extends React.Component{

    render(){
        return(
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}


export default Cards;
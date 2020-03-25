import React from 'react';

class Dados extends React.Component{

    render(){
        return(
            <div className="dados" onClick={this.onDivClick}>
                <h4 className="ui header">
				  Construindo o Front-End Time Keeper</h4>
				<div className="description">
				  <b>CARD15</b>
				</div>
				<div className="description">
				  <div className="ui mini breadcrumb">
					<span className="section corHorario">01:00 PM</span>
					<i className="right chevron icon divider"></i>
					<span className="section corHorario">02:00 PM</span>
					<i className="right arrow icon divider"></i>
					<div className="active section">01:00:00</div>
				  </div>
				</div>
            </div>
        );
    }
}




export default Dados;
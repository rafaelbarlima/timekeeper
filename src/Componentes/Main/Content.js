import React from 'react';

class Content extends React.Component{

    render(){
        return(
            <div className={"content " + (this.props.className || "")}>
                {this.props.children}
            </div>
        );
    }
}

export default Content;
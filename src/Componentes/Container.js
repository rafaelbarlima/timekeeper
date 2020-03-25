import React from 'react';


class Container extends React.Component{
    

    render(){
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;
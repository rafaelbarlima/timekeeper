import React from 'react';
import Input from './Input.js';

class Item extends React.Component {

    render() {
        return (
            <div className={this.props.classeItem}>
                {this.props.children}
            </div>
        );
    }
}

export default Item;
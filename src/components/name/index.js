/**
 * Created by shushan on 3/17/17.
 */
import React from 'react';
import './style.css';

class Name extends React.Component {
    render() {
        return (
            <div className="name-row">
                <div className="name">{this.props.name}</div>
                <div className="email">{this.props.email}</div>
            </div>
        );
    }
}

export default Name;
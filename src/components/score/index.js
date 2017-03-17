/**
 * Created by shushan on 3/17/17.
 */
import React from 'react';
import './style.css';

class Score extends React.Component {
    render() {
        return (
            <div className="score-row">
                {this.props.value}
            </div>
        );
    }
}

export default Score;
/**
 * Created by shushan on 3/17/17.
 */
import React from 'react';
import './style.css';

class Member extends React.Component {
    render() {
        return (
            <div className="member-row">
                <span className={this.props.value ? 'member' : 'not-member'}>{this.props.value ? 'Yes' : 'No'}</span>
            </div>
        );
    }
}

export default Member;
/**
 * Created by shushan on 3/17/17.
 */
import React from 'react';
import './style.css';

class Date extends React.Component {
    getMinutes(sec) {
        if(sec) {
            return sec.toDateString();
        }
        return 'N/A';
    }

    render() {
        return (
            <div className="date-row">
                {this.getMinutes(this.props.value)}
            </div>
        );
    }
}

// Date.propTypes = {
//     value: React.PropTypes.instanceOf(Date)
// };

export default Date;

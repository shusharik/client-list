/**
 * Created by shushan on 3/17/17.
 */
import React from 'react';
import './style.css';

/* Import custom components */
import Name from '../name';
import Member from '../member';
import Score from '../score';
import Date from '../date';

class Content extends React.Component {
    getContentRow() {
        return this.props.data.map((item, index) => {
            return (
                <div key={index} className="contentRow">
                    <Name name={item.name} email={item.email}></Name>
                    <Member value={item.member}></Member>
                    <Score value={item.score}></Score>
                    <Date value={item.expiration}></Date>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="content">
                {this.getContentRow()}
            </div>
        );
    }
}

export default Content;
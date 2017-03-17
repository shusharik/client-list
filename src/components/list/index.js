import React from 'react';
import './style.css';

/* Import custom components */
import Header from '../header';
import Content from '../content';

/* Import custom data */
import Clients from '../../configClient';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerList : ['Name', 'Member', 'Score', 'Expiration'],
            clientList: Clients
        };
    }

    render() {
        return (
            <div className="list">
                <Header data={this.state.headerList}></Header>
                <Content data={this.state.clientList}></Content>
            </div>
        );
    }
}

export default List;

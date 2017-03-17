/**
 * Created by shushan on 3/17/17.
 */

import './style.css';
import React from 'react';

/* Import custom components */
import List from '../components/list';

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <List></List>
            </div>
        );
    }
}
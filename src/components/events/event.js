import React, { Component } from "react";
import Tournament from './tournament/';

class Events extends Component {

    componentDidMount () {
        this.props.initEvents();  
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>{ `Eventos` }</th>
                    </tr>
                </thead>
                <tbody>
                    <Tournament/>
                </tbody>
            </table>
        );
    }
}

export default Events;
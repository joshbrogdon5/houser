import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from './../House/House'

export default class Dashboard extends Component {

    render(){
        return(
            <div>
                Dashboard Component
                <House />
                <Link to="/wizard"><button>Add New Property</button></Link>
            </div>
        )
    }
}
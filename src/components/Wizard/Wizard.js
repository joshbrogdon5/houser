import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    render(){
        return(
            <div>
                Wizard Component
                <Link to="/"><button>Cancel</button></Link>
                <div className="inputs">
                    <input placeholder="name" />
                    <input placeholder="address" />
                    <input placeholder="city" />
                    <input placeholder="state" />
                    <input placeholder="zipcode" />
                </div>
            </div>
        )
    }
}
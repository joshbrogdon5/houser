import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Wizard extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.complete=this.complete.bind(this);
    }

    complete(){
        axios.post('http://localhost:3333/api/house').then(results => {
            this.setState({
                name: this.handleName,
                address: this.handleAddress,
                city: this.handleCity,
                state: this.handleState,
                zipcode: this. handleZipcode
            })
        })
    }

    handleName(val){
        this.setState({
            name: val
        })
    }

    handleAddress(val){
        this.setState({
            address: val
        })
    }

    handleCity(val){
        this.setState({
            city: val
        })
    }

    handleState(val){
        this.setState({
            state: val
        })
    }

    handleZipcode(val){
        this.setState({
            zipcode: val
        })
    }

    render(){
        return(
            <div>
                Wizard Component
                <Link to="/"><button>Cancel</button></Link>
                <div className="inputs">
                    <input placeholder="name" value={this.state.name} onChange={(e) => this.handleName(e.target.value)} type="text"/>
                    <input placeholder="address" value={this.state.address} onChange={(e) => this.handleAddress(e.target.value)} type="text"/>
                    <input placeholder="city" value={this.state.city} onChange={(e) => this.handleCity(e.target.value)} type="text"/>
                    <input placeholder="state" value={this.state.state} onChange={(e) => this.handleState(e.target.value)} type="text"/>
                    <input placeholder="zipcode" value={this.state.zipcode} onChange={(e) => this.handleZipcode(e.target.value)} type="text"/>
                    <button onClick={this.complete}>Complete</button>
                </div>
            </div>
        )
    }
}
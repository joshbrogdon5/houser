import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import {handleName, handleAddress, handleCity, handleState, handleZipcode} from '../../ducks/reducer';

class Wizard extends Component {


    

    // complete(){
    //     axios.post('http://localhost:3333/api/house').then(results => {
    //         this.setState({
    //             name: this.handleName,
    //             address: this.handleAddress,
    //             city: this.handleCity,
    //             state: this.handleState,
    //             zipcode: this. handleZipcode
    //         })
    //     })
    // }

   

    render(){
        const {handleName, handleAddress, handleCity, handleState, handleZipcode} = this.props;
        return(
            <div>
                Wizard Component
                <Link to="/"><button>Cancel</button></Link>
                <div className="inputs">
                    <input placeholder="name"  onChange={(e) => handleName(e.target.value)} type="text"/>
                    <input placeholder="address"  onChange={(e) => handleAddress(e.target.value)} type="text"/>
                    <input placeholder="city"  onChange={(e) => handleCity(e.target.value)} type="text"/>
                    <input placeholder="state"  onChange={(e) => handleState(e.target.value)} type="text"/>
                    <input placeholder="zipcode"  onChange={(e) => handleZipcode(e.target.value)} type="text"/>
                    <button onClick={this.complete}>Complete</button>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state){
    const {handleName, handleAddress, handleCity, handleState, handleZipcode} = state;
    return{
        handleName, 
        handleAddress,
        handleCity, 
        handleState, 
        handleZipcode
    }
}


export default connect(mapStatetoProps, {handleName, handleAddress, handleCity, handleState, handleZipcode})(Wizard);

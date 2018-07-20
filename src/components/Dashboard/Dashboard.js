import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from './../House/House'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
        this.getHouses=this.getHouses.bind(this);
        this.deleteListing=this.deleteListing.bind(this);
    }
    componentDidMount(){
        this.getHouses();
    }
    
    getHouses(){
        axios.get('http://localhost:3333/api/houses').then(results => {
            this.setState({
                houses: results.data
            })
        })
    }

    deleteListing(id){
        axios.delete('http://localhost:3333/api/house/${id}',).then(results => this.getHouses)
      
    }

    render(){
        console.log(this.state.houses)
        let displayHouses = this.state.houses.map((e,i) => {
            return(
                <div>
                    <House delete={this.deleteListing} house={e} key={e.id}/>
                </div>
            )
        })
        return(
            <div>
                <h2>House Listings:</h2>
                {displayHouses}
                <Link to="/wizard"><button>Add New Property</button></Link>
            </div>
        )
    }
}
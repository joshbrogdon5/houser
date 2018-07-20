import React from 'react';

export default function House(props){
    let {house_id, name, address, city, state, zipcode } = props.house;
    return(
        <div>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zipcode: {zipcode}</p>
            <button onClick={(id) => props.delete(id)}>Delete</button>
        </div>
    )
}

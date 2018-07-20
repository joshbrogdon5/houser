const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE'

export function handleName(name){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function handleAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function handleCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function handleState(state){
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function handleZipcode(zipcode){
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return Object.assign({}, state, {name: action.payload})

        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload})

        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})

        case UPDATE_STATE:
            return Object.assign({}, state, {state: action.payload})

        case UPDATE_ZIPCODE:
            return Object.assign({}, state, {zipcode: action.payload})

        default: return state;
    }
}

export default reducer;
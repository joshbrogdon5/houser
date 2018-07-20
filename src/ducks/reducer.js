const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

export function handleName(name){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return Object.assign({}, state, {name: action.payload})

        default: return state;
    }
}

export default reducer;
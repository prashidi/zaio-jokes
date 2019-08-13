import {
    GET_JOKES
} from '../actions/types';

const initialState = {
    jokes: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_JOKES:
            return {
                ...state,
                jokes: action.payload
            }
            default:
                return state
    }
}
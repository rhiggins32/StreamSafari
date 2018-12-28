import _ from 'lodash'

import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types'



export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload,'id')}
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload};
        case CREATE_STREAM: 
            return { ...state, [action.payload.id]: action.payload};
        case EDIT_STREAM: 
            return { ...state, [action.payload.id]: action.payload };    
//don't have to reference .id in delete because payload is already just id 
        case DELETE_STREAM: 
            return _.omit(state,action.payload);
        default: 
            return state; 
    }
    
};





//object based approach using key interpolation 
        //we don't know what key we want to add, but we know what we want the key to be/have it added when code runs 
        
// const streamReducer = (state = {}, action) => {
//     switch (action.Type) {
//         case EDIT_STREAM:
//             return { ...state,
//                 [action.payload.id]: action.payload
//             };
//         default:
//             return state;
//     }
// }
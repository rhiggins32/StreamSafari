import { SIGN_IN, SIGN_OUT } from '../actions/types';
//saved types as variables in types.js to avoid any mistyping errors, use the variables below in the switch statement

//using all caps for name to notify other devs to not modify 
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null 
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }

  
}

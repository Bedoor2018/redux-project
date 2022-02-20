import {LOGGED_USER,SHOW_ALL_USERS} from '../actions/type'


const users = (state=[],action)=>{

    if(action.type==LOGGED_USER){

        return [...state];
    }if(action.type==SHOW_ALL_USERS){

        return [...state];
    }
    else{
        return [...state];
    }

}

export default users
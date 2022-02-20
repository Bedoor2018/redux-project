import {SHOW_ALL_QUESTIONS,SHOW_ANSWERED_QUESTIONS} from '../actions/type'


const questions = (state=[],action)=>{

    if(action.type==SHOW_ALL_QUESTIONS){

        return [...state];
    }if(action.type==SHOW_ANSWERED_QUESTIONS){

        return [...state];
    }
    else{
        return [...state];
    }

}

export default questions
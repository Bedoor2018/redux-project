import {LOGGED_USER,SHOW_ALL_USERS,SHOW_ALL_QUESTIONS,SHOW_ANSWERED_QUESTIONS} from './type'



//action creater
export const onLoggedUser = (content) => {
    return{type: LOGGED_USER,
        content: content }};

export const onShowAllUsers = (content) => {

        return{
            type: SHOW_ALL_USERS,
            content: content
} };

export const onShowAllQuestions = () => {

    return{
        type: SHOW_ALL_QUESTIONS
} };

export const onShowAnsweredQuestion = () => {

    return{
        type: SHOW_ANSWERED_QUESTIONS
} };

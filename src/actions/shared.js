import {getInitialData} from '../utils/api'
import {recevieUsers} from './users'
import {recevieQuestions} from './questions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialData(){
    return (dispatch)=>{
        //show loading
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions})=>{
            dispatch(recevieUsers(users));
            dispatch(recevieQuestions(questions));
        }).then(()=>{
        dispatch(hideLoading())
        })
    }
}
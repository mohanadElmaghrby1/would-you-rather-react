import {getInitialData} from '../utils/api'
import {recevieUsers} from './users'
import {recevieQuestions} from './questions'

export function handleInitialData(){
    return (dispatch)=>{
        //show loading
        return getInitialData()
        .then(({users, questions})=>{
            dispatch(recevieUsers(users));
            dispatch(recevieQuestions(questions));
        }).then(()=>{
            //stop loading
        })
    }
}
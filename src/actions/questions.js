import {saveQuestion, saveQuestionAnswer} from '../utils/api'

export const RECEVIE_QUESTIONS = "RECEVIE_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"
export const ADD_QUESTION ="ADD_QUESTION"

export function recevieQuestions(questions){
    return {
        type: RECEVIE_QUESTIONS,
        questions
    }
}

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(question){
   return (dispatch)=>{
       //Todo
    //    show loading
    console.log('save ques',question)
       return saveQuestion(question)
       .then((question)=>{
           //TODO stop loading
           dispatch(addQuestion(question))
       })
       .then(()=> {
        // dispatch(hideLoading())
       })
   }
}

export function answerQuestion(id, option,authedUser ){
    return {
        type: ANSWER_QUESTION,
        authedUser,
        id,
        option,
    }
}

export function handleAnswerQuestion(qid, answer){
    return (dispatch, getState)=>{
        const {authedUser} = getState();
        //Todo
     //    show loading
        return saveQuestionAnswer({authedUser,qid, answer })
        .then(()=>{
            //TODO stop loading
            dispatch(answerQuestion(qid, answer,authedUser))
        })
        .then(()=> {
         // dispatch(hideLoading())
        })
    }
 }
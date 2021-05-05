import React, { Component, Fragment } from 'react'
import AnswerdQuestion from './AnswerdQuestion';
import UnAnswerdQuestion from './UnAnswerdQuestion';
import { connect } from 'react-redux';


class QuestionPage extends Component {

    render() {
        const { answerdQuestions,match,questions } = this.props
        const id = match.params.id;
        console.log('ans', answerdQuestions)
        const isQuestionAnswerd = answerdQuestions[id];
        
        if (!questions[id]){
            return (
                <h1>Error 404 Question not found!</h1>
            )
        }

        return (
            <Fragment>
                <h2 className="text-center my-3">
                    <small>Would You Rather...</small>
                </h2>
                {isQuestionAnswerd
                    ? <AnswerdQuestion id={id} />
                    : <UnAnswerdQuestion id={id} />}
            </Fragment>

        )
    }

}

function mapStateToProps({ authedUser, users , questions}, { id }) {
    return {
        answerdQuestions: users[authedUser].answers,
        questions
    }
}

export default connect(mapStateToProps)(QuestionPage)


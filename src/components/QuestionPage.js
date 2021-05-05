import React, { Component, Fragment } from 'react'
import AnswerdQuestion from './AnswerdQuestion';
import UnAnswerdQuestion from './UnAnswerdQuestion';
import { connect } from 'react-redux';


class QuestionPage extends Component {

    render() {
        const { answerdQuestions,match } = this.props
        const id = match.params.id;
        console.log('ans', answerdQuestions)
        const isQuestionAnswerd = answerdQuestions[id];
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

function mapStateToProps({ authedUser, users }, { id }) {
    return {
        answerdQuestions: users[authedUser].answers,
    }
}

export default connect(mapStateToProps)(QuestionPage)


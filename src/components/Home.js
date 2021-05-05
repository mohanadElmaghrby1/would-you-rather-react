import React, { Component, Fragment } from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Login from './Login'
import { connect } from "react-redux";
import Question from "./Question";
class Home extends Component {

    render() {
        const { users,
            authedUser,
            unansweredQuestions,
            answeredQuestions } = this.props
            console.log('authedUser',authedUser)

        const arr = [1, 2, 3];
        return (
            <Fragment>
                <Tabs className='mt-2'>
                    <Tab eventKey="unanswered" title="Unanswered Questions">
                        <ul>
                            {unansweredQuestions.map(question => (
                                <li key={question.id}>
                                    <Question question={question} author={users[question.author]} />
                                </li>))}
                        </ul>
                    </Tab>
                    <Tab eventKey="answered" title="Answered Questions">
                        <ul>
                            {answeredQuestions.map(question => (
                                <li key={question.id}>
                                    <Question question={question} author={users[question.author]}/>
                                </li>))}
                        </ul>
                    </Tab>
                </Tabs>
            </Fragment>
        )
    }
}
function mapStateToProps({ questions, users, authedUser }) {

    const unansweredQuestions = Object.keys(questions).filter((qid) =>
        !users[authedUser].answers[qid]).map(qid => questions[qid])

    const answeredQuestions = Object.keys(questions).filter((qid) =>
        users[authedUser].answers[qid]).map(qid => questions[qid])

    return {
        users,
        authedUser,
        unansweredQuestions,
        answeredQuestions
    }
}
export default connect(mapStateToProps)(Home);
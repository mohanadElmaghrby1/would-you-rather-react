import React from 'react'
import { Card, Row, Image, ProgressBar } from 'react-bootstrap';
import { formatDate } from '../utils/helpers'
import { connect } from 'react-redux';

const AnswerdQuestion = ({ question, authedUser, author }) => {
    console.log('qqq', question)
    console.log('autheduser', authedUser)
    const optionOneNumberOfAnswers = question.optionOne.votes.length
    const optionTwoNumberOfAnswers = question.optionTwo.votes.length
    const totalNumberOfAnswers = optionOneNumberOfAnswers + optionTwoNumberOfAnswers
    const choosedOptionOne = question.optionOne.votes.includes(authedUser);
    console.log('choosedOptionOne', question.optionOne.votes.includes(authedUser))


    return (
        <Row className='justify-content-center mt-4'>
            <Card style={{ width: '40rem' }} >
                <Card.Header>
                    <Image
                        src={author.avatarURL}
                        roundedCircle
                        fluid
                        width="40"
                        height="40"
                        className="mx-3"
                        alt="user avatar"
                    />
                    <span>{author.name} asks:</span>
                </Card.Header>
                <Card.Body >
                    <ul>
                        <li className='m-4'>
                            <span>{question.optionOne.text}</span>
                            {choosedOptionOne && <span className="text-success ml-2">You choosed this</span>}

                            <ProgressBar now={optionOneNumberOfAnswers / totalNumberOfAnswers * 100} label={`${parseInt(optionOneNumberOfAnswers / totalNumberOfAnswers * 100)}%`} />
                            <Card.Text className="text-muted">
                                chosen by {optionOneNumberOfAnswers} out of {totalNumberOfAnswers} users
								</Card.Text>
                        </li>
                        <li className='m-4'>
                            <span>{question.optionTwo.text}</span>
                            {!choosedOptionOne && <span className="text-success ml-2">You choosed this</span>}

                            <ProgressBar now={optionTwoNumberOfAnswers / totalNumberOfAnswers * 100} label={`${parseInt(optionTwoNumberOfAnswers / totalNumberOfAnswers * 100)}%`} />
                            <Card.Text className="text-muted">
                                chosen by {optionTwoNumberOfAnswers} out of {totalNumberOfAnswers} users
								</Card.Text>
                        </li>
                    </ul>


                </Card.Body>
                <Card.Footer className="text-muted">{formatDate(question.timestamp)}</Card.Footer>
            </Card>
        </Row>
    )
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];
    const author = users[question.author]
    return {
        question,
        authedUser,
        author
    }
}

export default connect(mapStateToProps)(AnswerdQuestion);
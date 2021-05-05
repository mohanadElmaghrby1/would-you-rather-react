import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Card, Image, Row, Button } from 'react-bootstrap';
import { formatDate } from '../utils/helpers'
import {handleAnswerQuestion} from '../actions/questions'

class UnAnswerdQuestion extends Component{
    handleSubmit = (e, id)=>{
        e.preventDefault();
        const {dispatch} = this.props
        dispatch(handleAnswerQuestion(id, this.form.answer.value))
    }
    render(){
        const { question, authedUser, author } = this.props
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
                    <Card.Body className="d-flex justify-content-center">
                        <Form onSubmit={(e) => this.handleSubmit(e, question.id)}
                        ref={(form) => (this.form = form)} >
                            <Form.Check
                                custom
                                type="radio"
                                id="optionOne"
                                label={question.optionOne.text}
                                value="optionOne"
                                name="answer"
                                className="mb-2"
                            />
                            <Form.Check
                                custom
                                type="radio"
                                id="optionTwo"
                                label={question.optionTwo.text}
                                value="optionTwo"
                                name="answer"
                                className="mb-2"
                            />
                            <Button type='submit' variant="outline-secondary">Vote</Button>
    
                        </Form>
                    </Card.Body>
                    <Card.Footer className="text-muted">{formatDate(question.timestamp)}</Card.Footer>
                </Card>
            </Row>
        )
    }
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

export default connect(mapStateToProps)(UnAnswerdQuestion);
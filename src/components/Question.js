import React from 'react'
import { Card, Button, Row, Image } from 'react-bootstrap';
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom';

const Question = ({ question, author }) => {
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
                <Card.Body className="text-center">
                    <Card.Text>{question.optionOne.text}...?</Card.Text>
                    <Link to={`/questions/${question.id}`}>
                        <Button variant="outline-secondary">View Question</Button>
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">{formatDate(question.timestamp)}</Card.Footer>
            </Card>
        </Row>
    )
}

export default Question;
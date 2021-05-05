import React, { Component } from "react";
import { Card, Button, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeaderboardUser = ({ user }) => {
    return (
        <Row className='justify-content-center mt-4'>
            <Card style={{ width: '40rem' }} >
                <Card.Header>
                    <Image
                        src={user.avatarURL}
                        roundedCircle
                        fluid
                        width="40"
                        height="40"
                        className="mx-3"
                        alt="user avatar"
                    />
                    <span>{user.name}</span>
                </Card.Header>
                <Card.Body className="text-center">
                    <Card.Text>Answered Questions: {Object.keys(user.answers).length}</Card.Text>
                    <Card.Text>Created Questions: {user.questions.length}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Score: {user.questions.length + Object.keys(user.answers).length}
                </Card.Footer>
            </Card>
        </Row>
    )
}

export default LeaderboardUser;
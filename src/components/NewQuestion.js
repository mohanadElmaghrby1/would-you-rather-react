import { Component } from "react";
import { Card, Button, Row, Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }
    handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        const { optionOne, optionTwo } = this.state
        this.props.dispatch(handleAddQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome :true
        }))
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state


        if (toHome === true) {
            return (
                <Redirect to='/' />
            )
        }

        return (
            <Row className='justify-content-center mt-4'>
                <Card style={{ width: '40rem' }} >
                    <Card.Body className="text-center">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="optionOne">
                                <Form.Label>Option One</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="optionOne"
                                    value={optionOne}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <h3>
                                <small>OR</small>
                            </h3>
                            <Form.Group controlId="optionTwo">
                                <Form.Label>Option Two</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="optionTwo"
                                    value={optionTwo}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Button
                                type="submit"
                                variant="outline-secondary"
                                disabled={optionOne === '' || optionTwo === ''}>
                                Submit
							</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        )
    }
}



export default connect()(NewQuestion);
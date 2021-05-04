import React,{ Component } from "react";
import { Row, Card, Col, Form, Button} from "react-bootstrap";
import { connect } from "react-redux";
import {login} from '../actions/authedUser'

const ERROR_MESSAGE = "Please select user!"
class Login extends Component{

	state = {
		error: false
	}

	handleSubmit = (e)=>{
		e.preventDefault();
		const authedUserName = this.userID.value;
		if (!authedUserName){
			this.setState(()=>({
				error: true
			}))
		}else{
			this.props.dispatch(login(authedUserName));
		}
	}
    render(){
		const {error} = this.state;
		let {userNames} =this.props
        return(
            <Row className="justify-content-center align-items-center min-vh-100">
				<Col xs={12} md={4}>
					<Card bg="light" className="text-center">
						<Card.Header>Login</Card.Header>
						<Card.Body>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId="formGridState">
									<Form.Label>Username</Form.Label>
									{error ? (
										<p className="text-danger">{ERROR_MESSAGE}</p>
									) : null}

									<Form.Control
										as="select"
										ref={(id) => (this.userID = id)}
									>
										<option value="">Select user</option>
										{userNames.map((item) => (
											<option value={item} key={item}>
												{item}
											</option>
										))}
									</Form.Control>
								</Form.Group>

								<Button type="submit" variant="outline-dark">
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
        )
    }
}

function mapStateToProps({users}){
	return {
		userNames: Object.keys(users)
	}
}
export default  connect(mapStateToProps)(Login);
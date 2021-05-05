import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/authedUser';
import { NavLink } from 'react-router-dom';


class Login extends Component {

    handleLogout = (e) => {
        e.preventDefault();
        this.props.dispatch(logout())
    }
    render() {
        const { authedUser } = this.props;
        return (
            <Fragment>
                <Navbar bg="light" expand="lg" className='mt-2'>
                    <Navbar.Brand href="#home">Would You Rather?</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link as={NavLink} to="/" exact>
                                Home
						</Nav.Link>
                            <Nav.Link as={NavLink} to="/add">New Question</Nav.Link>
                            <Nav.Link as={NavLink} to="/leaderboard">Leaderboard</Nav.Link>
                        </Nav>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <a href="#login">{authedUser.name}</a>
                            </Navbar.Text>
                            <Image
                                src={authedUser.avatarURL}
                                roundedCircle
                                fluid
                                width="40"
                                height="40"
                                className="mx-3"
                                alt="user avatar"
                            />
                            <Button variant="outline-secondary" onClick={this.handleLogout}>Logout</Button>{' '}
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        authedUser: users[authedUser]
    }
}

export default connect(mapStateToProps)(Login);
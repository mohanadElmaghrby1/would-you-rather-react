import React, { Component, Fragment } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/authedUser';

class Login extends Component {

    handleLogout = (e) => {
        e.preventDefault();
        this.props.dispatch(logout())
    }
    render() {
        const { authedUser } = this.props;
        return (
            <Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Would You Rather?</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">New Question</Nav.Link>
                            <Nav.Link href="#link">Leaderboard</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="mr-sm-2">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
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
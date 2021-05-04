import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { handleInitialData } from '../actions/shared'
import { handleAddQuestion, handleAnswerQuestion } from '../actions/questions'
import Login from './Login'
import { connect } from 'react-redux';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { login } from '../actions/authedUser'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav'
import {Container} from 'react-bootstrap'
import Home from './Home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    // this.props.dispatch(login('sarahedo'))

    let q = {
      optionOneText: 'tmatm',
      optionTwoText: '5iar'
    };
    // this.props.dispatch(handleAddQuestion(q));


    // this.props.dispatch(handleAnswerQuestion('vthrdm985a262al8qx3do', 'optionTwo'))
  }

  render() {
    const { authedUser } = this.props;
    if (authedUser === null) {
      return (
        <Login />
      )
    }

    return (
      <Router>
        <Container>
          <Nav />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/questions/:id" component={QuestionPage} />
							<Route path="/add" component={NewQuestion} />
							<Route path="/leaderboard" component={LeaderBoard} />
							<Route component={PageNotFound} /> */}
            </Switch>
          </main>
        </Container>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App);

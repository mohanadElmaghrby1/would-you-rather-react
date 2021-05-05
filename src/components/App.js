import React, { Component, Fragment } from 'react'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion';
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props;
    if (authedUser === null) {
      return (
        <Login />
      )
    }

    return (
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {this.props.loading === true
            ? null
            : <div>
              <Route path="/" exact component={Home} />
              <Route path="/questions/:id" component={QuestionPage} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
            </div>}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App);

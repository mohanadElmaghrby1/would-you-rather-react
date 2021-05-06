import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderboardUser from "./LeaderboardUser";
import { Row } from 'react-bootstrap'

class Leaderboard extends Component {
    render() {
        const { users, userIds } = this.props
        return (
            <div className='justify-content-center mt-4'>
                <h3>LeaderBoard</h3>
                <div>
                <ul>
                    {userIds.map((id) => (
                        <li key={id}>
                            <LeaderboardUser user={users[id]} />
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        )
    }
}
/**
 * 
 * @param {sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    }} param0 
 */


function mapeStateToProps({ users }) {
    const userIds = Object.keys(users)
                .sort((a, b) => (users[b].questions.length+Object.keys(users[b].answers).length)
                 - (users[a].questions.length+Object.keys(users[a].answers).length));
    return {
        users,
        userIds
    }
}
export default connect(mapeStateToProps)(Leaderboard)
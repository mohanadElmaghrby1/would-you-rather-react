import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderboardUser from "./LeaderboardUser";
import { Row } from 'react-bootstrap'

class Leaderboard extends Component {
    render() {
        const { users } = this.props
        const userIds = Object.keys(users)
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



function mapeStateToProps({ users }) {
    return {
        users
    }
}
export default connect(mapeStateToProps)(Leaderboard)
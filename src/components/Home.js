import React, { Component, Fragment } from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Login from './Login'
class Home extends Component {

    render() {
        return (
            <Fragment>
                <Tabs>
                    <Tab eventKey="unanswered" title="Unanswered Questions">
                       {/* <div>hi</div> */}
                       <Login/>
                    </Tab>
                    <Tab eventKey="answered" title="Answered Questions">
                       <div>hi</div>
                        
                    </Tab>
                </Tabs>
            </Fragment>
        )
    }
}

export default Home;
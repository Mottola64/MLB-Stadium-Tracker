import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to='/login'>Log In</Link>
                <br></br>
                <Link to='/signup'></Link>
                Baseball Stadium Tracker
            </div>
        )
    }
}

export default Home
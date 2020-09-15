import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'



const Nav = (props) => {
        return (
        <nav className='nav'>
            <Link to="/dashboard">
                <button className='home'>Home</button>
            </Link>
            <Link to="/new">
                <button className='new-post'>New Post</button>
            </Link>
            <Link to="/">
                <button className='logout'>Logout</button>
            </Link>
        </nav>
        )
    }


export default Nav
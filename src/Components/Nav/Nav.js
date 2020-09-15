import React from 'react'
import {Link} from 'react-router-dom'



const Nav = (props) => {
    return (
        <nav className='nav'>
            <button className='home'>Home</button>
            <button className='new-post'>New Post</button>
            <button className='logout'>Logout</button>
        </nav>
    )
}


export default Nav
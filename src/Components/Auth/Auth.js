import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'



class Auth extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        })
    }

   render(){
       return(
           <div>
               <div>
                    <input placeholder="Enter Username" name="username" onChange={(e) => {this.handleInput(e)}}/>
                    <input placeholder="Enter Password" name="password" onChange={(e) => {this.handleInput(e)}}/>
               </div>
               <button onClick={()=> {this.handleLogin()}}>Log In</button>
               <button>Register</button>
                
           </div>
       )
   }
}



export default Auth
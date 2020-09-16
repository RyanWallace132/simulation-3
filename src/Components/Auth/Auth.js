import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'



class Auth extends Component {
    constructor(props) {
        super(props)
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

    handleRegister = () => {
        const {email, password} = this.state
        axios
            .post('/auth/register', {email, password})
            .then((res) => {
                this.props.loginUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    handleLogin = () => {
        const {email, password} = this.state
        axios
            .post('/auth/login', {email, password})
            .then((res) => {
                this.props.loginUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                alert(err.message)
            })
    }

   render(){
       return(
           <div className="auth-container">
               <div>
                   <img className="helo-logo" src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/helo_logo.png"></img>
                   <h1 className="auth-helo">Helo</h1>
                   <h2 className="username-password">Username:</h2>
                   <h2 className="username-password">Password:</h2>
                    <input className="auth-text-box-one" placeholder="" name="username" onChange={(e) => {this.handleInput(e)}}/>
                    <input className="auth-text-box-two" placeholder="" name="password" onChange={(e) => {this.handleInput(e)}}/>
                    <button className="auth-button1" onClick={()=> {this.handleRegister()}}>Log In</button>
                    <button className="auth-button2" onClick={()=> {this.handleLogin()}}>Register</button>
               </div>
           </div>
       )
   }
}



export default Auth
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/reducer'
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
        const {username, password} = this.state
        axios
            .post('/api/auth/register', {username, password})
            .then((res) => {
                // this.props.register(res.data)
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    handleLogin = (e) => {
        const { username, password } = this.state
        axios
          .post('/api/auth/login', { username, password })
          .then((res) => {
            // this.props.loginUser(res.data)
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
                   <img className="helo-logo" alt="logo" src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/helo_logo.png"/>
                   <h1 className="auth-helo">Helo</h1>
                   <h2 className="username">Username:</h2>
                   <h2 className="password">Password:</h2>
                    <input className="auth-text-box-one" placeholder="" name="username" onChange={(e) => {this.handleInput(e)}}/>
                    <input type="password" className="auth-text-box-two" placeholder="" name="password" onChange={(e) => {this.handleInput(e)}}/>
                    <button className="auth-button1" onClick={()=> this.handleLogin()}>Log In</button>
                    <button className="auth-button2" onClick={()=> this.handleRegister()}>Register</button>
               </div>
           </div>
       )
   }
}



export default connect(null, {loginUser})(Auth)
import React, {Component} from 'react'
import Form from '../Form/Form'
import {connect} from 'react-redux'

class Post extends Component{
    constructor(){
        super()
        this.state ={
            title: '',
            img: '',
            content:'',
            author:'',

            isEditing: false
        }
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    


    render(){
        return this.state.isEditing ? (
            <Form
            handleEdit = {this.props.handleEdit}
            handleDelete = {this.props.handleDelete}
            post = {this.props.post}
            toggleEdit = {this.toggleEdit}
            />
        ) : (

            <div className='content-row'>
                <h3>{this.props.post.content}</h3>
                <div>
                    <p>{this.props.post.title}</p>
                    <p src={this.props.img}> </p>
                </div>
                <button onClick={() => {
                    this.toggleEdit()
                }}>Edit</button>
                <button onClick={() => {
                    this.props.handleDelete(this.props.post.id)
                }}>Delete</button>
            </div>
        )  
    }
    
}

const mapStateToProps = (reduxState) => (reduxState)

export default connect(mapStateToProps)(Post)
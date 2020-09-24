import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './Dashboard.css'
import Post from '../Post/Post'

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            title: '',
            search: '',
            userInput: '',
            myPost: true,

        }
        this.reset = this.reset.bind(this)
    }
    componentDidMount(){
        this.getPosts()

    }

    getPosts = () => {
        let { search, myPosts } = this.state
        let url = "/api/posts/"

        if (myPosts && !search) {
            url += "?user_posts=true&search="
        } else if (!myPosts && search) {
            url += `?user_posts=false&search=${search}`
        } else if (myPosts && search) {
            url += `?user_posts=true&search=${search}`
        } else if (!myPosts && !search) {
            url += "?user_posts=false&search="
        }
        axios.get(url).then((res) => {
            this.setState({
                posts: res.data,
            })
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const {userInput: content, title} = this.state
        axios.post(`/api/posts/${this.props.user.id}`, {content, title}).then(
            (res) => {
                this.setState ({
                    posts: res.data,
                    userInput:''
                })
            }
        )
    }

    handleEdit = (id, content) => {
        axios.put(`/api/posts/${id}`, {content}).then((res) => {
            this.setState({
                posts: res.data
            })
        })
    }

    handleDelete = (id) => {
        console.log('hit')
        console.log(this.props)
        axios.delete(`/api/posts/${id}`).then((res) => {
            this.setState({
                posts:res.data
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    reset(){
        let url = "/api/posts"
        if(this.state.myPost){
            url += "?user_posts=true&search="
        }
        axios.get(url).then(res => {
            this.setState({posts: res.data, search: ""})
        })
    }

    render(){
        console.log(this.state.posts)
        const mapPosts = this.state.posts.map(e => {
            return (
                <Post
                post={e}
                key={e.id}
                handleClick={this.handleClick}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                />
            // <Link to={`/api/posts/${e.id}`} key={e.id}>
            //     <div>

            //     </div>
            // </Link>
            )
        })
        return(
            <div>
                {/* <button className='reset-button' onClick={this.reset}></button> */}
                <div>
                    <input checked = {this.state.myPost} onChange={() => this.setState({myPosts: !this.state.myPosts},this.getPosts)}type='checkbox'></input>
                </div>
                <div>
                    <input type='text' placeholder = 'Add New Post...' name='userInput' onChange={ (e) => {this.handleInput (e)}}/>
                    <input type='text' placeholder = 'title' name='Add A Title...' onChange={ (e) => {this.handleInput (e)}} ></input>
                    <button onClick={() => {
                        this.handleClick()
                    }}>Post</button>
                </div>
                <section className='post-box'>{mapPosts}</section>
                </div>



        )
        }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Dashboard)
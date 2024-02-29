import React, { Component } from 'react'
import axios from 'axios'

export class PostRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: '',
            errorMsg: ''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response => {
                console.log(response)
                this.setState({ 
                    userId: response.userId,
                    title: response.title,
                    body: response.body })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving data' })
            })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                
                    <div>{userId}</div>
                    <div>{title}</div>
                    <div>{body}</div>
                
            </div>
            
        )
    }
}


export default PostRequest
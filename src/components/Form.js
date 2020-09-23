import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments:'',
             topic:'React'
        }

    }
    handleUsernameChange = (event) =>{
        this.setState(
            {
                username: event.target.value
                
            }
        )
    }
    commentsChange =(event)=>{
        this.setState({
            comments: event.target.value       
         })
    }
    handleTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username}  ${this.state.comments}  ${this.state.topic}`)
        event.preventDefault()

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
            </div>
            <div>
                    <label>Comments</label>
                    <textarea onChange={this.commentsChange}>{this.state.comments}</textarea>


            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value="react">React</option>
                        <option value="angular">Angular</option>

                        <option value="Vue">Vue</option>

                </select>
            </div>
            <button>Submit</button>

            </form>

        )
    }
}

export default Form

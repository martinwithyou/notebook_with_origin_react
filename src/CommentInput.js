import React, { Component } from 'react'

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: '',
      details:''
    }
  }

  handleUsernameChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handledetailsChange(e){
  	this.setState({
  		details:e.target.value
  	})
  }
  handleSubmit(e) {
    if (this.props.onSubmit) {
      const { username, content, details } = this.state
      console.log(this.state);
      this.props.onSubmit({username, content, details})
    }
    this.setState({ content: '',username:'',details:'' })
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
            value={this.state.username}
            onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
              />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>细节 ：</span>
          <div className='comment-field-input'>
            <input 
            value={this.state.details}
            onChange={this.handledetailsChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
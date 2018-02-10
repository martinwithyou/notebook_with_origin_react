import React, { Component } from 'react'
import './index.css'

class CommentNEW extends Component {
	componentDidUpdate(){
    console.log(this.props.comment)   
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>name:{this.props.comment.username} </span>：
          <p>content:{this.props.comment.content}</p>
          <p>details:{this.props.comment.details}</p>
        </div>
      </div>
    )
  }
}
export default CommentNEW
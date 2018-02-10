import React, { Component } from 'react'
import './index.css'

class Comment extends Component {
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
export default Comment
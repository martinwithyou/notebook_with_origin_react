import React, { Component } from 'react'
import Comment from './Comment'
import './App.css';
class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  
  render() {
    return (
      <div className='comment'>
        {this.props.comments.map((comment, i) =>
          <Comment comment={comment} key={i} />
        )}
      </div>
    )
  }
}

export default CommentList
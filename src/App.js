import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import CommentListTitle from './CommentListTitle'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }
  componentWillMount(){
  	
    var str=localStorage.getItem('comments', this.state.comments);
    console.log(str);
    var arr=JSON.parse(str);
    this.setState({ comments:arr});
    
  }
  handleSubmit = (comment) => {
  	
    this.setState({ comments: [...this.state.comments, comment] }, () => {
      console.log(this.state.comments)
      localStorage.setItem('comments',JSON.stringify( this.state.comments));
    });
    
  }
  render() {
    return (
      <div className="App">
        <CommentListTitle
          comments={this.state.comments}
        />
        <CommentInput 
          onSubmit={this.handleSubmit}
        />
        <CommentList 
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default App;

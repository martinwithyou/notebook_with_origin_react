import React, { Component } from 'react'
import './index.css'
export default class CommentListTitle extends Component {
  static defaultProps = {
    comments: []
  }
  constructor(){
  	super();
  	this.state={
  		mark:'this is origin mark'
  	}
  }
  handledetailsChange(){
  	alert('welcome');
  }
  componentWillMount(){
           
  }
  componentDidMount(){
    
  }
  componentWillUpdate(){
             
  }
  componentDidUpdate(){
    console.log(this.props.comments)   
  }
  render() {
    return (
      <div className="title">
      
       <h1  
       onClick={this.handledetailsChange.bind(this)}
       >
       this is my title
       </h1>
       
       
       <h6>
       {this.state.mark}
       </h6>
       
       <div>
       {this.props.comments.map((comment, i) =>{
       	return <span className="cc" key={i}>{comment.username}-</span>
       }
          
        )}
       </div>
       
      </div>
    )
  }
}
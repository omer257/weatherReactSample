import React from 'react';
import CommentsListBox from './CommentsListBox';
import CommentForm from './CommentForm';

class WeatherBox extends React.Component { 
  //Can add this in case we will have a local state.

  // constructor(props){
  //   super(props)
  //   this.state = {comments:[]} // comments:this.props.comments =  need to be passed
  // }

  // addComment =(data)=>{
  //   this.setState(prevState => ({
  //     comments: prevState
  //       .comments
  //       .concat(data)
  //   }));
  // }

  // removeComment = (id)=>{
  //   const newState = this.state.comments.slice();
  //   newState.splice(id, 1);
  //   this.setState({comments: newState})
  // }
  render() {
    return (
       <div  style={{padding:'30'}}>
        <div>
          <span className="glyphicon glyphicon-trash pull-right"></span>
          <div className="media-left">
            <img src={this.props.item.icon} alt={this.props.item.name} className="media-object" style={{ width: 60}}/></div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.item.name}</h4>
            <p>{this.props.item.text}- {this.props.item.feelslike_c} &nbsp;| C</p>
          </div>
          <i className="fa fa-trash" onClick={()=>{
            this.props.removeWeatherBox(this.props.index)
          }}></i>
        </div>
        <CommentForm addComment={this.props.addComment} index={this.props.index} />
        <CommentsListBox comments={this.props.item.comments} parentIndex={this.props.index} removeComment={this.props.removeComment}/>
        <hr/>
      </div>
    )
  }
}

export default WeatherBox;
import React from 'react';

class WeatherBox extends React.Component { 
  render() {
    return (
       <div>
        {this.props.item.user} - 
        {this.props.item.comment}
        <i className="fa fa-trash" onClick={()=>{
            this.props.removeComment(this.props.parentIndex,this.props.index)
          }}></i>
      </div>
    )
  }
}

export default WeatherBox;
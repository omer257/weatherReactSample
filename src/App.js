import React from 'react';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';
import './App.css'

var fakeDATA=[
  {
  name: 'FakeTown',
  icon:  'http://www.towndc.com/site/assets/images/events/Banner_05_12_12_funkytown3.jpg',
  feelslike_c:  '33',
  text:  'FakeTown', 
  comments: [{user:'Random',comment:'Just a fake comment'}]
  },
  {
  name: 'FakeTown2',
  icon:  'http://moziru.com/images/chick-clipart-funny-chicken-17.png',
  feelslike_c:  '33',
  text:  'FakeTown',
  comments: []
  }
]


class App extends React.Component {
  constructor(props) {
    super(props);
    //Declare local state
    this.state = {
      boxes: fakeDATA
    }
  } 

  addWeatherBox = (data)=> { 
    //Usage with prevstate -  will return new object
    this.setState(prevState => ({
      boxes: prevState.boxes.concat(data)
    }));
  };

  removeWeatherBox =(id)=>{ 
    this.setState(prevState => ({
      boxes: prevState.boxes.filter((_, i) => i !== id)
    }));
  }

  addComment =(data,id)=>{  
    this.setState(prevState => {
      return {boxes: prevState.boxes.map((city, i)=>{
          if (i == id){
              let updatedComments = city.comments.concat(data);
              let updatedCity = {...city};
              updatedCity.comments = updatedComments;
              return updatedCity;
          }
          return city;
          })
      };
  });
  }

  removeComment =(weatherId,commentId)=>{
    this.state.boxes[weatherId].comments.splice(commentId, 1);
    this.setState({boxes: this.state.boxes});
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm addWeatherBox={this.addWeatherBox}/>
        </div>
        <WeatherListBox 
        removeWeatherBox={this.removeWeatherBox} 
        addComment={this.addComment}  
        removeComment={this.removeComment} 
        boxes={this.state.boxes}/>
      </div>
    );
  }
}

export default App;
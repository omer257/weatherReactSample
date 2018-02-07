import React from 'react';
import WeatherBox from './WeatherBox';

const WeatherListBox = (props) => {
  const boxes = props
    .boxes
    .map((item, index) => <WeatherBox
    key={index}
    index={index}
    removeWeatherBox={props.removeWeatherBox} 
    addComment={props.addComment}  
    removeComment={props.removeComment} 
    item={item}/>)
  return (
    <div>
      {boxes}
    </div>
  );
};

export default WeatherListBox;
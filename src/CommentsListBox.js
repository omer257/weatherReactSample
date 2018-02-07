import React from 'react';
import CommentBox from './CommentBox';

const CommentListBox = (props) => {
  const boxes = props
    .comments
    .map((item, index) => <CommentBox
    key={index}
    index={index} 
    parentIndex={props.parentIndex} 
    removeComment={props.removeComment} 
    item={item}/>)
  return (
    <div>
      {boxes}
    </div>
  );
};

export default CommentListBox;
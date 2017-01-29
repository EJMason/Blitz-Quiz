import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const QuestionHeader = (props) => {
  return (
    <ListGroupItem onClick={(e) => props.handleDeselectLecture(e)}>
      {props.lecture.testName}
    </ListGroupItem>
  );
};

export default QuestionHeader;
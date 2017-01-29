import React from 'react';
import {ListGroupItem, Glyphicon} from 'react-bootstrap';

const QuestionAddButton = (props) => {
  return (
    <ListGroupItem href="#"
      onClick={(e) => props.handleAddQuestion(e)}>
    <Glyphicon glyph="plus" /> Add New Question
  </ListGroupItem>
  );
};

export default QuestionAddButton;
import React from 'react';
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';

import QuestionHeader from './QuestionHeader';
import QuestionComponents from './QuestionComponents';

const QuestionsBodyComponents = (props) => {
  return (
    <div>
      <ListGroup>
        <QuestionHeader lecture={props.lecture}
          handleDeselectLecture={props.handleDeselectLecture}/>
      </ListGroup>
      <QuestionComponents questions={props.questions}
        newQuestions={props.newQuestions}
        handleAddQuestion={props.handleAddQuestion} 
        handleSubmitNewQuestion={props.handleSubmitNewQuestion}/>
    </div>
  );
};

export default QuestionsBodyComponents;
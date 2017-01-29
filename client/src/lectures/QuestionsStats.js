import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';

const QuestionsStats = (props) => {
    let questionsInDescendingOrder = props.questionData;
    questionsInDescendingOrder.sort(function(a,b) {return (a.perCentage > b.perCentage) ? 1 : ((b.perCentage > a.perCentage) ? -1 : 0);} ); 

  return (
      <ListGroup>
      {questionsInDescendingOrder.map((question, i) => (   
        <ListGroupItem key={i}>
        <strong key={i}>#{question.index} {question.question}<br key={i} />
        {question.perCentage}%</strong> of the students got this answer correct
        </ListGroupItem>
      ))}
      </ListGroup>   
  );
};

export default QuestionsStats;
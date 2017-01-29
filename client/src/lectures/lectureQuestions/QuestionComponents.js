import React from 'react';

import QuestionComponent from './QuestionComponent';
import QuestionAddButton from './QuestionAddButton';

const QuestionComponents = (props) => {

  const components = props.questions.map((question, i) => {
    return (
       <QuestionComponent question={question}
        handleSubmitNewQuestion={props.handleSubmitNewQuestion}
        number={i}
        key={i} />
    )});

  const newComponents = props.newQuestions.map((question, i) => {
    return (
       <QuestionComponent question={question}
        handleSubmitNewQuestion={props.handleSubmitNewQuestion}
        number={i}
        key={i} />
    )});
  
  return (
    <div>
      {components}
      {newComponents}
      <QuestionAddButton handleAddQuestion={props.handleAddQuestion}/>
    </div>
  );
};

export default QuestionComponents;
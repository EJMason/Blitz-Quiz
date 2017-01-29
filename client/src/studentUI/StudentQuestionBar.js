import React from 'react';
import {Panel, Media} from 'react-bootstrap';

const StudentQuestionBar = (props) => {
  let length = props.questions.length;
  return (
    <Panel>
      <p>Questions Left: {length}</p>
      <p>Time Left: --:--</p>
    </Panel>
  );
};

export default StudentQuestionBar;
import React from 'react';
import {Accordion, PanelGroup} from 'react-bootstrap';

import StudentBadge from './StudentBadge';
import StudentQuestionBar from './StudentQuestionBar';

import './../App.css';

const StudentSidebar = (props) => {
  return (
    <div>
      <PanelGroup className="studentBar">
        <StudentBadge /> 
        <StudentQuestionBar questions={props.questions}/>
      </PanelGroup>
    </div>
  );
};

export default StudentSidebar;
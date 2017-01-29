import React from 'react';
import {ListGroup} from 'react-bootstrap';

import LectureComponent from './LectureComponent';

const LectureComponents = (props) => {
  const components = props.tests.map((test, i) => 
    <LectureComponent test={test}
      selectLectureHandler={props.selectLectureHandler}
      key={i} />
  );
  return (
    <ListGroup>
      {components}
    </ListGroup>
  );
};

export default LectureComponents;
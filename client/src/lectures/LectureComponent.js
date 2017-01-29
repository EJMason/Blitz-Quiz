import React from 'react';
import {ListGroupItem, Media} from 'react-bootstrap';

const LectureComponent = (props) => {
    if(props.test.isComplete){
      return (
        <ListGroupItem bsStyle="success">
        <Media>
          <Media.Body>
            <Media.Heading>{props.test.testName}</Media.Heading>
            <p>Completed</p>
          </Media.Body>
        </Media>
        </ListGroupItem>
      );
    } else {
      return (
        <ListGroupItem onClick={(e) => props.selectLectureHandler(e, props.test.id)}>
        <Media>
          <Media.Body>
            <Media.Heading>{props.test.testName}</Media.Heading>
            <p>Incomplete</p>
          </Media.Body>
        </Media>
        </ListGroupItem>
      );
    }
};

export default LectureComponent;
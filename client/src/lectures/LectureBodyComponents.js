import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';

import LectureAdd from './LectureAdd';
import LectureComponents from './LectureComponents';
import InsertLectureText from './InsertLectureText';

class LectureBodyComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderAdd: true
    };
    this.handleNewClick = this.handleNewClick.bind(this);
    this.revertButton = this.revertButton.bind(this);
  }

  handleNewClick(e) {
    e.preventDefault();
    this.setState({renderAdd: false});
  }

  revertButton() {
    this.setState({renderAdd: !(this.state.renderAdd)});
  }

  render() {
    let button = <LectureAdd handleNewClick={this.handleNewClick}/>;
    let txtBox = <InsertLectureText handleAddLecture={this.props.handleAddLecture}
                   revertButton={this.revertButton}/>
    let component = (this.state.renderAdd) ? button : txtBox; 

    return(
      <div>
        <ListGroup>
          {component}
        </ListGroup>
        <LectureComponents tests={this.props.tests}
          selectLectureHandler={this.props.selectLectureHandler}/>
      </div>
    );
  }
}

export default LectureBodyComponents;
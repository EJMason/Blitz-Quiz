import React, {Component} from 'react';
import {ListGroupItem, Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon} from 'react-bootstrap';

import './../App.css';

class InsertLectureText extends Component {
  constructor(props) {
    super(props);
    
    this.state = {lectureName: ''}

    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleQuestionChange(e) {
    this.setState({ lectureName: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.handleAddLecture(this.state.lectureName);
      this.props.revertButton();
    }
  }

  componentDidMount(){
    this.input.focus();
  }

  render() {
    return (
      <ListGroupItem >
      <Form inline>
          <FormControl
            className="invis"
            type="text"
            inputRef={ref => { this.input = ref; }}
            value={this.state.lectureName}
            onChange={this.handleQuestionChange}
            onKeyPress={(e) => this.handleKeyPress(e)} />
      </Form>
    </ListGroupItem>
    );
  }
}

export default InsertLectureText;

//onKeyPress={(e) => this.props.handleAddLecture(e, this.state.lectureName)}
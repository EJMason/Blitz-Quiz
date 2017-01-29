import React, {Component} from 'react';
import {PageHeader, Form, FormGroup, FormControl, Button} from 'react-bootstrap';

import './../App.css';

class QuestionArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answerBody: ''
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleAnswerChange(e) {
    this.setState({answerBody: e.target.value});
  }

  render() {
    let question = this.props.question.body + '  ';
    let type = this.props.question.type;

    return (
      <div className="questionArea">
        <PageHeader>{question}<small>{type}</small></PageHeader>
        <Form>
          <FormGroup>
            <FormControl type="text"
              value={this.state.answerBody}
              onChange={this.handleAnswerChange} />
            <Button onClick={() => this.props.handleAnswer(this.state.answerBody, this.props.question.id)}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default QuestionArea;
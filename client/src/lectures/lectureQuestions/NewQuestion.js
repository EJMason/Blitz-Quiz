import React, {Component} from 'react';
import {
  ListGroupItem, 
  Panel, 
  Media, 
  DropdownButton, 
  MenuItem, 
  Form, 
  Col, 
  FormGroup,
  FormControl,
  Button,
  ControlLabel} from 'react-bootstrap';

import './../../App.css';

class NewQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.question.type,
      body: '',
      answer: ''
    }

    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.sendQuestion = this.sendQuestion.bind(this);
  }

//=========================================
//            Begin Methods
//=========================================
  handleQuestionChange(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  handleAnswerChange(e) {
    e.preventDefault();
    this.setState({ answer: e.target.value });
  }

  sendQuestion(e) {
    e.preventDefault();
    this.props.handleSubmitNewQuestion(this.state.type, this.state.body, this.state.answer);
  }

//=========================================
//            Render
//=========================================
  render() {
    let header = 'Question ' + (this.props.number + 1);
    let types = ['Short Answer', 'Multiple Choice', 'True False']

    const menus = types.map((type, i) => {
      if (type === this.state.type) {
       return <MenuItem eventKey={i} key={i} active>{type}</MenuItem>;
      } else {
        return <MenuItem eventKey={i} key={i} disabled>{type}</MenuItem>;
      }
    });

    return (
      <div>
        <Panel>
          <span>
            {header}
          </span>
          <span className="status">
            <DropdownButton
              title={this.state.type} 
              id="dropdown-size-medium" >
              {menus}
            </DropdownButton>
            </span>
            <div className="questionInput">
              <Form>
                <FormGroup>
                  <ControlLabel>Question</ControlLabel>
                  <FormControl type="text" 
                    label="Question"
                    value={this.state.body} 
                    onChange={this.handleQuestionChange}/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Answer</ControlLabel>
                  <FormControl type="text" 
                    label="Answer"
                    value={this.state.answer}
                    onChange={this.handleAnswerChange} />
              </FormGroup>
              <FormGroup>
                <Button type="button"
                  onClick={(e) => this.props.handleSubmitNewQuestion(e, this.state.type, this.state.body, this.state.answer)}>
                  Add Question
                </Button>
              </FormGroup>
            </Form>
          </div>
        </Panel>
      </div>
    );
  }
}

export default NewQuestion;
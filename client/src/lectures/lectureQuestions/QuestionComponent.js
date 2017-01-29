import React, {Component} from 'react';
import {ListGroupItem, Panel, Media, Button} from 'react-bootstrap';

import NewQuestion from './NewQuestion';

import './../../App.css';

class QuestionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.question.status
    }
  }

//=========================================
//            Begin Methods
//=========================================
  handleClickQuestion (e) {
    e.preventDefault();
    if(this.state.status === 'current') {
      this.setState({status: 'complete'});
    }
    else if (this.state.status === 'incomplete'){
      this.setState({status: 'current'});
    }
    
  }

//=========================================
//            Render
//=========================================
  render() {
    let header = 'Question ' + (this.props.number + 1);
    let component = null;

    if(this.state.status === 'complete') {
      component = (
        <div>
          <ListGroupItem bsStyle="success">
            <span>
              {header}
            </span>
            <span className="status">
              COMPLETE
            </span>
          </ListGroupItem>
          <Panel collapsible expanded={false}></Panel>
        </div>
      );
    } else if (this.state.status === 'current') {
      component = (
        <div>
          <ListGroupItem bsStyle="warning"
            onClick={(e) => this.handleClickQuestion(e)}>
            <span>
              {header}
            </span>
            <span className="status">
              IN PROGRESS
            </span>
          </ListGroupItem>
          <Panel bsStyle="warning">
            <Media>
              <Media.Body>
                <Media.Heading>{this.props.question.body}</Media.Heading>
                <p>{this.props.question.answer}</p>
              </Media.Body>
            </Media>
          </Panel>
        </div>
      );
    } else if (this.state.status === 'incomplete') {
      component = (
        <div>
          <ListGroupItem onClick={(e) => this.handleClickQuestion(e)}>
            <span>
              {header}
            </span>
            <span className="status">
              PENDING
            </span>
          </ListGroupItem>
          <Panel>
            <Media>
              <Media.Body>
                <Media.Heading>{this.props.question.body}</Media.Heading>
                <p>{this.props.question.answer}</p>
              </Media.Body>
            </Media>
          </Panel>
        </div>
      );  
    } else if (this.state.status === 'new') {
      component = <NewQuestion number={this.props.number}
        question={this.props.question}
        handleSubmitNewQuestion={this.props.handleSubmitNewQuestion}/> ;
    }

    return (
      <div>
        {component}
      </div>
    );
  }
}

export default QuestionComponent;
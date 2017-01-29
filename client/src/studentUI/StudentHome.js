import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import StudentSidebar from './StudentSidebar';
import QuestionArea from './QuestionArea';

class StudentHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      firstName: '',
      lastName: '',
      image: '',
      questions: [
        {id:3, type: 'Short Answer', body: 'Who is the best?', answer: 'EJ'}, 
        {id:4, type: 'Short Answer', body: 'Who is the worst?', answer: 'Hitler'}],
      answers: [],
      testName: '',
      type: ''
    };
  }
//aa
  handleAnswer(answerBody, qId) {
    let answer = {
      StudentsId: this.state.id,
      QuestionsId: qId,
      answerBody: answerBody,
      isCorrect: 'Pending'
    }
    //send socket answer

    let newQuestions = this.state.questions.slice(1);
    this.setState({questions: newQuestions});
  }

  render() {
    let question = null;

    if(this.state.questions.length > 0) {
      question = (
        <QuestionArea question={this.state.questions[0]}
          handleAnswer={this.handleAnswer.bind(this)}/>
      );
    }

    return (
      <div>
      <Grid fluid={true}>
        <Row>
          <Col xs={4} sm={4} md={4} lg={3}>
            <StudentSidebar questions={this.state.questions}/>
          </Col>
          <Col xs={8} sm={8} md={8} lg={9}>
            {question}
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default StudentHome;
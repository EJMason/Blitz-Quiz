import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import LectureBodyComponents from './LectureBodyComponents';
import QuestionsBodyComponents from './lectureQuestions/QuestionsBodyComponents';

class LectureBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggler: true,
      currentClass: 'Biology 100',
      teacher: props.teacher,
      tests: [
        {id: 1, testName: 'Bugs', type: 'Lecture', isComplete: false},
        {id: 2, testName: 'Horses', type: 'Lecture', isComplete: false},
        {id: 3, testName: 'Mammals', type: 'Lecture', isComplete: true}
      ],
      selectedLecture: null,
      selectedQuestions: [],
      newQuestions: []
    };
    this.selectLectureHandler = this.selectLectureHandler.bind(this);
    this.handleDeselectLecture = this.handleDeselectLecture.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleSubmitNewQuestion = this.handleSubmitNewQuestion.bind(this);
    this.handleAddLecture = this.handleAddLecture.bind(this);
  }

//=========================================
//            Begin Methods
//=========================================
  //Needs to go to base questions and get the selectedQuestions
  selectLectureHandler (e, id) {
    e.preventDefault();
    for (let test of this.state.tests) {
      if (test.id === id) {
        this.setState({selectedLecture: test});
      }
    }
    this.setState({
      selectedQuestions: [
        {id: 5, type: 'Short Answer', body: 'How many legs do ants have?', answer: 'Six legs', status: 'complete'}, 
        {id: 6, type: 'Short Answer', body: 'What is the role of the Queen Ant?', answer: 'Lead their colony', status: 'incomplete'},
        {id: 7, type: 'Short Answer', body: 'What is the best Ant?', answer: 'Spicyboi', status: 'incomplete'}
        ]
    });
  }

  handleAddQuestion (e) {
    e.preventDefault();
    let questions = this.state.newQuestions.slice();
    questions.push({type: 'Short Answer', body: '', answer: '', status: 'new'});

    this.setState({
      newQuestions: questions
    });
  }

  handleSubmitNewQuestion (e, type, body, answer) {
    e.preventDefault();
    let obj = {type: type, body: body, answer: answer, status: 'incomplete'};
    let arr = this.state.selectedQuestions.concat([obj]); 
    this.setState((prevState, props) => {
      return {
        selectedQuestions: arr,
        newQuestions: []
      };
    });
  }

  handleDeselectLecture(e) {
    e.preventDefault();
    this.setState({selectedLecture: null, selectedQuestions: []});
  }

  handleAddLecture(testName) {
    console.log('Hello!')
    let arr = this.state.tests.slice();
    arr.unshift({id: 4, testName: testName, type: 'Lecture', isComplete: false});
    this.setState({tests: arr});
  }

//=========================================
//            Render
//=========================================
  render() {
    let item = null;
    if(this.state.selectedLecture === null) {
      item = <LectureBodyComponents tests={this.state.tests} 
        selectLectureHandler={this.selectLectureHandler} 
        handleAddLecture = {this.handleAddLecture}/>;
    } else {
      item = <QuestionsBodyComponents questions={this.state.selectedQuestions}
        lecture={this.state.selectedLecture}
        newQuestions={this.state.newQuestions}
        handleDeselectLecture={this.handleDeselectLecture}
        handleAddQuestion={this.handleAddQuestion} 
        handleSubmitNewQuestion={this.handleSubmitNewQuestion}/>
}
    return (
      <div>
        {item}
      </div>
    );
  }
}

export default LectureBody;
import React, { Component } from 'react';
import { Container } from './App.styled';
import { Controls } from './Controls/Controls';


// export const App = () => {
//   return (
//     <Container>
//     <h1>Please Leave Feedback</h1>
//     <Controls></Controls>
//
//     </Container>
//   );
// };

export class App extends Component {

  constructor() {//для початку без спрощених варіантів
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  };

  addGoodVote = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  addNeutralVote = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  addBadVote = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0) {
      return 0;
    }
    return Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);
  }

  render() {
    return (
      <Container>
        <h1>Please Leave Feedback</h1>
        <Controls
          clickGoodVote={this.addGoodVote}
          clickNeutralVote={this.addNeutralVote}
          clickBadVote={this.addBadVote}
        ></Controls>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </Container>
    );
  }

}

// export class App;

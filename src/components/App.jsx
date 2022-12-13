import React, { Component } from 'react';
import { Stat } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { NoFeedbackNotification } from './Notification/Notification';

export class App extends Component {

  constructor() {
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
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0) {
      return 0;
    }
    return Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);
  };

  isFeedback = () => this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0;

  render() {
    return (

      <Section title='Please Leave Feedback'>

        <FeedbackOptions
          onClickGoodVote={this.addGoodVote}
          onClickNeutralVote={this.addNeutralVote}
          onClickBadVote={this.addBadVote}>
        </FeedbackOptions>
        <Stat isData={this.isFeedback()}>Statistics</Stat>

        {this.isFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics>
        ) : (
          <NoFeedbackNotification message='There is no feedback'></NoFeedbackNotification>
        )}

      </Section>
    );
  }
}


import React from 'react';
import { Button, ButtonsStyle } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onVote }) => {

  const onVoteClick = vote => {
    console.log(vote);
    onVote(vote);
  };

  //todo: зрозуміти коли які функції застосовувати (анонімні, стрілки і т.п.)
  return (
    <ButtonsStyle>
      <Button type='button' vote='good' onClick={() => onVoteClick('good')}>Good</Button>
      <Button type='button' vote='neutral' onClick={() => onVoteClick('neutral')}>Neutral</Button>
      <Button type='button' vote='bad' onClick={() => onVoteClick('bad')}>Bad</Button>
    </ButtonsStyle>
  );
};


import React from 'react';
import { ButtonsStyle } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ onVote }) => {

  const onVoteClick = event => {
    onVote(event.currentTarget.attributes.vote.value);
  };

  return (

    <ButtonsStyle>
      <button type='button' vote='good' onClick={onVoteClick}>Good</button>
      <button type='button' vote='neutral' onClick={onVoteClick}>Neutral</button>
      <button type='button' vote='bad' onClick={onVoteClick}>Bad</button>
    </ButtonsStyle>
  );
};


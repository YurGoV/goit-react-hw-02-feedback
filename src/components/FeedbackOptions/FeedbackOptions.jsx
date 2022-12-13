import React from 'react';
import { ButtonsStyle } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onClickGoodVote, onClickNeutralVote, onClickBadVote }) => (
  <ButtonsStyle>
    <button type='button' onClick={onClickGoodVote}>Good</button>
    <button type='button' onClick={onClickNeutralVote}>Neutral</button>
    <button type='button' onClick={onClickBadVote}>Bad</button>
  </ButtonsStyle>
);


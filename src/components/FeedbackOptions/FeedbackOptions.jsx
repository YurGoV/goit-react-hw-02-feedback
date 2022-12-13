import {ButtonsStyle} from './FeedbackOptions.styled';
import React from 'react';

export const FeedbackOptions = ({onClickGoodVote, onClickNeutralVote, onClickBadVote}) => (
  <ButtonsStyle>
    <button type="button" onClick={onClickGoodVote}>Good</button>
    <button type="button" onClick={onClickNeutralVote}>Neutral</button>
    <button type="button" onClick={onClickBadVote}>Bad</button>
    </ButtonsStyle>
)



// <button type="button" onClick={onIncrement}>
//   Увеличить на 1
// </button>
// <button type="button" onClick={onDecrement}>
//   Уменьшить на 1
// </button>

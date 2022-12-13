import {Control} from './Controls.styled';

export const Controls = ({clickGoodVote, clickNeutralVote, clickBadVote}) => (
  <Control>
    <button type="button" onClick={clickGoodVote}>Good</button>
    <button type="button" onClick={clickNeutralVote}>Neutral</button>
    <button type="button" onClick={clickBadVote}>Bad</button>
  </Control>
)



// <button type="button" onClick={onIncrement}>
//   Увеличить на 1
// </button>
// <button type="button" onClick={onDecrement}>
//   Уменьшить на 1
// </button>

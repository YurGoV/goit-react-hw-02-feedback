import React from 'react';
import { Statistic } from './Statistic.styled';
import { Positive } from './Statistic.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage } ) => {
  return <div>
    <Statistic>Good: {good}</Statistic>
    <Statistic>Neutral: {neutral}</Statistic>
    <Statistic>Bad: {bad}</Statistic>
    <Statistic>Total: {total}</Statistic>
    <Positive data={positivePercentage}>Positive feedback: {positivePercentage}%</Positive>
  </div>
};


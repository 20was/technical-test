import React, { FC } from 'react';
import {SnowflakeScores} from "../models/SnowflakeScores";
import {SNOWFLAKE_SCORES, SnowFlakeScore} from "../models/ScoreAreas";
import '../Stock.css';

interface Props {
  scores: SnowflakeScores;
}

const StocksCard: FC<Props> = ({ scores }): JSX.Element => {

  return (
      <>
        {SNOWFLAKE_SCORES.map((score: SnowFlakeScore, index) => (
            <div className={`col text-center ${index !== 0 ? 'border-start' : ''}`} key={score.key} data-testid="score-card-wrapper">
              <label className="tx-12">{(scores as any)[score.key]}</label>
              <p className="fw-bold tx-12">{score.name}</p>
            </div>
        ))}
      </>
  );
};

export default StocksCard;

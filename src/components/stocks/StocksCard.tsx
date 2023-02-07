import React, { FC } from 'react';
import {SnowflakeScores} from "../../models/SnowflakeScores";
import {SNOWFLAKE_SCORES, SnowFlakeScore} from "../../models/ScoreAreas";

interface Props {
  scores: SnowflakeScores;
}

const StocksCard: FC<Props> = ({ scores }): JSX.Element => {
    const length:number = SNOWFLAKE_SCORES.length
  return (
      <>
        {SNOWFLAKE_SCORES.map((score: SnowFlakeScore, index) => (
            <div className={`col text-center score-bg ${index !== length-1 ? 'mg-right' : ''}`} key={score.key} data-testid="score-card-wrapper">
              <label className="tx-12">{(scores as any)[score.key]}</label>
              <p className="fw-bold tx-12">{score.name}</p>
            </div>
        ))}
      </>
  );
};

export default StocksCard;

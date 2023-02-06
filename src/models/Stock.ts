import { SnowflakeScores } from './SnowflakeScores';

export interface Stock {
  id: number;
  name: string;
  unique_symbol: string;
  score: {
    data: SnowflakeScores;
  };
}

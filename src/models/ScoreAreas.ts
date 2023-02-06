export interface SnowFlakeScore {
  key: string;
  name: string;
}


export const SNOWFLAKE_SCORES: SnowFlakeScore[] = [
  { key: 'value', name: 'VALUE' },
  { key: 'income', name: 'DIVIDEND' },
  { key: 'health', name: 'HEALTH' },
  { key: 'past', name: 'PAST' },
  { key: 'future', name: 'FUTURE' },
];

import React from 'react';
import {render, screen} from '@testing-library/react';
import StocksCard from "../StocksCard";
import {SNOWFLAKE_SCORES} from '@models/ScoreAreas';
import {mockSnowflakeScores} from '@mocks/snowflakeScoreMock';


describe('ScoresCard component', () => {
    it('renders the scores card with correct scores', () => {
        render(<StocksCard scores={mockSnowflakeScores}/>);
        const scoreElements = screen.getAllByTestId('score-card-wrapper');
        expect(scoreElements).toBeDefined();
        SNOWFLAKE_SCORES.forEach((score) => {
            expect(screen.getByText(score.name)).toBeInTheDocument();
        });
    });
});

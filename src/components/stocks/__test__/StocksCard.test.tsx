import React from 'react';
import {render, screen} from '@testing-library/react';
import StocksCard from "../stocks/StocksCard";
import {SnowflakeScores} from "../../models/SnowflakeScores";
import {SNOWFLAKE_SCORES} from "../../models/ScoreAreas";


describe('ScoresCard component', () => {
    it('renders the scores card with correct scores', () => {
        const mockScores: SnowflakeScores = {
            value: 50,
            income: 60,
            health: 70,
            past: 80,
            future: 90,
            total: 89
        };
        render(<StocksCard scores={mockScores}/>);

        const scoreElements = screen.getAllByTestId('score-card-wrapper');
        expect(scoreElements).toBeDefined();
        SNOWFLAKE_SCORES.forEach((score) => {
            expect(screen.getByText(score.name)).toBeInTheDocument();
        });
    });
});

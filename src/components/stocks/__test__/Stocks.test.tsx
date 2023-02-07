import React from 'react';
import { render, screen } from '@testing-library/react';
import Stocks from "../Stocks";
import {stocksMock} from '@mocks/stocks';

describe('Stocks', () => {
    it('renders the wrapper', () => {
        render(<Stocks stocks={stocksMock}/>);
        expect(screen.getByTestId('stocks-wrapper')).toBeTruthy();
    });
});

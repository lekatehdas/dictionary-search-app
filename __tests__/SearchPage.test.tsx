import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPage from '../src/components/pages/SearchPage';
import {BrowserRouter as Router} from 'react-router-dom';

describe('SearchPage', () => {
    
    it('renders without crashing', () => {
        render(
            <Router>
                <SearchPage/>
            </Router>
        );

        expect(screen.getByText('Dictionary Search')).toBeInTheDocument();
    });

    it('renders search bar', () => {
        render(
            <Router>
                <SearchPage/>
            </Router>
        );

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('displays results', () => {
        render(
            <Router>
                <SearchPage/>
            </Router>
        );

        expect(screen.getByText('Results')).toBeInTheDocument();
    });
});

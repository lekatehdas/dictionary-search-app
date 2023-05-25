import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPage from '../src/components/pages/SearchPage';
import {BrowserRouter as Router} from 'react-router-dom';
import {wordSearch} from "../src/services/WordSearchService";

jest.mock('../src/services/WordSearchService', () => ({
    wordSearch: jest.fn(),
}));
describe('SearchPage', () => {

    beforeEach(async () => {
        (wordSearch as jest.Mock).mockResolvedValue(['word1', 'word2', 'word3']);
    })

    it('renders results after async operation', async () => {
        rendering()

        expect(await screen.findByText('word1')).toBeInTheDocument();
        expect(await screen.findByText('word2')).toBeInTheDocument();
        expect(await screen.findByText('word3')).toBeInTheDocument();
    });

    it('renders search bar', async () => {
        rendering()

        const searchBar = await screen.findByRole('textbox');
        expect(searchBar).toBeInTheDocument();
    });

    it('displays results', async () => {
        rendering()

        const results = await screen.findByText('Results');
        expect(results).toBeInTheDocument();
    });
});

function rendering() {
    return render(
        <Router>
            <SearchPage/>
        </Router>
    );
}
import axios from 'axios';
import {getWordDetails, wordSearch} from "../src/services/WordSearchService";
import {mockData, mockSuggestions} from "./mockData";

import mocked = jest.mocked;
jest.mock('axios');

describe('Testing Word Module', () => {

    describe('Testing getWordDetails', () => {
        it('Should return null when no word is given', async () => {
            const res = await getWordDetails(undefined);

            expect(res).toBe(null);
        });

        it('Should return null when no data is found', async () => {
            mocked(axios.get).mockResolvedValue([]);

            const res = await getWordDetails("wrong_word");

            expect(res).toBe(null);
        });

        it('Should return data', async () => {
            mocked(axios.get).mockResolvedValue(mockData)

            const res = await getWordDetails("test");

            if (res !== null && "word" in res) {
                expect(res.word).toBe("test");
            }
        });

        it('Should return error object when status 404', async () => {
            mocked(axios.get).mockRejectedValue({ response: {status: 404} });

            const res = await getWordDetails("wrong_word");

            expect(res).toHaveProperty('title');
            expect(res).toHaveProperty('message');
            expect(res).toHaveProperty('resolution');
        });
    });

    describe('Testing wordSearch', () => {
        it('Should return empty array when no word is given', async () => {
            const res = await wordSearch('');

            expect(res).toStrictEqual([]);
        });

        it('Should return empty array when no data is found', async () => {
            mocked(axios.get).mockResolvedValue([])
            const res = await wordSearch('test');

            expect(res).toStrictEqual([]);
        });

        it('Should return an array of none duplicates', async () => {
            mocked(axios.get).mockResolvedValue({data: mockSuggestions})

            const res = await wordSearch('test');

            expect(res).toStrictEqual(["test1", "test2", "test3"]);
        });

    });

});

import axios, {AxiosError} from 'axios';
import {ErrorObject, WordData} from "../models/dataModels.ts";

/**
 * This async function fetches details about a word from an external API.
 *
 * @param word - The word for which details are to be fetched. This should be a string.
 * If this parameter is undefined or empty, the function immediately returns null.
 *
 * @return Promise<WordData | ErrorObject | null> - Returns a Promise that resolves to one of three possibilities:
 * - WordData: If the API call was successful and data was found for the word, a WordData object is returned.
 * - ErrorObject: If the API call was unsuccessful, an ErrorObject is returned detailing the error.
 * - null: If the API call was successful but no data was found for the word, null is returned.
 *
 * @throws Throws an error if the API call fails.
 */
export async function getWordDetails(word: string | undefined): Promise<WordData | ErrorObject | null> {
    if (!word)
        return null;

    try {
        const data = await fetchData(getParsedUrl(word));
        return data?.length > 0 ? parseWordData(data[0]) : null;

    } catch (error: any) {
        return axiosErrorHandling(error);
    }
}

/**
 * This async function performs a search using a query on an external API.
 * It fetches suggested words that match the query string.
 *
 * @param query - The query string that will be searched for.
 * If this parameter is undefined or empty, the function immediately returns an empty array.
 *
 * @param maxResults - Optional parameter that defines the maximum number of results to return.
 * If not provided, the default value is 10.
 *
 * @return Promise<string[]> - Returns a Promise that resolves to an array of strings.
 * Each string in the array is a word that matches the search query.
 *
 * @throws Prints an error message to the console if the API call fails.
 */
export async function wordSearch(query: string, maxResults = 10): Promise<string[]> {
    if (!query)
        return [];

    try {
        const data = await fetchData(`https://api.datamuse.com/sug?s=*${query}*&max=${maxResults}`);

        if (!data || data.length === 0) {
            return [];
        }

        const words = data.map((item: any) => item.word);
        return Array.from(new Set(words));

    } catch (error: any) {
        console.error(`Error in wordSearch: ${error.message}`);
        return [];
    }
}

function getParsedUrl(word: string) {
    word = word.trim();
    word = word.split(' ').join('%20');
    return `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
}

function parseWordData(data: any): WordData {
    return {
        word: data.word,
        phonetic: data.phonetic,
        meanings: data.meanings.map((meaning: any) => ({
            partOfSpeech: meaning.partOfSpeech,
            definitions: meaning.definitions.map((def: any) => ({
                definition: def.definition
            }))
        }))
    };
}

async function fetchData(url: string): Promise<any> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        console.error(`Error in fetchData: ${error.message}`);
        throw error;
    }
}

function axiosErrorHandling(error: any) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.status === 404) {
        return getErrorObject();

    } else {
        console.error('Error: ', axiosError.message);
    }
    return null;
}

function getErrorObject() {
    return {
        title: 'No Definitions Found',
        message: "Sorry pal, we couldn't find definitions for the word you were looking for.",
        resolution: 'You can try the search again at a later time or head to the web instead.',
    };
}
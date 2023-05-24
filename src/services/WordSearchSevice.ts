import axios, {AxiosError} from 'axios';
import {ErrorObject, WordData} from "../models/dataModels.ts";

const parseWordData = (data: any): WordData => ({
    word: data.word,
    phonetic: data.phonetic,
    meanings: data.meanings.map((meaning: any) => ({
        partOfSpeech: meaning.partOfSpeech,
        definitions: meaning.definitions.map((def: any) => ({
            definition: def.definition
        }))
    }))
});

const getWordDetails = async (word: string | undefined): Promise<WordData | ErrorObject | null> => {
    if (word === undefined) {
        return null;
    }

    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = response.data;

        return data.length > 0 ? parseWordData(data[0]) : null;
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response && axiosError.response.status === 404) {
            return {
                title: 'No Definitions Found',
                message: "Sorry pal, we couldn't find definitions for the word you were looking for.",
                resolution: 'You can try the search again at a later time or head to the web instead.',
            };
        } else {
            console.error('Error: ', axiosError.message);
        }
        return null;
    }
};

export default getWordDetails;

export async function wordSearch(query: string) {
    if (!query)
        return []
    return ["Alpha", "Albino", "Albatross", query]
}
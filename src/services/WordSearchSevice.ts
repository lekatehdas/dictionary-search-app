import axios from 'axios';

interface Definition {
    definition: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
}

export interface WordData {
    word: string;
    phonetic: string;
    meanings: Meaning[];
}

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

const getWordDetails = async (word: string | undefined): Promise<WordData | null> => {
    if (word === undefined)
        return null
    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = response.data;

        return data.length > 0 ? parseWordData(data[0]) : null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default getWordDetails;


export async function wordSearch(query: string) {
    if (!query)
        return []
    return ["Alpha", "Albino", "Albatross", query]
}
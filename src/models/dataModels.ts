export interface Definition {
    definition: string;
}

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
}

export interface WordData {
    word: string;
    phonetic: string;
    meanings: Meaning[];
}

export interface ErrorObject {
    title: string,
    message: string,
    resolution: string
}
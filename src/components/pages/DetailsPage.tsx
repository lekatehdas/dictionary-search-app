import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import getWordDetails, {WordData} from "../../services/WordSearchSevice.ts";

const DetailsPage = () => {
    const {word} = useParams();
    const [wordDetails, setWordDetails] = useState<WordData | null>(null);

    useEffect(() => {
        getWordDetails(word).then(details => setWordDetails(details));
    }, [word]);

    return (
        <>
            <nav>
                <button className='btn btn-primary' onClick={() => window.history.back()}>
                    Back to search
                </button>
            </nav>
            <div className='container'>
                <h1 className='mt-5'>{word}</h1>
                {wordDetails && (
                    <>
                        <h3 className='mt-3'>Phonetic: {wordDetails.phonetic}</h3>
                        {wordDetails.meanings.map((meaning, index) => (
                            <div className='card mt-4' key={index}>
                                <h4 className='card-header'>Part Of Speech: {meaning.partOfSpeech}</h4>
                                <ul className="list-group list-group-flush">
                                    {meaning.definitions.map((definition, defIndex) => (
                                        <li className="list-group-item" key={defIndex}>{definition.definition}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default DetailsPage;

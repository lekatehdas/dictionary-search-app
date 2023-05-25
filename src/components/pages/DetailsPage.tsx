import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ErrorObject, WordData} from "../../models/dataModels.ts";
import getWordDetails from "../../services/WordSearchSevice.ts";


const DetailsPage = () => {
    const navigate = useNavigate()

    const {word} = useParams();
    const [wordDetails, setWordDetails] = useState<WordData | null>(null);
    const [error, setError] = useState<ErrorObject | null>(null);

    useEffect(() => {
        getWordDetails(word)
            .then((details) => {
                if (isErrorObject(details)) {
                    setError(details);
                } else {
                    setWordDetails(details);
                }
            })
            .catch((error) => console.error(error));
    }, [word]);

    const isErrorObject = (obj: any): obj is ErrorObject => {
        return obj && obj.title && obj.message && obj.resolution;
    };

    const renderWordDetails = () => {
        if (wordDetails) {
            return (
                <>
                    {wordDetails.phonetic && <h3 className="mt-4">Phonetic: {wordDetails.phonetic}</h3>}

                    {wordDetails.meanings.map((meaning, index) => (

                        <div className="card mt-4" key={index}>

                            <div className="card-header">Part of Speech: {meaning.partOfSpeech}</div>

                            <ul className="list-group list-group-flush">
                                {meaning.definitions.map((definition, defIndex) => (

                                    <li className="list-group-item" key={defIndex}>
                                        {definition.definition}
                                    </li>

                                ))}
                            </ul>

                        </div>
                    ))}
                </>
            );
        }
        return null;
    };

    const renderErrorMessage = () => {
        if (error) {
            return (
                <div className="alert alert-danger mt-4">
                    <h4>{error.title}</h4>
                    <p>{error.message}</p>
                    <p>{error.resolution}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="container">
            <nav>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Back to search
                </button>
            </nav>
            <div>
                <h1 className="mt-5">{word}</h1>
                {renderErrorMessage()}
                {renderWordDetails()}
            </div>
        </div>
    );
};

export default DetailsPage;

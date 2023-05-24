import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import getWordDetails, {WordData} from "../../services/WordSearchSevice.ts";

const DetailsPage = () => {
  const { word } = useParams();
  const [wordDetails, setWordDetails] = useState<WordData | null>(null);

  useEffect(() => {
    getWordDetails(word).then(details => setWordDetails(details));
  }, [word]);

  return (
    <>
      <nav>
        <button onClick={() => window.history.back()}>
          Back to search
        </button>
      </nav>
      <div>
        <h1>{word}</h1>
        {wordDetails && (
          <>
            <h3>Phonetic: {wordDetails.phonetic}</h3>
            {wordDetails.meanings.map((meaning, index) => (
              <div key={index}>
                <h4>Part Of Speech: {meaning.partOfSpeech}</h4>
                <ul>
                  {meaning.definitions.map((definition, defIndex) => (
                    <li key={defIndex}>{definition.definition}</li>
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

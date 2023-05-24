import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

const DetailsPage = () => {
    const { word } = useParams()
    return (
        <>
            <nav>
                <Link to="/">Back to search</Link>
            </nav>
            <div>
                <h1>Word Details</h1>
                <p>Selected word: {word}</p>
                {/* TODO display the details */}
            </div>
        </>
    );
};

export default DetailsPage;

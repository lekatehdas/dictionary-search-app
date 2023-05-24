import SearchBar from "../SearchBar.tsx";
import ResultList from "../List.tsx";
// import {useState} from "react";

const SearchPage = () => {
    // const [resultsList, setResultsList] = useState<string[]>([]);

    const resultList = ["Alpha", "Bravo", "Charlie"]

    const handleSearch = (query: string) => {
        console.log(query)
        // TODO get list of possible words.
    };

    return (
        <div>
            <h1>Dictionary Search</h1>
            <p>Search words by typing them, and select the wanted one</p>
            <SearchBar onSearch={handleSearch}/>
            <ResultList children={resultList} title={"Results"}/>
        </div>
    );
};

export default SearchPage;

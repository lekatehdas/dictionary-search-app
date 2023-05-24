import SearchBar from "../SearchBar.tsx";
import ResultList from "../List.tsx";
import {useState} from "react";

const SearchPage = () => {
    const [resultsList, setResultsList] = useState<string[]>([]);


    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
        // TODO get the list of words.
    };


    return (
        <div>
            <h1>Dictionary Search</h1>
            <p>Search words by typing them, and select the wanted one</p>
            <SearchBar onSearch={handleSearch}/>
            <ResultList children={resultsList} title={"Results"}/>
        </div>
    );
};

export default SearchPage;

import SearchBar from "../SearchBar.tsx";
import ResultList from "../List.tsx";
// import {useState} from "react";

const SearchPage = () => {
    // const [resultsList, setResultsList] = useState<string[]>([]);

    const resultList = ["Alpha", "Bravo", "Charlie"]

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
        // TODO get the list of words.
    };

    const handleSelectedItem = (item: string) => {
        // TODO Redirect to details page.
    }

    return (
        <div>
            <h1>Dictionary Search</h1>
            <p>Search words by typing them, and select the wanted one</p>
            <SearchBar onSearch={handleSearch}/>
            <ResultList children={resultList} title={"Results"} onSelectItem={handleSelectedItem}/>
        </div>
    );
};

export default SearchPage;

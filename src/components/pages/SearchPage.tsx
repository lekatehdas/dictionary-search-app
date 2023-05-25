import SearchBar from "../SearchBar.tsx";
import ResultList from "../List.tsx";
import {useEffect, useState} from "react";
import {wordSearch} from "../../services/WordSearchService.ts";

const SearchPage = () => {
    const [resultsList, setResultsList] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        const handleSearch = async (query: string) => {
            const results = await wordSearch(query);
            setResultsList(results);
        };

        handleSearch(searchQuery);
    }, [searchQuery]);

    const handleSearchInput = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <div className="container">
            <h1 className="display-4">Dictionary Search</h1>
            <p className="lead">Search words by typing them, and select the wanted one</p>
            <SearchBar onSearch={handleSearchInput}/>
            <ResultList children={resultsList} title="Results" word={searchQuery}/>
        </div>
    );
};

export default SearchPage;

import React, {useState, useEffect} from 'react';

interface Props {
    onSearch: (searchQuery: string) => void;
}

/**
 * SearchBar component receives a function `onSearch` as a prop.
 * It provides a text input for the user to enter a search query.
 * When the user types in the search bar, the search query state is updated,
 * which in turn updates the `onSearch` prop function that handles the search.
 */
const SearchBar = ({onSearch}: Props) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery !== undefined && searchQuery !== null) {
            onSearch(searchQuery);
        }
    }, [searchQuery, onSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.trimStart());
    };

    return (
        <input
            className="input-group-text"
            type="text"
            placeholder="Search for a word..."
            value={searchQuery}
            onChange={handleChange}
        />
    );
};

export default SearchBar;

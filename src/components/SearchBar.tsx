import React, {useState, useEffect} from 'react';

interface Props {
    onSearch: (searchQuery: string) => void;
}

const SearchBar = ({onSearch}: Props) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery) {
            onSearch(searchQuery);
        }
    }, [searchQuery, onSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
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

import React, { useState, useEffect } from 'react';

interface Props {
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
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
      type="text"
      placeholder="Search for a word..."
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

export default SearchBar;

import SearchBar from "../SearchBar.tsx";

const SearchPage = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Call your searchWord service function here
  };

  return (
    <div>
      <h1>Dictionary Search</h1>
        <p>Search words by typing them, and select the wanted one</p>
      <SearchBar onSearch={handleSearch} />
      {/* TODO results here */}
    </div>
  );
};

export default SearchPage;

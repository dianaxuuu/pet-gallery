import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        onSearch(inputValue.trim());
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search by title or description..."
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchContainer>
    );
};

export default SearchBar;

// Styled Components
const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
`;

const SearchInput = styled.input`
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 300px;
`;

const SearchButton = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    background-color: #00a8e8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0077b6;
    }
`;

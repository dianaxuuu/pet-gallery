import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title or description..."
        />
    );
};

export default SearchBar;

const Input = styled.input`
    padding: 10px;
    margin: 20px;
    width: 100%;
    max-width: 400px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

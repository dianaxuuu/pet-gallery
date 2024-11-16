import React, { useState, useEffect } from 'react';
import useFetchPets from '../hooks/useFetchPets';
import PetCard from '../components/PetCard';
import SearchBar from '../components/SearchBar';
import SortOptions from '../components/SortOptions';
import styled from 'styled-components';

const Pets: React.FC = () => {
    const { pets, loading, error } = useFetchPets();
    const [filteredPets, setFilteredPets] = useState(pets);

    const [sortOrder, setSortOrder] = useState<'AZ' | 'ZA'>('AZ');

    useEffect(() => {
        if (pets.length > 0) {
            setFilteredPets(pets);
        }
    }, [pets]);

    const handleSearch = (searchTerm: string) => {
        if (searchTerm === '') {
            setFilteredPets(pets); // Display all pets if no search term is provided
        } else {
            setFilteredPets(
                pets.filter(
                    (pet) =>
                        pet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        pet.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    };

    const sortedPets = filteredPets.sort((a, b) =>
        sortOrder === 'AZ' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );

    return (
        <Container>
            <SearchBar onSearch={handleSearch} />
            <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
            {loading && <p>Loading...</p>}
            {error && <p>Error loading pets.</p>}
            <PetList>
                {sortedPets.map((pet) => (
                    <PetCard key={pet.url} pet={pet} />
                ))}
            </PetList>
        </Container>
    );
};

export default Pets;

// Styled Components
const Container = styled.div`
    padding: 20px;
`;

const PetList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    justify-content: start; /* Aligns last row to the left */
    max-width: 1000px;
    margin: 0 auto;
`;

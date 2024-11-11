import React, { useState } from 'react';
import useFetchPets from '../hooks/useFetchPets';
import PetCard from '../components/PetCard';
import SearchBar from '../components/SearchBar';
import SelectionControls from '../components/SelectionControls';
import styled from 'styled-components';

const Pets: React.FC = () => {
    const { pets, loading, error } = useFetchPets();
    const [selectedPets, setSelectedPets] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<'AZ' | 'ZA'>('AZ');

    const toggleSelectPet = (url: string) => {
        setSelectedPets((prevSelected) =>
            prevSelected.includes(url) ? prevSelected.filter((pet) => pet !== url) : [...prevSelected, url]
        );
    };

    const selectAll = () => setSelectedPets(pets.map((pet) => pet.url));
    const clearSelection = () => setSelectedPets([]);

    const downloadImages = () => {
        selectedPets.forEach((url, index) => {
            const link = document.createElement('a');
            link.href = url;
            link.download = `pet-image-${index}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    const filteredPets = pets
        .filter((pet) => pet.title.toLowerCase().includes(searchTerm.toLowerCase()) || pet.description.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => sortOrder === 'AZ' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

    return (
        <Container>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SelectionControls selectAll={selectAll} clearSelection={clearSelection} downloadImages={downloadImages} />
            {loading && <p>Loading...</p>}
            {error && <p>Error loading pets.</p>}
            <PetList>
                {filteredPets.map((pet) => (
                    <PetCard key={pet.url} pet={pet} isSelected={selectedPets.includes(pet.url)} toggleSelect={() => toggleSelectPet(pet.url)} />
                ))}
            </PetList>
        </Container>
    );
};

export default Pets;

const Container = styled.div`
    padding: 20px;
`;

const PetList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`;

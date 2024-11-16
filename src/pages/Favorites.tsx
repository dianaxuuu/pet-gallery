import React, { useState } from 'react';
import { usePetContext } from '../context/PetContext';
import styled from 'styled-components';

const Favorites: React.FC = () => {
    const { favoritedPets, toggleFavoritePet } = usePetContext();
    const [selectedPets, setSelectedPets] = useState<string[]>([]);

    const toggleSelectPet = (url: string) => {
        setSelectedPets((prevSelected) =>
            prevSelected.includes(url) ? prevSelected.filter((pet) => pet !== url) : [...prevSelected, url]
        );
    };

    const selectAll = () => setSelectedPets(favoritedPets.map((pet) => pet.url));
    const clearSelection = () => setSelectedPets([]);

    const downloadImages = async () => {
        if (selectedPets.length === 0) {
            alert("No pets selected for download.");
            return;
        }

        // Iterate through each selected image URL
        for (let index = 0; index < selectedPets.length; index++) {
            const url = selectedPets[index];
            try {
                // Fetch the image data
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch image: ${url}`);
                }

                // Convert the response to a Blob
                const blob = await response.blob();

                // Create a link element to trigger the download
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `favorite-pet-${index + 1}.jpg`; // Set the file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Release the blob URL
                URL.revokeObjectURL(link.href);
            } catch (error) {
                console.error(`Error downloading image ${index + 1}:`, error);
            }
        }
    };


    if (favoritedPets.length === 0) {
        return <Message>No favorites yet! Add some pets to your favorites.</Message>;
    }

    return (
        <Container>
            <ControlsContainer>
                <Button onClick={selectAll}>Select All</Button>
                <Button onClick={clearSelection}>Clear Selection</Button>
                <DownloadButton disabled={selectedPets.length === 0} onClick={downloadImages}>
                    Download Selected ({selectedPets.length})
                </DownloadButton>
            </ControlsContainer>
            <PetList>
                {favoritedPets.map((pet) => (
                    <FavoriteCard key={pet.url}>
                        <RemoveHeart onClick={() => toggleFavoritePet(pet)}>♥</RemoveHeart>
                        <img src={pet.url} alt={pet.title} />
                        <h3>{pet.title}</h3>
                        <p>{pet.description}</p>
                        <SelectCheckbox
                            type="checkbox"
                            checked={selectedPets.includes(pet.url)}
                            onChange={() => toggleSelectPet(pet.url)}
                        />
                    </FavoriteCard>
                ))}
            </PetList>
        </Container>
    );
};

export default Favorites;

// Styled Components
const Container = styled.div`
    padding: 20px;
    text-align: center;
`;

const ControlsContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    justify-content: center;
`;

const Button = styled.button`
    padding: 0.6em 1.2em;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    background-color: #00a8e8;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0077b6;
    }
`;

const DownloadButton = styled(Button)`
    background-color: #ff6f61;

    &:hover {
        background-color: #ff3d34;
    }

    &:disabled {
        background-color: #ff6f61a0;
        cursor: not-allowed;
    }
`;

const PetList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    justify-content: start; 
    max-width: 1000px; 
    margin: 0 auto; 
`;

const FavoriteCard = styled.div`
    width: 200px;
    padding: 10px;
    border: 2px solid lightgray;
    border-radius: 8px;
    text-align: center;
    position: relative;

    img {
        max-width: 100%;
        border-radius: 4px;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 1.2em;
        margin: 5px 0;
    }

    p {
        font-size: 0.9em;
        color: #555;
    }
`;

const SelectCheckbox = styled.input`
    position: absolute;
    top: 8px;
    left: 8px;
    transform: scale(1.5);
`;

const RemoveHeart = styled.button`
    background: none;
    border: none;
    font-size: 1.8em;
    color: #ff6f61;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    transition: color 0.3s ease;

    &:hover {
        color: #ff3d34;
    }
`;

const Message = styled.p`
    font-size: 1.2em;
    color: #555;
`;

import React from 'react';
import { usePetContext } from '../context/PetContext';
import styled from 'styled-components';

interface Pet {
    url: string;
    title: string;
    description: string;
}

interface PetCardProps {
    pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
    const { favoritedPets, toggleFavoritePet } = usePetContext();
    const isFavorited = favoritedPets.some((favorite) => favorite.url === pet.url);

    return (
        <Card>
            <HeartButton isFavorited={isFavorited} onClick={() => toggleFavoritePet(pet)}>
                ♥
            </HeartButton>
            <img src={pet.url} alt={pet.title} />
            <h3>{pet.title || 'Unknown Pet'}</h3>
            <p>{pet.description || 'No description available'}</p>
        </Card>
    );
};

export default PetCard;

// Styled Components
const Card = styled.div`
    width: 200px;
    padding: 10px;
    border: 2px solid lightgray;
    border-radius: 8px;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
        max-width: 100%;
        border-radius: 4px;
    }

    h3 {
        margin: 10px 0;
    }
`;

const HeartButton = styled.button<{ isFavorited: boolean }>`
    background: none;
    border: none;
    font-size: 1.8em;
    color: ${(props) => (props.isFavorited ? '#ff6f61' : '#ddd')};
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    transition: color 0.3s ease;

    &:hover {
        color: ${(props) => (props.isFavorited ? '#ff3d34' : '#aaa')};
    }
`;

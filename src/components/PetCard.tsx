import React from 'react';
import styled from 'styled-components';

interface Pet {
    url: string;
    title: string;
    description: string;
    createdAt: string;
}

interface PetCardProps {
    pet: Pet;
    isSelected: boolean;
    toggleSelect: () => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, isSelected, toggleSelect }) => {
    return (
        <Card onClick={toggleSelect} isSelected={isSelected}>
            <img src={pet.url} alt={pet.title} />
            <h3>{pet.title}</h3>
            <p>{pet.description}</p>
        </Card>
    );
};

export default PetCard;

const Card = styled.div<{ isSelected: boolean }>`
    width: 200px;
    padding: 10px;
    border: 2px solid ${(props) => (props.isSelected ? 'blue' : 'lightgray')};
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    
    img {
        max-width: 100%;
        border-radius: 4px;
    }
    
    h3 {
        font-size: 1.1em;
        margin: 10px 0;
    }
`;

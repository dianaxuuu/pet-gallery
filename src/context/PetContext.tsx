import React, { createContext, useContext, useState } from 'react';

interface Pet {
    url: string;
    title: string;
    description: string;
}

interface PetContextType {
    selectedPets: string[];
    favoritedPets: Pet[];
    toggleFavoritePet: (pet: Pet) => void;
    clearSelection: () => void;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedPets, setSelectedPets] = useState<string[]>([]);
    const [favoritedPets, setFavoritedPets] = useState<Pet[]>([]);

    const toggleFavoritePet = (pet: Pet) => {
        setFavoritedPets((prevFavorites) =>
            prevFavorites.find((favorite) => favorite.url === pet.url)
                ? prevFavorites.filter((favorite) => favorite.url !== pet.url)
                : [...prevFavorites, pet]
        );
    };

    const clearSelection = () => setSelectedPets([]);

    return (
        <PetContext.Provider value={{ selectedPets, favoritedPets, toggleFavoritePet, clearSelection }}>
            {children}
        </PetContext.Provider>
    );
};

export const usePetContext = () => {
    const context = useContext(PetContext);
    if (context === undefined) {
        throw new Error('usePetContext must be used within a PetProvider');
    }
    return context;
};

import { useState, useEffect } from 'react';

interface Pet {
    url: string;
    title: string;
    description: string;
    createdAt: string;
}

const useFetchPets = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await fetch('https://eulerity-hackathon.appspot.com/pets');
                const data = await response.json();
                setPets(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchPets();
    }, []);

    return { pets, loading, error };
};

export default useFetchPets;

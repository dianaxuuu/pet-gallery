import React from 'react';
import styled from 'styled-components';

interface SortOptionsProps {
    sortOrder: 'AZ' | 'ZA';
    setSortOrder: (order: 'AZ' | 'ZA') => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ sortOrder, setSortOrder }) => {
    return (
        <SortContainer>
            <Label>Sort by:</Label>
            <RadioGroup>
                <RadioLabel>
                    <input
                        type="radio"
                        name="sortOrder"
                        value="AZ"
                        checked={sortOrder === 'AZ'}
                        onChange={() => setSortOrder('AZ')}
                    />
                    Name A-Z
                </RadioLabel>
                <RadioLabel>
                    <input
                        type="radio"
                        name="sortOrder"
                        value="ZA"
                        checked={sortOrder === 'ZA'}
                        onChange={() => setSortOrder('ZA')}
                    />
                    Name Z-A
                </RadioLabel>
            </RadioGroup>
        </SortContainer>
    );
};

export default SortOptions;

// Styled Components
const SortContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

const Label = styled.span`
    margin-right: 8px;
    font-weight: bold;
`;

const RadioGroup = styled.div`
    display: flex;
    gap: 16px;
`;

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 1em;
    cursor: pointer;

    input {
        margin-right: 4px;
    }
`;

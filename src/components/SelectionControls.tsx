import React from 'react';
import styled from 'styled-components';

interface SelectionControlsProps {
    selectAll: () => void;
    clearSelection: () => void;
    downloadImages: () => void;
    selectedCount: number;
}

const SelectionControls: React.FC<SelectionControlsProps> = ({ selectAll, clearSelection, downloadImages, selectedCount }) => (
    <ButtonContainer>
        <StyledButton onClick={selectAll}>Select All</StyledButton>
        <StyledButton onClick={clearSelection}>Clear Selection</StyledButton>
        <DownloadButton
            onClick={downloadImages}
            disabled={selectedCount === 0}
            title={selectedCount === 0 ? 'Select images to enable download' : ''}
        >
            Download Selected ({selectedCount})
        </DownloadButton>
    </ButtonContainer>
);

export default SelectionControls;

// Styled Components
const ButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    justify-content: center;
`;

const StyledButton = styled.button`
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

    &:active {
        background-color: #005f8a;
    }
`;

const DownloadButton = styled(StyledButton)`
    background-color: #ff6f61;

    &:hover {
        background-color: #ff3d34;
    }

    &:active {
        background-color: #cc322a;
    }

    &:disabled {
        background-color: #ff6f61a0;
        cursor: not-allowed;
    }
`;

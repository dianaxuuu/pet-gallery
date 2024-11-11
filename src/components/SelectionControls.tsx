import React from 'react';

interface SelectionControlsProps {
    selectAll: () => void;
    clearSelection: () => void;
    downloadImages: () => void;
}

const SelectionControls: React.FC<SelectionControlsProps> = ({ selectAll, clearSelection, downloadImages }) => (
    <div>
        <button onClick={selectAll}>Select All</button>
        <button onClick={clearSelection}>Clear Selection</button>
        <button onClick={downloadImages}>Download Selected</button>
    </div>
);

export default SelectionControls;

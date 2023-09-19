import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

// const ItemType = 'SELECT_INPUT';

const ItemType = 'DRAGGABLE_SELECT';

const DraggableSelect: React.FC = () => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { type: ItemType, id: 'node1' },
  });

  return (
    <div
      ref={ref}
      data-draggable="true"
      data-draggable-id="node1"
      style={{
        padding: '10px',
        border: '1px dashed #ccc',
        marginBottom: '5px',
        width: '200px',
        cursor: 'grab',
      }}
    >
      <select style={{ width: '100%' }}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default DraggableSelect;


// export default SelectInput;

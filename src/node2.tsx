import React from 'react';
import { useDrag } from 'react-dnd';

const ItemType = 'DRAGGABLE_DIV';



const DraggableDiv: React.FC= () => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { type: ItemType, id: 'node2' }, // Assign a unique identifier to the item
  });

  return (
    <div
      ref={ref}
      data-draggable="true"
      data-draggable-id="node2" // Use the unique identifier as data attribute
      style={{
        padding: '10px',
        border: '1px dashed #ccc',
        marginBottom: '5px',
        width: '200px',
        cursor: 'grab',
      }}
    >
      Simple Div
    </div>
  );
};

export default DraggableDiv;

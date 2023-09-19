import React from 'react';
import { useDrag } from 'react-dnd';

const ItemType = 'DRAGGABLE_IP';

const DraggableIP: React.FC = () => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { type: ItemType, id: 'node3' },
  });

  return (
    <div
      ref={ref}
      data-draggable="true"
      data-draggable-id="node3"
      style={{
        padding: '10px',
        border: '1px dashed #ccc',
        marginBottom: '5px',
        width: '200px',
        cursor: 'grab',
      }}
    >
      <label htmlFor="fname">First name:</label>
      <input type="text" id="fname" name="fname" />
    </div>
  );
};

export default DraggableIP;

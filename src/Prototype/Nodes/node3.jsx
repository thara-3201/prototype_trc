import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import {
    Entity2CreateForm 
 } from '../../ui-components';
// const ItemType = 'SELECT_INPUT';

const ItemType = 'DRAGGABLE_ENTITY_3';

const DraggableEntity = () => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { type: ItemType, id: 'node3' },
  });

  return (
    <div
      ref={ref}
      className="nodes"
      data-draggable="true"
      data-draggable-id="node3"
      >
          <Entity2CreateForm
              onSubmit={(fields) => {
                  // Example function to trim all string inputs
                  const updatedFields = {}
                  Object.keys(fields).forEach(key => {
                      if (typeof fields[key] === 'string') {
                          updatedFields[key] = fields[key].trim()
                      } else {
                          updatedFields[key] = fields[key]
                      }
                  })
                  return updatedFields
              }}
          />
      </div>
  );
};

export default DraggableEntity;


// export default SelectInput;

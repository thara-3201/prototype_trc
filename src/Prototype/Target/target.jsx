import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import {ALLOWED_TYPES} from '../types'

// const ALLOWED_TYPES = 'DRAGGABLE_SELECT';

const Target = () => {
  const [droppedDivRefs, setDroppedDivRefs] = useState([]);
  const containerRef = useRef(null);

  const [, drop] = useDrop({
    accept: ALLOWED_TYPES,
    drop: (item) => {
      console.log("item", item);
      const draggedId = item.id;
      const draggableElement = document.querySelector(`[data-draggable="true"][data-draggable-id="${draggedId}"]`);

      if (draggableElement && containerRef.current) {
        const element = draggableElement.childNodes[0];
        const clonedElement = element.cloneNode(true);
        console.log('clonedElement', clonedElement);
        clonedElement.classList.add('dropped_node');
        const clonedRef = React.createRef();

        containerRef.current.appendChild(clonedElement);
        console.log("draggableElement", draggableElement, draggedId);

        setDroppedDivRefs([...droppedDivRefs, clonedRef]);
      }
    },
  });

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        drop(node);
      }}
      style={{
        padding: '20px',
        border: '2px dashed #333',
        minHeight: '200px',
        height: '100%',
        width: '100%',
      }}
    >
      {
        droppedDivRefs.length > 0 ? droppedDivRefs.map((ref, index) => (
          <div key={index} ref={ref}></div>
        )) : <span style={{ color: '#ccc' }}>Drop Draggables Here</span>
      }
    </div>
  );
};

export default Target;

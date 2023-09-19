import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';

// interface TargetProps {
//   children: ReactNode;
// }

interface DraggedItem {
    type: string;
    id: string;
  }

const ALLOWED_TYPES = ['DRAGGABLE_SELECT', 'TEXT_INPUT', 'DRAGGABLE_DIV', 'DRAGGABLE_IP'];


const Target: React.FC = () => {
const [droppedItems, setDroppedItems] = useState<JSX.Element[]>([]);
const targetRef = useRef<HTMLDivElement>(null);

const [droppedDivRefs, setDroppedDivRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);
const Eleref = useRef<HTMLDivElement | null>(null);

const containerRef = useRef<HTMLDivElement | null>(null);

  const [, drop] = useDrop({
    accept: ALLOWED_TYPES,
    drop: (item: DraggedItem) => {
        console.log("item", item)
      const draggedId = item.id;
      const draggableElement = document.querySelector(`[data-draggable="true"][data-draggable-id="${draggedId}"]`);

      if (draggableElement && containerRef.current) {
        const clonedElement = draggableElement.cloneNode(true) as HTMLElement;
        const clonedRef = React.createRef<HTMLDivElement>();

        // Append the cloned element to the container
        containerRef.current.appendChild(clonedElement);
        console.log("draggableElement", draggableElement, draggedId)
        // Store a ref to the cloned element
        setDroppedDivRefs([...droppedDivRefs, clonedRef]);
      }
    },
//   const [, drop] = useDrop({
//     accept: ALLOWED_TYPES,
//     drop: (item: DraggedItem) => {
//         console.log("item", item)
//         const draggedId = item.id;
//         const draggableElement = document.querySelector(`[data-draggable="true"][data-draggable-id="${draggedId}"]`);
//         console.log("draggableElement", draggableElement, draggedId)
//         if (draggableElement && Eleref.current) {
//             const clonedElement = draggableElement.cloneNode(true) as HTMLElement;
//             Eleref.current.appendChild(clonedElement);
//             setDroppedDivs([...droppedDivs, clonedElement]);
//           }
//       },
    
    // drop: () => {
    //   // Handle the dropped item here, e.g., set the value in the target
    //   const newDroppedItem = <div key={droppedItems.length}>Dropped Div</div>;
    //   setDroppedItems([...droppedItems, newDroppedItem]);
    // },
  });

  const divRef = useRef<HTMLDivElement>(null);
  const targetDivRef = useRef<HTMLDivElement>(null);


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
    }}
  >
    {droppedDivRefs.map((ref, index) => (
      <div key={index} ref={ref}></div>
    ))}
    Drop Draggable Div Here
  </div>
  );
};

export default Target;

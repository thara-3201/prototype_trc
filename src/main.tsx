import React from 'react';
import DraggableSelect from './node';
import Target from './target';
import DraggableDiv from './node2';
import DraggableIP from './node3';

function Main() {
  return (
    <div className="App">
      <h1>Draggable Select Component</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2>Source Tab</h2>
          <DraggableSelect />
          <DraggableDiv />
          <DraggableIP />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Target Tab</h2>
          <Target />
        </div>
      </div>
    </div>
  );
}

export default Main;

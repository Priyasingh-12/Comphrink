import React, { useState } from 'react';
import Draggable from 'react-draggable';

import '../App.css';


const Widget = () => {
    const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(530);

    return ( 
        <>
 <Draggable>

<div className="resizable-wrapper">
   <div
     className="resizable-component"
     style={{ width: width + 'px', height: height + 'px' }}
     draggable="true"
     onDrag={e => {
       e.preventDefault();
       const dx = e.clientX - e.target.offsetLeft;
       const dy = e.clientY - e.target.offsetTop;
       document.onmousemove = e => {
         e.preventDefault();
         const newWidth = e.clientX - dx;
         const newHeight = e.clientY - dy;
         setWidth(newWidth);
         setHeight(newHeight);
       };
       document.onmouseup = () => {
         document.onmousemove = null;
         document.onmouseup = null;
       };
     }}
   >     
   <h3>Component 1</h3>
      <img
       src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       alt="Image3" height="520px" width="290px"
     /></div>
   <div className="resize-handle" style={{ top: '-3px', left: '-3px' }}></div>
   <div className="resize-handle" style={{ top: '-3px', right: '-3px' }}></div>
   <div className="resize-handle" style={{ bottom: '-3px', left: '-3px' }}></div>
   <div className="resize-handle" style={{ bottom: '-3px', right: '-3px' }}></div>
   <div className="resize-handle" style={{ top: '-3px', left: 'calc(50% - 3px)' }}></div>
   <div className="resize-handle" style={{ bottom: '-3px', left: 'calc(50% - 3px)' }}></div>
   <div className="resize-handle" style={{ left: '-3px', top: 'calc(50% - 3px)' }}></div>
   <div className="resize-handle" style={{ right: '-3px', top: 'calc(50% - 3px)' }}></div>
 </div>
</Draggable>
        </>
     );
}
 
export default Widget;
import React from "react";
import SampleSplitter from "./SampleSplitter";
import { useResizable } from "react-resizable-layout";
import { cn } from "../utils/cn";

const Box = () => {
    const {
        isDragging: isTerminalDragging,
        position: terminalH,
        splitterProps: terminalDragBarProps
      } = useResizable({
        axis: "y",
        initial: 150,
        min: 50,
        reverse: true
      });
      const {
        isDragging: isFileDragging,
        position: fileW,
        splitterProps: fileDragBarProps
      } = useResizable({
        axis: "x",
        initial: 250,
        min: 50
      });
      const {
        isDragging: isPluginDragging,
        position: pluginW,
        splitterProps: pluginDragBarProps
      } = useResizable({
        axis: "x",
        initial: 200,
        min: 50,
        reverse: true
      });
    return ( 
        <>
              <div
      className={
        "flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"
      }
    >
          <div className={"flex grow"}>
        <div
          className={cn("shrink-0 contents", isFileDragging && "dragging")}
          style={{ width: fileW }}
        >
          File Tree
        </div>
        <SampleSplitter isDragging={isFileDragging} {...fileDragBarProps} />

        <div className={"flex grow"}>
          <div className={"grow bg-darker contents"}>Editor</div>
          
          <SampleSplitter
            isDragging={isPluginDragging}
            {...pluginDragBarProps}
          />


            <div
            className={cn("shrink-0 contents", isPluginDragging && "dragging")}
            style={{ width: pluginW }}
          >
            Plugin
          </div>
          </div>
      </div>


      {/* ================================================== */}
      <SampleSplitter
        dir={"horizontal"}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      <div
        className={cn(
          "shrink-0 bg-darker contents",
          isTerminalDragging && "dragging"
        )}
        style={{ height: terminalH }}
      >
        Terminal
      </div>

    </div>
        </>
     );
}
 
export default Box;

















import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(500);

  return (
    <>
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
        ></div>
        <div className="resize-handle" style={{ top: '-3px', left: '-3px' }}></div>
        <div className="resize-handle" style={{ top: '-3px', right: '-3px' }}></div>
        <div className="resize-handle" style={{ bottom: '-3px', left: '-3px' }}></div>
        <div className="resize-handle" style={{ bottom: '-3px', right: '-3px' }}></div>
        <div className="resize-handle" style={{ top: '-3px', left: 'calc(50% - 3px)' }}></div>
        <div className="resize-handle" style={{ bottom: '-3px', left: 'calc(50% - 3px)' }}></div>
        <div className="resize-handle" style={{ left: '-3px', top: 'calc(50% - 3px)' }}></div>
        <div className="resize-handle" style={{ right: '-3px', top: 'calc(50% - 3px)' }}></div>
      </div>
    </>
  );
};

export default App;

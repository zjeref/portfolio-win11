import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { MdMinimize } from 'react-icons/md';
import { FiMaximize2 } from 'react-icons/fi';
import Aboutme from './Aboutme';
import Projects from './Project/Projects';

const ModalTemplate = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setOffset({ x: position.x + offset.x, y: position.y + offset.y });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const x = event.clientX - initialPosition.x + offset.x;
      const y = event.clientY - initialPosition.y + offset.y;
      setPosition({ x, y });
    }
  };

  return (
    <div
      className="max-w-8xl bg-white absolute w-11/12 max-h-[90vh] min-h-[80vh] h-full top-16 left-28  select-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="bg-blue-600 text-white flex justify-between text-lg  w-full sticky top-0">
        <div className="ml-2">
          <span>About me</span>
        </div>
        <div className="flex">
          <div className="hover:bg-blue-400 taskbar-icon">
            <MdMinimize />
          </div>
          <div className="hover:bg-blue-400 taskbar-icon">
            <FiMaximize2 />
          </div>
          <div className="hover:bg-red-600 taskbar-icon">
            <RxCross2 />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-full" style={{ height: 'calc(100% - 2rem)' }}>
        {/* <Aboutme/> */}
        <Projects />
      </div>
    </div>
  );
};


export default ModalTemplate;

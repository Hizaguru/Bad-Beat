import React, { useState } from 'react';
import drawingHand from './images/drawing-hands-outs.gif';
import outsToImproveHand from './images/outs-to-improve-hand.gif';

const InitOuts = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="p-4 border-2 border-black mb-4">
        <img src={outsToImproveHand} className="max-w-full h-auto" alt="Outs to Improve Hand" />
      </div>
      <div className="p-4 border-2 border-black">
        <img src={drawingHand} className="max-w-full h-auto" alt="Drawing Hands" />
      </div>
    </div>
  );
};

const Outs = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="py-12">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Show out tables
      </label>

      {isChecked && (
        <div>
          <InitOuts />
        </div>
      )}
    </div>
  );
};

export default Outs;

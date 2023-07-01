import React, { useState } from 'react';
import pokerHandRangeFor6 from './images2/handrange6.png';
import pokerHandRangeFor8 from './images2/handrange8.png';


const HandRangeSixToEight: React.FC = () => {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleChange1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleChange2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  return (
<div className="flex flex-col space-y-2">
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={isChecked1}
      onChange={handleChange1}
    />
    <label>Poker Hand for 8 players</label>
  </div>

  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={isChecked2}
      onChange={handleChange2}
    />
    <label>Poker Hand for 6 players</label>
  </div>



      <div>
        {isChecked1 && <img src={pokerHandRangeFor8} alt="Poker hand chart for 8 players" style={{width:"500px", height:"500px"}} />}
        {isChecked2 && <img src={pokerHandRangeFor6} alt="Poker hand chart for 6 players" style={{width:"500px", height:"500px"}} />}
      </div>
    </div>
  );
};

export default HandRangeSixToEight;

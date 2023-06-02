import React, { useState } from 'react';
import pokerHandRangeFor6 from './images/PokerHandChart-6.png';
import pokerHandRangeFor8 from './images/PokerHandChart-8.png';


const HandRange: React.FC = () => {
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
    <div>
      <input
        type="checkbox"
        checked={isChecked1}
        onChange={handleChange1}
      />
      <label>Poker Hand for 8 players</label>

      <input
        type="checkbox"
        checked={isChecked2}
        onChange={handleChange2}
      />
      <label>Poker Hand for 6 players</label>

      <div>
        {isChecked1 && <img src={pokerHandRangeFor8} alt="Poker hand chart for 8 players" />}
        {isChecked2 && <img src={pokerHandRangeFor6} alt="Poker hand chart for 6 players" />}
      </div>
    </div>
  );
};

export default HandRange;

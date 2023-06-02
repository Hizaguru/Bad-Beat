import React, { useState } from 'react';
import Checkbox from '../PotOdds/Checkbox';
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
    <div className='w-70pct max-w-full'>
      <Checkbox selectedStages={isChecked1} handleStageChange={handleChange1} text='Poker Hand for 8 players'/>
        <Checkbox selectedStages={isChecked2} handleStageChange={handleChange2} text='Poker Hand for 6 players'/>
      <div >
        {isChecked1 && <img className='w-full h-auto' src={pokerHandRangeFor8} alt="Poker hand chart for 8 players" />}
        {isChecked2 && <img className='w-full h-auto' src={pokerHandRangeFor6} alt="Poker hand chart for 6 players" />}
      </div>
    </div>
  );
};

export default HandRange;

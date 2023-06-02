import { useEffect, useState } from 'react';
import { calculatePotOdds } from './utils';

const PotOddsCalculator = () => {
  const [potSize, setPotSize] = useState('');
  const [callSize, setCallSize] = useState('');
  const [potOdds, setPotOdds] = useState('');



  
  useEffect(() => {
    handleCalculatePotOdds()},[potSize, callSize]);

  const handleCalculatePotOdds = () => {
    if (potSize && callSize) {
      const potSizeFloat = parseFloat(potSize);
      const callSizeFloat = parseFloat(callSize);

      const potOddsValue = calculatePotOdds(potSizeFloat, callSizeFloat);
      setPotOdds(potOddsValue.toFixed(2));
    }
  };

  return (
    <form>
      <div className='py-2'>
      <label>
        Size of the pot:
        <input
          type="text"
          value={potSize}
          onChange={(e) => setPotSize(e.target.value)}
          className="bg-gray-300"
        />
      </label>
      </div>
      <div>
      <label>
        Size of the call:
        <input
          type="text"
          value={callSize}
          onChange={(e) => setCallSize(e.target.value)}
          className="bg-gray-300"
        />
      </label>
      </div>
      {potOdds ? (
        <div>
          Pot Odds: {parseFloat(potOdds) * 100}%
        </div>
      ) : (
        <div>
          Pot Odds: 0%
        </div>
      )}
    </form>
  );
};

export default PotOddsCalculator;

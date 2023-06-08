
import React, { useEffect, useState } from 'react';
import { calculatePotOdds } from './utils';

const PotOddsCalculator = () => {
  const [potSize, setPotSize] = useState('');
  const [callSize, setCallSize] = useState('');
  const [potOdds, setPotOdds] = useState('');
  const [winOdds, setWinOdds] = useState('')
  const [multiplyByFour, setMultiplyByFour] = useState(false);
  const [multiplyByTwoPointTwo, setMultiplyByTwoPointTwo] = useState(false);

  
  useEffect(() => {
    handleCalculatePotOdds()},[potSize, callSize, potOdds]);

  const handleCalculatePotOdds = () => {
    if (potSize && callSize) {
      const potSizeFloat = parseFloat(potSize);
      const callSizeFloat = parseFloat(callSize);

      const potOddsValue = calculatePotOdds(potSizeFloat, callSizeFloat);
      setPotOdds(potOddsValue.toFixed(2));
    }
  };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setWinOdds(event.target.value);
  };
  
  const handleCheckboxOneChange = () => {
    setMultiplyByFour(!multiplyByFour);
  };

  const handleCheckboxTwoChange = () => {
    setMultiplyByTwoPointTwo(!multiplyByTwoPointTwo);
  };

  const calculateResult = () => {
    let result = parseFloat(winOdds);
    if (multiplyByFour) {
      result *= 4;
    }
    if (multiplyByTwoPointTwo) {
      result *= 2.2;
    }
    return result;
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
      {potOdds  ? (
        <div>
          Pot Odds: {parseFloat(potOdds) * 100}%
        </div>
      ) : (
        <div>
          Pot Odds: 0%
        </div>
      )}
        <div>
      <input type="text" value={winOdds} onChange={handleChange} />
      <div>
        <label>
          <input
            type="checkbox"
            checked={multiplyByFour}
            onChange={handleCheckboxOneChange}
          />
         Flop
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={multiplyByTwoPointTwo}
            onChange={handleCheckboxTwoChange}
          />
          River
        </label>
      </div>
      <div>Result: {calculateResult()}</div>
       <input type="text" value={winOdds} onChange={handleChange} />
    </div>
    </form>
  );
};

export default PotOddsCalculator;

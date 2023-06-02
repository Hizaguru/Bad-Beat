import { useState } from 'react';
import Checkboxes from './Checkbox';
import { calculatePotOdds } from './utils';

const PotOddsCalculator = () => {
  const [potSize, setPotSize] = useState('');
  const [callSize, setCallSize] = useState('');
  const [potOdds, setPotOdds] = useState('');
  const [selectedStages, setSelectedStages] = useState<string[]>([]);


  const handleStageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stage = e.target.value;
    const isChecked = e.target.checked;
  
    if (isChecked) {
      setSelectedStages((prevSelectedStages) => [...prevSelectedStages, stage]);
    } else {
      setSelectedStages((prevSelectedStages) =>
        prevSelectedStages.filter((selectedStage) => selectedStage !== stage)
      );
    }
  };
  

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
      <div>
      <Checkboxes selectedStages={selectedStages} handleStageChange={handleStageChange} />
      </div>
      <div>
      <label>
        Size of the pot:
        <input
          type="text"
          value={potSize}
          onChange={(e) => setPotSize(e.target.value)}
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
        />
      </label>
      </div>
      <div></div>
      <button type="button" onClick={handleCalculatePotOdds}>
        Calculate Pot Odds
      </button>
      {potOdds && (
        <div>
          Pot Odds: {potOdds}
        </div>
      )}
    </form>
  );
};

export default PotOddsCalculator;

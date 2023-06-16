import React, { useEffect, useState } from "react";
import Outs from "../Outs/Outs";
import { calculatePotOdds } from "./utils";

const PotOddsCalculator = () => {
  const [potSize, setPotSize] = useState("");
  const [callSize, setCallSize] = useState("");
  const [potOdds, setPotOdds] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    handleCalculatePotOdds();
  }, [potSize, callSize, potOdds]);

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
      <div className="py-2 flex flex-col gap-4">
        <label>
          Size of the pot:
          <input
            type="text"
            value={potSize}
            onChange={(e) => setPotSize(e.target.value)}
            className="bg-gray-300 ml-2"
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
            className="bg-gray-300 ml-2"
          />
        </label>
      </div>
      {potOdds ? (
        <div className="py-8">
          <div>Pot Odds: {parseFloat(potOdds) * 100}%</div>
          <div>Pot Odds: {(100 / (parseFloat(potOdds) * 100))-1} to 1</div>
        </div>
      ) : (
        <div>Pot Odds: 0%</div>
      )}
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
            <Outs />
          </div>
        )}
    </div>
    </form>

  );
};

export default PotOddsCalculator;

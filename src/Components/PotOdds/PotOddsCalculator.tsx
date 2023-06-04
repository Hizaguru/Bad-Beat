import { useEffect, useState } from "react";
import { calculatePotOdds } from "./utils";

const PotOddsCalculator = () => {
  const [bigBlind, setBigBlind] = useState("");
  const [potSize, setPotSize] = useState("");
  const [callSize, setCallSize] = useState("");
  const [raiseSize, setRaiseSize] = useState("");
  const [potOdds, setPotOdds] = useState("");

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
          Size of the BB:
          <input
            type="text"
            value={bigBlind}
            onChange={(e) => setBigBlind(e.target.value)}
            className="bg-gray-300 ml-2"
          />
        </label>
        <label>
          Size of the pot:
          <input
            type="text"
            value={potSize}
            onChange={(e) => setPotSize(e.target.value)}
            className="bg-gray-300 ml-2"
          />
        </label>
        <label>
          Size of the Raise:
          <input
            type="text"
            value={raiseSize}
            onChange={(e) => setRaiseSize(e.target.value)}
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
        <div>
          <div>Pot Odds: {parseFloat(potOdds) * 100}%</div>
          <div>Raise: {parseFloat(raiseSize)}</div>
          <div>Big blind: {parseFloat(bigBlind)}</div>
          <div>Small blind: {parseFloat(bigBlind) / 2}</div>
          <div>Final pot size: to be implemented</div>
        </div>
      ) : (
        <div>Pot Odds: 0%</div>
      )}
    </form>
  );
};

export default PotOddsCalculator;


const Checkboxes = ({ selectedStages, handleStageChange }:any) => {
    return (
      <div>
        <label>
          Pre-flop
          <input
            type="checkbox"
            value="pre-flop"
            checked={selectedStages.includes('pre-flop')}
            onChange={handleStageChange}
          />
        </label>
        <label>
          Flop
          <input
            type="checkbox"
            value="flop"
            checked={selectedStages.includes('flop')}
            onChange={handleStageChange}
          />
        </label>
        <label>
          River
          <input
            type="checkbox"
            value="river"
            checked={selectedStages.includes('river')}
            onChange={handleStageChange}
          />
        </label>
        <label>
          Turn
          <input
            type="checkbox"
            value="turn"
            checked={selectedStages.includes('turn')}
            onChange={handleStageChange}
          />
        </label>
      </div>
    );
  };
  
  export default Checkboxes;
  
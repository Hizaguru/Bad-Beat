
const Checkbox = ({ selectedStages, handleStageChange, text }:any) => {
    return (
      <div>
        <label className="mr-2">
          {text}
        </label>
        <input
            type="checkbox"
            checked={selectedStages}
            onChange={handleStageChange}
          />
      </div>
    );
  };
  
  export default Checkbox;
  
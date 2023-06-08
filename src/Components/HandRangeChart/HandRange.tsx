import React, { useState } from 'react';
import Checkbox from '../PotOdds/Checkbox';
import utg from './images/UTG.png';
import utg1 from './images/UTG1.png';
import utg2 from './images/UTG2.png';


const HandRange: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'UTG', checked: true, imageSrc: utg },
    { id: 2, label: 'UTG+1', checked: false, imageSrc: utg1 },
    { id: 3, label: 'UTG+2', checked: false, imageSrc: utg2 },
  ]);
  
  const handleStageChange = (checkboxId:number) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: checkbox.id === checkboxId,
    }));
  
    setCheckboxes(updatedCheckboxes);
  };

  return (
  <div className='w-70pct max-w-full'>
  <div>
    {checkboxes.map((checkbox) => (
      <Checkbox
        key={checkbox.id}
        selectedStages={checkbox.checked}
        handleStageChange={() => handleStageChange(checkbox.id)}
        text={checkbox.label}
      />
    ))}
  </div>
  <div>
    <div>
      {checkboxes.map((checkbox) => checkbox.checked && (
        <img
          key={checkbox.id}
          className="w-full h-auto"
          src={checkbox.imageSrc}
          alt={checkbox.label}
        />
      ))}
    </div>
  </div>
</div>
);
};

export default HandRange;

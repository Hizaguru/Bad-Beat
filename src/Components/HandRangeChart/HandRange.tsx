import React, { useState } from 'react';
import Checkbox from '../PotOdds/Checkbox';
import utg from './images/UTG.png';
import utg1 from './images/UTG1.png';
import utg2 from './images/UTG2.png';
import lojack from './images/LJ.png';
import hiJack from './images/HJ.png';
import smallBlind from './images/SB.png';
import btn from './images/BTN.png';
import cutoff from './images/CO.png';


const HandRange: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'UTG', checked: true, imageSrc: utg },
    { id: 2, label: 'UTG+1', checked: false, imageSrc: utg1 },
    { id: 3, label: 'UTG+2', checked: false, imageSrc: utg2 },
    { id: 4, label: 'LoJack', checked: false, imageSrc: lojack },
    { id: 5, label: 'HiJack', checked: false, imageSrc: hiJack },
    { id: 6, label: 'CO', checked: false, imageSrc: cutoff },
    { id: 7, label: 'BTN', checked: false, imageSrc: btn },
    { id: 8, label: 'SB', checked: false, imageSrc: smallBlind },
  ]);
  
  const handleStageChange = (checkboxId:number) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: checkbox.id === checkboxId,
    }));
  
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="w-70pct max-w-full">
    <div className="grid grid-cols-4 gap-4 flex items-center">
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
          className="w-full h-auto py-12"
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

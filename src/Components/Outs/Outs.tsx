import React from 'react'
import drawingHand from './images/drawing-hands-outs.gif'
import outsToImproveHand from './images/outs-to-improve-hand.gif'


const Outs = () => {

  return (
    <div className="flex justify-center items-center flex-col">
        <div className="p-4 border-2 border-black mb-4">
            <img src={outsToImproveHand} className="max-w-full h-auto" />
        </div>
        <div className="p-4 border-2 border-black">
            <img src={drawingHand} className="max-w-full h-auto" />
        </div>
    </div>
  )
}

export default Outs
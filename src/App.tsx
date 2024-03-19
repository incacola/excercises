import React, { useState } from 'react';

function App() {
  let [verMas, setVerMas]= useState(false);

  return (
    <div className="px-4 py-4 App">
      <p>
        "Can you take this to Sirius for me?" he said, picking up his letter. "Hang on ... I just want to finish it." He unfolded the parchment and hastily added a postscript. 
        {verMas ? '' : <button className='text-blue-400 text-serif' onClick={()=>{setVerMas(!verMas)}}>...ver mas</button>}
        <span className={'transition-all duration-1000 '+ (verMas ? 'opacity-100': 'opacity-0')}>{verMas && `If you want to contact me, I'll be at my friend Ron Weasley's for the rest of the summer. His dad's got us tickets for the Quidditch World Cup! The letter finished, he tied it to Hedwig's leg; she kept unusually still, as though determined to show him how a real post owl should behave. "I ll be at Ron's when you get back, all right?" Harry told her. She nipped his finger affectionately, then, with a soft swooshing noise, spread her enormous wings and soared out of the open window.`}</span>
        {verMas ? <button className='text-blue-400 text-serif' onClick={()=>{setVerMas(!verMas)}}>ver menos</button>:'' }
      </p>
    </div>
  );
}

export default App;

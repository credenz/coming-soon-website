import React from 'react';
import { Wave, Random } from 'react-animated-text';

const exampleStyle = {
    fontSize:"90px", display:"flex", justifyContent:"center"
  }

export const Random1 = () => (

    <div style={exampleStyle}>
      <Random
        text="Coming Soon!"
        effect="jump"
        effectChange={0.8}
        effectDuration={0.8}
      />
    </div>
  )
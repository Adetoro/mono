import React from 'react';

import BankList from './BankList';
import './Banks.css';

const Banks = ({banklist}) => {
  
  return (
    <div className="Banks-container">
      <BankList banklist={banklist}/>
    </div>
  );
}


export default Banks;
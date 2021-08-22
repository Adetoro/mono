import React from 'react';
import Accordion from '../Accordions/Accordion';


const BankList = ({banklist}) => {
  
    return(
        <div>
           { 
                banklist.map((bank, i) => {
                        return (<Accordion 
                            key={i} 
                            id={banklist[i].id} 
                            bankname={banklist[i].name} 
                            banklogo={banklist[i].logo} 
                        />)
                })
            }
    
        </div>
    );

}


export default BankList;
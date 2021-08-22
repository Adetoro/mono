import React, {Component} from 'react';
import AccordionButton from './AccordionButton/AccordionButton';
import './Accordion.css';


class Accordion extends Component{
    constructor(){
        super();
        this.state = {
          
        }
      }

   render(){
    const  { bankname, banklogo } = this.props;

    return (
            <div>
                <details className="Accordion-container">
                    <summary>
                        <div className="Accordion-logo"><img src={process.env.PUBLIC_URL + `${banklogo}`} alt={bankname}/></div>
                        <div className="Accordion-label">{bankname}</div>
                    </summary>
                    <div className="Accordion-content">
                        <p className="Accordion-content-title" >Floof will be able to access your:</p>
                        <div className="Accordion-content-list">
                            <ul >
                                <li>Account holder name</li>
                                <li>Account type</li>
                                <li>Account transaction history</li>
                                <li>Account  balance</li>
                            </ul>
                            <div className="Accordion-button">
                            <AccordionButton/>
                            </div>
                        </div>
                    </div>
                </details>
                
            </div>
        )
    }
}

export default Accordion;



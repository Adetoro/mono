import './AccordionButton.css';

function AccordionButton(){
    return(
        <div>
            <button className="tooltip">
                More info 
                <span className="tooltipbody">
                    <div className="tooltiptitle">Statements</div>
                    <div className="tooltiptext">
                        <p>Send your statements to your favourite apps with Mono. Your information is encrypted using bank grade security.</p> 
                        
                        <p>Mono will never make your login credentials available to Partners.</p>
                    </div>
                </span>
            </button>
        </div>
    )
}

export default AccordionButton;
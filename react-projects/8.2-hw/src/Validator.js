// import React from 'react'
import React, { useState, useEffect } from 'react';
import Validcard from './components/Validcard';




 function Validator() {
  let [cardNumber, setCardNumber] = useState('');
  let [isValid, setIsValid] = useState(false);
      
    useEffect(() => {
      setIsValid(Validcard(cardNumber));
        }, [cardNumber]);

        return (
          <div>
            <form>
              <label>
                Credit Card
          <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
            <p>{isValid ? 'Card is valid' : 'Card is not valid'}</p> 
            </label> 
            <label>
              <input type="submit" value="Submit"/>
            </label>
           
            </form>
          </div>
        );
      }
    
    

export default Validator
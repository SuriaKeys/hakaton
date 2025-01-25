
import React from 'react';

const CurrencyInput = ({ amount, currency, currencies, onAmountChange, onCurrencyChange }) => {
  return (
    <div>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => onAmountChange(e.target.value)} 
      />
      <select 
        value={currency} 
        onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;  

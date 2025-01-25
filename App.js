import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);

  useEffect(() => {
    if (rates) {
      handleAmount1Change(amount1);  
    }
  }, [rates, amount1]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div className="container">
      <h1>Обмінюй зелені у нас🤍</h1>

      
      <div className="input-group">
        <input
          type="number"
          value={amount1}
          onChange={(e) => handleAmount1Change(e.target.value)}
          placeholder="Закинь капусту"
        />
        <select
          value={currency1}
          onChange={(e) => handleCurrency1Change(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      
      <div className="input-group">
        <input
          type="number"
          value={amount2}
          onChange={(e) => handleAmount2Change(e.target.value)}
          placeholder="Сума після конвертації"
        />
        <select
          value={currency2}
          onChange={(e) => handleCurrency2Change(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <button onClick={() => handleAmount1Change(amount1)}>Конвертувати</button>
    </div>
  );
}

export default App;

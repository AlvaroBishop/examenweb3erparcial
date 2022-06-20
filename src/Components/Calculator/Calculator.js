import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
    const [result, setResult] = useState(0);
    
    const handleClick = () => {
        const n1 = Number(document.querySelector('input[name="n1"]').value);
        const n2 = Number(document.querySelector('input[name="n2"]').value);

        const operacion = document.querySelector('select option:checked').value
        switch(operacion)
        {
            case 'suma': setResult((n1 + n2).toFixed(2));
                break;
            case 'resta': setResult((n1 - n2).toFixed(2));
                break;
            case 'multiplicacion': setResult((n1 * n2).toFixed(2));
                break;
            case 'division': setResult((n1 / n2).toFixed(2));
                break;
            default: 
                break;
        }
    }
    return (
    <div className='Calculator'>
        <h1>Calculadora</h1>
        <div className='inputs'>
            <input type='number' name='n1' placeholder='0'/>
            <select>
                <option value='suma' defaultChecked>+</option>
                <option value='resta'>-</option>
                <option value='multiplicacion'>x</option>
                <option value='division'>/</option>
            </select>
            <input type='number' name='n2' placeholder='0'/>
        </div>
        <h2>Resultado</h2>
        <h3 className='resultado'>{result}</h3> 
        <button onClick={handleClick}>Calcular</button>
    </div>
  )
}

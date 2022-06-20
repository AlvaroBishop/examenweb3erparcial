import './Numbers.css'
import React, { useState } from 'react'
let arrLength = 0;
export default function Numbers() {
    const [list, setList] = useState([]);
    const handleChange = e => {
        
        const valueArr = e.target.value.split('');
        if(valueArr.length < arrLength )
            cleanHTML();
        arrLength = valueArr.length
        const numbers = valueArr.map(n => parseInt(n));
        const addition = numbers.reduce((p, c) => p + c, 0);
       
        (list.length === 0 ) ? setList([addition]) : setList([...list, addition])
        
    }

    const cleanHTML = () => {
        console.log('clean')
        const ul = document.querySelector('ul');
        ul.removeChild(ul.lastChild)
        if(ul.firstChild)
            ul.removeChild(ul.lastChild)
    }

  return (
    <div className='Numbers'>
        <label>Numbers</label>
        <input type={'text'} placeholder={0} onChange={handleChange}/>
        <ul>
            {list.map((n, key) => <li key={key}>{n}</li>)}
        </ul>
    </div>
  )
}

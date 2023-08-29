import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, totalExpenses } = useContext(AppContext);
    const [cost, setCost] = useState('');

    if(cost > 20000){
        alert("The budget cannot exceed 20000");
        setCost("");
        return;
    }

    if(cost < totalExpenses){
        alert("The budget cannot be hgigher than the spent amount"+ totalExpenses)
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                        required='required'
                        type='number'
                        id='cost'
                        placeholder = { budget }
                        value={cost}
                        step = '10'
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;

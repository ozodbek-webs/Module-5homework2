import React from 'react';

const Input = ({type , placeholder ,val,setVal}) => {
    return (
        <>
            
            <input min={0} type={type} id="form12" className='form-control w-50 mx-auto p-3 my-2' value={val} placeholder={placeholder} onChange={(e)=>{setVal(e.target.value)}} />
        </>
    );
};

export default Input;
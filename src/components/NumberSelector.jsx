

import styled from 'styled-components'
import { useState } from 'react';

const NumberSelector = ({setError,error,SelectedNumber,setSelectedNumber}) => {
    const arrNum=[1,2,3,4,5,6];

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }
    
  return (
    <NumberSelectorContainer> 
       <p className='error'>{error}</p>
        <div className='flex'>
               { arrNum.map( (value,i)=>(
            <Box key={i} 
              isSelected={value===SelectedNumber}         
             onClick={()=>numberSelectorHandler(value)}
              >{value}</Box>))}      {/*js loop to create boxes */ }

 

        </div>
        <p>Selected Number </p>
         
    </NumberSelectorContainer>
  )
}
{/*isselected is used as a props here */}
export default NumberSelector

const NumberSelectorContainer=styled.div`
 .flex{
    display:flex;
    gap:24px;
 }
 p{
    font-size: 24px;
    font-weight: 700;
    text-align: right;
 }
 .error{
  color: red;
 }
`




const Box=styled.div`
    display:grid;
    place-items: center;
    width:72px;
    height:72px;
    font-size: 24px;
    font-weight: 700;
    background-color: white;
    color:black;
    border:2px solid black;
    cursor: pointer;
    background-color: ${(props)=> props.isSelected? "black":"white"};
    color:${(props)=> props.isSelected? "white":"black"};
`


import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'


const RollDice = ({currentDice,roledice}) => {
 

   
  return (
     <DiceContainer>

        <div className='dice' onClick={roledice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt='dice image '  />
        </div>
        <p>Click on the dice to roll</p>
     </DiceContainer>
  )
}

export default RollDice

const DiceContainer=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;

    }
`

import { main, style } from 'framer-motion/client'
import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import RulesContainer from './RulesContainer'

const GamePlay = () => {
    const [SelectedNumber, setSelectedNumber] = useState();
    const[currentDice,setcurrentDice] =useState(1); 
    const [Score,setScore]=useState(0);
    const [error,setError]=useState("");
    const [showRules,setShowRules]=useState(false);

    const generateRandomNumber=(min, max)=>{
        return Math.floor(Math.random()*(max-min+1) +min);
    }
   const roledice=()=>{

    if(!SelectedNumber){

        setError("You have not selected any number ")
     return;
    } ;                                                  {/* return if no number is selcted and show error*/}
    setError("");
    const randomNumber=generateRandomNumber(1,6);
    setcurrentDice((prev)=>randomNumber);

    if(SelectedNumber===randomNumber){
        setScore((prev)=>prev+randomNumber)
    }
    else{
        setScore((prev)=>prev-1);
    }

    setSelectedNumber(undefined);
   }


       
    return (
    <MainContainer>
        <div className='top_part'>
           <TotalScore Score={Score}/>
          <NumberSelector SelectedNumber={SelectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>  {/* passing as props ???*/}
        </div>
        <RollDice currentDice={currentDice} roledice={roledice}/>
        <div className='btns'>
             <OutlineButton onClick={()=>setScore(0)}>Reset</OutlineButton>
             <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
        {showRules && <RulesContainer/>}
    </MainContainer>   
  )
}

export default GamePlay

const MainContainer=styled.main`
padding-top: 30px;

    .top_part{
     display:flex;
     justify-content:space-around;
     align-items:end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:5px;
        padding-top: 10px;
    }
`
const Button=styled.button`
    background-color: black;
    color:white;
    padding: 10px 18px;
    min-width: 220px;
    border-radius:5px;
    border:none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    &:hover{
          background-color:white;
          border: 1px solid black;
          color: black;
          transition: 0.3s background ease-in;

          
    }
`
const OutlineButton=styled(Button)`
background-color: white;
color:black;
border:1px solid black;
    &:hover{
          background-color:black;
          border: 1px solid transparent;
          color: white;
          

          
    }
`
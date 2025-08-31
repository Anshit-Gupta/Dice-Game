import React from 'react'
import styled from 'styled-components'

const RulesContainer = () => {
  return (
    <Container>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>1.Select any number</p>
            <p>2.Click on the dice to roll</p>
            <p>3.After clicking,if number rolled is equal to selected number ,you gain points</p>
            <p>4.If not, you lose 1 point</p>
        </div>
    </Container>
  )
}

export default RulesContainer

const Container=styled.div`
margin-left: 545px;
margin-top: 20px;
height:180px;
width: 380px;
border-radius: 10px;
    background-color:#FBF1F1;
    padding: 20px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`

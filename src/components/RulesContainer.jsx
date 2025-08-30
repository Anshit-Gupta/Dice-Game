import React from 'react'
import styled from 'styled-components'

const RulesContainer = () => {
  return (
    <Container>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>1.Select any number</p>
            <p>2.Click on dice</p>
            <p>3.After click,if selected number is equal to dice number you will gain points</p>
            <p>4.If not equal you will lose 1 point</p>
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
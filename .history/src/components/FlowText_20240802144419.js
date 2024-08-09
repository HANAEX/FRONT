import React from 'react'
import styled, {keyframes}from "styled-components";


const FlowText= () => {
  return (
    <TextFlow >
      aslfas;  lf;aljdf;la  jsl;dfja;slfjals;kdfja;lsdfkjal;sfk
    </TextFlow>
  )
}

export default FlowText

const TextFlowAni = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`
const TextFlow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  animation: ${TextFlowAni} 5s linear infinite;
`
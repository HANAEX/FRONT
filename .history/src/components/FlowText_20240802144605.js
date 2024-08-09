import React from 'react'
import styled, {keyframes}from "styled-components";


const FlowText= () => {
  return (
    <TextFlow className='w-[1100px]'>
      코스피 +10% 나스닥 -10% 
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
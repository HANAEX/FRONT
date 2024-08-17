import React from 'react'
import BoardInput from '../components/BoardInput'
import NewBoard from '../components/NewBoard'

const BoardPageDetail = () => {
  return (
    <div name="container">
      <BoardInput />
      <NewBoard boardtext={"잘먹고갑니다."}/>
    </div>
  )
}

export default BoardPageDetail

// BoardPageDetail.js
import React, { useState } from 'react';
import BoardInput from '../components/BoardInput';
import NewBoard from '../components/NewBoard';

const BoardPageDetail = () => {
  const [boards, setBoards] = useState([]);

  const handlePost = (content) => {
    setBoards(prevBoards => [...prevBoards, content]);
  };

  return (
    <div name="container">
      <BoardInput onPost={handlePost} />
      {boards.map((boardtext, index) => (
        <NewBoard key={index} boardtext={boardtext} />
      ))}
    </div>
  );
};

export default BoardPageDetail;

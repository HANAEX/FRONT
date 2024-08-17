// BoardPageDetail.js
import React, { useState } from "react";
import BoardInput from "../components/BoardInput";
import { Image, Text } from '@chakra-ui/react';
import NewBoard from "../components/NewBoard";

const BoardPageDetail = () => {
  const [boards, setBoards] = useState([]);

  const handlePost = (content) => {
    setBoards((prevBoards) => [...prevBoards, content]);
  };

  return (
    <div className="w-[960px] bg-slate-500 flex py-1 px-10 mt-10">
      <div className='w-72 bg-slate-200'>
        <Image src='/image/board_image.png'/>
        <Text>원달러 투자자들 모여라</Text>
        <Text>831명 활동중</Text>
        <div className='p-5 flex bg-slate-400'>새글쓰기</div>
      </div>
      <div name="container" className='w-full px-2'>
        <BoardInput onPost={handlePost} />
        {boards.map((boardtext, index) => (
          <NewBoard key={index} boardtext={boardtext} />
        ))}
      </div>
    </div>
  );
};

export default BoardPageDetail;

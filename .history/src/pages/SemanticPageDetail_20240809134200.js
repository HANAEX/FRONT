import React from "react";
import { Image, Text } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";
const SemanticPageDetail = () => {
  return (
    <div className="w-[1140px] bg-slate-500 flex flex-col py-1 px-10">
      {/* 상단 컴포넌트 */}
      <div className="w-full flex justify-center py-5 bg-slate-50">
        <div className='flex flex-col items-center'>
          <div className='flex jus' >
            <Text>원달러</Text>
            <Image
              boxSize="34px"
              src='/image/america_flag.png' 
            />
          </div>
          <Image src="/image/smile.png" boxSize="180px" alt="smile" />
            <Text fontSize="1xl">매우긍정적</Text>
          <ProgressBar
            completed={80}
            width='400px'
            height="35px"
            bgColor="#1A6AEB"
            className="py-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SemanticPageDetail;

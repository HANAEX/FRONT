import React from "react";
import { Image, Text } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";
const SemanticPageDetail = () => {
  return (
    <div className="w-[1140px] bg-slate-500 flex flex-col py-1 px-10">
      {/* 상단 컴포넌트 */}
      <div className="w-full flex justify-center bg-slate-50">
        <div>
          <Image src="/image/smile.png" alt="smile" />
            <Text fontSize="1xl">매우긍정적</Text>
          <ProgressBar
            completed={80}
            height="30px"
            bgColor="#1A6AEB"
            className="py-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SemanticPageDetail;

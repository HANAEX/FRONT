import React from "react";
import { Image, Text } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import WordCloudComponent from '../components/CloudChart';
const SemanticPageDetail = () => {
  return (
    <>
      <div className="w-[1140px] bg-slate-500 flex flex-col py-1 px-10">
        {/* 상단 컴포넌트 */}
        <div className="w-full flex justify-center py-5 rounded-2xl bg-slate-50">
          <div className="flex flex-col">
            <div className="flex">
              <Text>원달러</Text>
              <Image boxSize="34px" src="/image/america_flag.png" />
            </div>
            <div className="flex flex-col items-center">
              <Image src="/image/smile.png" boxSize="180px" alt="smile" />
              <Text fontSize="1xl">매우긍정적</Text>
            </div>
            <ProgressBar
              completed={80}
              width="400px"
              height="35px"
              bgColor="#1A6AEB"
              className="py-5"
            />
            <div className="flex justify-between">
              <div className="flex items-end">
                <Text fontSize="1xl">긍정</Text>
                <Text fontSize="2xl" as={"b"}>
                  81.9%
                </Text>
              </div>
              <div className="flex items-end">
                <Text fontSize="2xl" as={"b"}>
                  81.9%
                </Text>
                <Text fontSize="1xl">부정</Text>
              </div>
            </div>
          </div>
        </div>
        <Text fontSize={'2xl'}>핫 카워드</Text>
        <WordCloudComponent />
      </div>
    </>
  );
};

export default SemanticPageDetail;

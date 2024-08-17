import React, { useState, useEffect }from "react";
import { Image, Text } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import WordCloudComponent from '../components/CloudChart';
import axios from 'axios'
import { useParams } from 'react-router';
import NewsBar from '../components/NewsBar';

const SemanticPageDetail = () => {
  const [ consumData, setConsumData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    const getUseHistory = async () => {
      try {
        // const result = await axios.get("https://a8068697-21bf-44f7-bf02-fccbc7115c44.mock.pstmn.io//hana/news");
        // console.log(result.data);
        // const news = result.data.data.filter(item => item.state === id)
        // console.log(news);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(true);
      }
    }
    getUseHistory();
  }, [])
  if (!isLoading) return <div>로딩중입니다.</div>

  return (
    <>
      <div className="w-[960px] bg-slate-500 flex flex-col py-1 px-10 mt-10">
        {/* 상단 컴포넌트 */}
        <div className="w-full flex justify-center py-5 rounded-2xl bg-slate-50">
          <div className="flex flex-col">
            {/* inner 상단 box */}
            <div className='flex justify-between'>
              <div className="flex h-[34px] items-center">
                <Text className='font-semibold text-lg'>원/달러</Text>
                <Image boxSize="34px" src="/image/america_flag.png" />
              </div>
              <div className="flex flex-col items-center">
                <Image src="/image/smile.png" boxSize="180px" alt="smile" />
                <Text fontSize="1xl">매우긍정적</Text>
              </div>
              <div className='p-10'></div>
            </div>
            {/* progressbar */}
            <ProgressBar
              completed={80}
              width="600px"
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
        <div className='w-full flex justify-center py-5 px-10 rounded-2xl bg-slate-50'>
          <WordCloudComponent />
        </div>
        <Text fontSize={'2xl'}>관련뉴스</Text>
          <NewsBar />
          <NewsBar />
          <NewsBar />
          <NewsBar />
          <NewsBar />
      </div>
    </>
  );
};

export default SemanticPageDetail;

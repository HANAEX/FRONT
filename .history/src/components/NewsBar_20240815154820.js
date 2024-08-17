import React from "react";
import { Text } from "@chakra-ui/react";
const NewsBar = () => {
  return (
    <div className='w-full flex justify-center py-2 px-10 mb-2 rounded-2xl bg-slate-50'>
      <div className="w-full bg-slate-300 flex justify-between items-center gap-3">
        {/* text box */}
        <div name="textbox">
          <div className="flex gap-1">
            <Text className='text-lg '></Text>
            <div>USD/KRW</div>
            <div>호재</div>
          </div>
          <Text className='text-lg'>돌아온 '강달러'...원/달러 환율, 1400원 터치 하나?</Text>
          <Text>
            대외적 요인에 환율 강세 이어질듯 ‘강달러’가 돌아왔다. 24일 원/달러
            환율은 1389원에 마감하면서 1400원대 진입을 눈앞에 두고....
          </Text>
        </div>
        <div className="w-[54px] h-[54px] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default NewsBar;

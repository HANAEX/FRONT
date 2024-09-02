import React from "react";
import { Text } from "@chakra-ui/react";
const NewsBar = ({ state, result, url, title, content, imageUrl }) => {
  function truncateText(text, maxLength = 100) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <div className='w-full flex justify-center py-2 px-10 mb-4 rounded-2xl bg-slate-50'>
      <div className="w-full bg-slate-300 flex justify-between items-center gap-3">
        {/* text box */}
        <div name="textbox">
          <div className="flex gap-1 mt-1">
            <Text className='text-sm font-bold'>{state}</Text>
            <Text className='text-sm font-bold text-red-500'>{result}</Text>
          </div>
          <Text className='text-sm mt-1'>{title}</Text>
          <Text className='text-xs mt-1 text-slate-600'>
          {truncateText(content)}
          </Text>
          <Text className='text-xs mt-1 text-slate-600'>매일경제</Text>
        </div>
        <div className="w-[54px] h-[54px] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default NewsBar;

import React, { useState } from "react";
import { Heading, Image, Text } from "@chakra-ui/react";
import NewsBar from "../components/NewsBar";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const NewsPageDetail = () => {
  const [gpttext, setGptText] = useState(false);
  const [fulltext, setFulltext] = useState(false);

  const handleGpttext = () => {
    setGptText(!gpttext);
  };

  const handleFulltext = () => {
    setFulltext(!fulltext);
  };
  function truncateText(text, maxLength = 500) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }
  const full_text = `이날 원·달러 환율이 상승한 배경에는 스위스 중앙은행의 2회 연속 금리
            인하, 영국 영란은행(BOE)의 완화적 금리 동결 등 미국과의 통화정책
            차별화가 있다.앞서 스위스중앙은행은 이달 20일(현지시간 기준) 정례
            통화정책회의를 통해 기준금리를 1.25%로 25bp 인하한다고 발표했다. 올
            3월에 이어 두 번째로 금리를 내린 것이다. 또한 스위스에 이어 영국도
            8월에 금리를 내릴 것이라는 기대감이 나오고 있다. 중국 위안화와 일본
            엔화도 원화 약세에 영향을 미치고 있다. 최근 중국은 주요 경제
            지표들이 부진해 앞으로 경기 부양을 위해 금리를 내릴 수 있다는 전망이
            나온다. 이에 위안화 약세 압력이 커진 상황이다. 일본 중앙은행도 이달
            열린 통화정책회의에서 기준금리를 0~0.1%로 동결한 후 장기국채 매입
            감액에 대한 계획이나 추가 금리 인상에 대한 제스처가 없다. 이에
            이달까지 10개월 연속 월평균 1300원대를 기록한 원·달러 환율이 당분간
            높은 수준을 유지할 것이라는 분석이 나온다. 박상현 하이투자증권
            연구원은 "올 4월 달러화 강세는 미국 물가 불안과 금리정책
            불확실성으로 촉발됐지만 현재 달러화 강세는 엔화 및 유로화 약세로
            인해 나타나고 있다"면서 "최근 환율 상승 현상은 지난 4월 1400원을
            돌파했던 환율 불안 당시와는 차이가 있다"고 말했다. 그는 "엔화 및
            유로화 추가 약세 시 달러·원 환율의 1400원대 진입을 배제할 수 없고 이
            경우 일시적으로 환율 불안에 따른 금융시장 변동성 역시 확대될 여지가
            있다"고 전했다.`;
  const gpt_text =
    "'강달러'가 돌아왔다. 24일 원/달러 환율은 1389원에 마감하면서 1400원대 진입을 눈앞에 두고 있다. 주요국 통화 약세가 이어지며 당분간 원/달러 환율은 오를 것이라는 관측이 나온다. 전날(24일) 서울 외환시장에서 원/달러 환율은 전 거래일보다 0.7원 오른 1389.0원에 거래가 마감됐다. 원/달러환율은 전 거래일보다 1.7원 오른 1390.0원으로 개장한 뒤 오전 한때 1391.9원까지 상승했으나 점차 상승 폭을 줄였다.";
  return (
    <div className="w-[1000px] bg-slate-500 flex flex-col py-1 px-10 mt-10">
      {/* 헤더라인 */}
      <div className="bg-slate-200 mb-4">
        <Heading size={"lg"}>
          돌아온 '강달러' ...원/달러 환율, 1400원 터치하나?
        </Heading>
        <Text size={"sm"} className="text-slate-700">
          2024년 8월 12일 07:58
        </Text>
      </div>
      <div className="bg-slate-200 mb-4">
        <div>
          <p className="font-semibold">ChatGPT</p>
          <Image src='/image/chat-bot.png'></Image>
        </div>
        <p className="font-semibold">ChatGPT</p>
        <span>
          이 기사를 <span className="font-semibold text-red-500">호재</span>로
          분석했어요
        </span>
      </div>
      {/* 요약box */}
      <div name="gpt-box" className="bg-slate-200 px-6 py-4 rounded-2xl mb-4">
        {gpttext === true ? (
          <Text>{gpt_text}</Text>
        ) : (
          <Text>{truncateText(gpt_text, 100)}</Text>
        )}
        {/* 자세히 보기 box */}
        <div className="flex justify-center items-center mt-2">
          <Text
            name="show-gpttext"
            className="text-slate-700"
            onClick={handleGpttext}
          >
            자세히보기
          </Text>
          {gpttext === true ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
      </div>
      {/* 뉴스 내용 box */}
      <div
        name="content-box"
        className="flex flex-col items-center bg-slate-100 rounded-2xl px-10 py-4"
      >
        <Image src="/image/new_img.png" className="w-[750px] h-[250px]"></Image>
        <div className="my-6">
          {fulltext === true ? (
            <Text name="full-text">{full_text}</Text>
          ) : (
            <Text name="summary-text">{truncateText(full_text)}</Text>
          )}
        </div>
        <div className='flex items-center'>
          <Text name="show-fulltext" onClick={handleFulltext}>
            자세히보기
          </Text>
          {fulltext === true ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
      </div>
      <Text className='text-2xl my-4 font-semibold'>관련뉴스</Text>
      <NewsBar />
      <NewsBar />
      <NewsBar />
      <NewsBar />
      <NewsBar />
    </div>
  );
};

export default NewsPageDetail;

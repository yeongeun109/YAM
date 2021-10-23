import React from "react";
import ChatMessage from "./ChatMessage";

function ChatRoom({ location }) {
  const msgList = [
    {
      type: "message", // 사진, 메시지, 거래 요청
      content: "메시지 내용 1", // 메시지 내용
      time: "오전 10:00", // 메시지 시간
    },
    {
      type: "message", // 사진, 메시지, 거래 요청
      content:
        "가나다가나다가나다가나다가나다가나다가나다다가나다가나다가나다가나다가나다가나다가나다가나다", // 메시지 내용
      time: "오전 10:00", // 메시지 시간
    },
    {
      type: "message", // 사진, 메시지, 거래 요청
      content: "abcd", // 메시지 내용
      time: "오전 10:00", // 메시지 시간
    },
    {
      type: "send", // 사진, 메시지, 거래 요청
      content: "abcd", // 메시지 내용
      time: "오전 10:00", // 메시지 시간
    },
    {
      type: "send", // 사진, 메시지, 거래 요청
      content: "하이루", // 메시지 내용
      time: "오전 10:00", // 메시지 시간
    },
    {
      type: "message", // 사진, 메시지, 거래 요청
      content: `달이 익어가니 서둘러 젊은 피야
        민들레 한 송이 들고
        사랑이 어지러이 떠다니는 밤이야
        날아가 사뿐히 이루렴
        
        팽팽한 어둠 사이로
        떠오르는 기분
        이 거대한 무중력에 혹 휘청해도
        두렵진 않을 거야
        
        푸르른 우리 위로
        커다란 strawberry moon 한 스쿱
        나에게 너를 맡겨볼래 eh-oh
        
        바람을 세로질러
        날아오르는 기분 so cool
        삶이 어떻게 더 완벽해 ooh
        
        다시 마주하기 어려운 행운이야
        온몸에 심장이 뛰어
        Oh 오히려 기꺼이 헤매고픈 밤이야
        너와 길 잃을 수 있다면
        
        맞잡은 서로의 손으로
        출입구를 허문
        이 무한함의 끝과 끝 또 위아래로
        비행을 떠날 거야
        
        푸르른 우리 위로
        커다란 strawberry moon 한 스쿱
        나에게 너를 맡겨볼래 eh-oh
        바람을 세로질러
        날아오르는 기분 so cool
        삶이 어떻게 더 완벽해 ooh
        
        놀라워 이보다
        꿈같은 순간이 또 있을까 (더 있을까)
        아마도 우리가 처음 발견한
        오늘 이 밤의 모든 것, 그 위로 날아
        
        푸르른 우리 위로
        커다란 strawberry moon 한 스쿱
        세상을 가져보니 어때 eh-oh
        
        바람을 세로질러
        날아오르는 기분 so cool
        삶이 어떻게 더 완벽해 ooh`, // 메시지 내용
      time: "오전 10:00", // 메시지 시간
    },
    {
      type: "send", // 사진, 메시지, 거래 요청
      content:
        "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루", // 메시지 내용
      time: "오전 10:00", // 메시지 시간
    },
  ];
  return (
    <div>
      {msgList.map((msg) => (
        <ChatMessage profileImg={location.state.profileImg} msg={msg} />
      ))}
    </div>
  );
}

export default ChatRoom;

"use client";

import Card from "./components/Card/Card";

const Home = () => {
  return (
    <Card>
      <div className="p-2 sm:p-4 md:p-8 lg:p- xl:p-2">
        <div className="flex items-center mb-8 md:mb-12">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-['GmarketSansBold']">
            Personal
          </h1>
          <hr className="flex-1 ml-6 h-0.5 border-t-1 dark:bg-white/10" />
        </div>
        <p className="text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl text-white mb-8 md:mb-12 font-light leading-relaxed">
          안녕하십니까! 끊임 없이 도전하고 항상 무엇이든 궁금해하는 프론트엔드
          개발자 김고성입니다. 프론트엔드 개발자는 사용자와 개발자를
          연결시켜주는 다리와 같은 역할을 한다고 생각합니다. 사용자들과 끊임없는
          소통을 통해 어제의 저보다는 한 발자국 나아가고 싶습니다. 저는 소통과
          협업을 중요시하며, 항상 배움에는 열려있습니다. 질문하기 위해 그리고
          질문하기 위해 공부하는 개발자가 되고 싶습니다. 또한, 저의 장점인 개발
          능력을 이용해 다른 팀원들의 부족한 점을 채워주고 서로 돕고 돕는 관계로
          같이 성장하는 사람이 되고 싶습니다.
        </p>
        <div className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg text-white font-light space-y-3 md:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-['GmarketSansBold'] w-full sm:w-36 md:w-48 mb-1 sm:mb-0">
              Address
            </span>
            <span className="flex-1 font-['GmarketSansLight']">
              서울특별시 성동구 고산자로 2길 65
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-['GmarketSansBold'] w-full sm:w-36 md:w-48 mb-1 sm:mb-0">
              Email
            </span>
            <span className="flex-1 font-['GmarketSansLight']">
              rlarhtjd0123@google.com
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-['GmarketSansBold'] w-full sm:w-36 md:w-48 mb-1 sm:mb-0">
              Age
            </span>
            <span className="flex-1 font-['GmarketSansLight']">
              2000년 10월 22일 (만 23세)
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-['GmarketSansBold'] w-full sm:w-36 md:w-48 mb-1 sm:mb-0">
              MBTI
            </span>
            <span className="flex-1 font-['GmarketSansLight']">ISTJ</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Home;
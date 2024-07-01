"use client";

const IntroducePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 px-4 sm:px-8 md:px-16 lg:px-24 pb-16 sm:pb-32 md:pb-48">
      <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 min-h-lvh rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-2xl border border-opacity-30 border-white mt-24 sm:mt-32 md:mt-48">
        <div>
          <div className="flex items-center mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-['GmarketSansBold']">
              Personal
            </h1>
            <hr className="flex-1 ml-4 h-0.5 border-t-1 dark:bg-white/10" />
          </div>
          <p className="text-md md:text-lg text-white mb-6 font-light leading-relaxed">
            안녕하십니까! 끊임 없이 도전하고 항상 무엇이든 궁금해하는 프론트엔드
            개발자 김고성입니다. 프론트엔드 개발자는 사용자와 개발자를
            연결시켜주는 다리와 같은 역할을 한다고 생각합니다. 사용자들과
            끊임없는 소통을 통해 어제의 저보다는 한 발자국 나아가고 싶습니다.
            저는 소통과 협업을 중요시하며, 항상 배움에는 열려있습니다. 질문하기
            위해 그리고 질문하기 위해 공부하는 개발자가 되고 싶습니다. 또한,
            저의 장점인 개발 능력을 이용해 다른 팀원들의 부족한 점을 채워주고
            서로 돕고 돕는 관계로 같이 성장하는 사람이 되고 싶습니다.
          </p>
          <div className="text-md md:text-lg text-white font-light space-y-4">
            <div className="flex items-center">
              <span className="font-bold w-24">MBTI:</span>
              <span className="flex-1">INFP</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold w-24">Address:</span>
              <span className="flex-1">Seoul, South Korea</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold w-24">Email:</span>
              <span className="flex-1">example@example.com</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold w-24">Age:</span>
              <span className="flex-1">30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducePage;

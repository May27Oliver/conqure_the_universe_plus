import React from "react";
import HomepageHeader from "component/HomepageHeader";
import Footer from "component/Footer";
import Star1 from "image/home_img/star.png";
import Star2 from "image/home_img/star2.png";
import Star3 from "image/home_img/star3.png";
import Fatty from "image/fat.png";
import Rabbit from "image/rabbit.png";
import PatrikStar from "image/OneEye.png";
import StageLeft from "image/home_img/stageB2.png";
import StageMid from "image/home_img/stageR1.png";
import StageRight from "image/home_img/stageY3.png";
import "./index.module.css";

const Homepage: React.FC = (props) => {
  return (
    <div className="Homepage relative z-10">
      <HomepageHeader />
      <div className="HomepageWrap w-full bg-homepage-bg-image bg-homepage-bg-size bg-center-top bg-no-repeat relative z-backLast">
        <div className="HomeContent w-full h-580px pt-32">
          <h2 className="text-white w-full text-center text-3xl font-semibold">
            誰是宇宙大總統
          </h2>
        </div>
        <div
          className="
                    bg-homepage-bg-earth-bottom 
                    bg-homepage-bg-eb-size 
                    bg-no-repeat 
                    lg:bg-earth-bg-position-lg 
                    lg:bg-homepage-bg-lg-eb-size
                    md:bg-earth-bg-position-md 
                    md:bg-homepage-bg-md-eb-size
                    xl:bg-earth-bg-position-xl 
                    xl:bg-homepage-bg-xl-eb-size
                    xs:bg-earth-bg-position-xs 
                    xs:bg-homepage-bg-xs-eb-size
                    relative
                    z-20
                    "
          style={{ paddingBottom: "400px" }}
        >
          <Stage />
          <RankingBoard />
        </div>
        <HomeStars />
      </div>
      <Footer />
    </div>
  );
};

const HomeStars: React.FC = () => {
  return (
    <>
      <img
        className="absolute z-backLayer1 top-3"
        style={{ width: "280%", transformOrigin: "50%" }}
        src={Star1}
        alt="星星"
      />
      <img
        className="absolute z-backLayer2 top-3"
        style={{ width: "280%", transformOrigin: "50%" }}
        src={Star2}
        alt="星星"
      />
      <img
        className="absolute z-backLayer3 top-3"
        style={{ width: "280%", transformOrigin: "50%" }}
        src={Star3}
        alt="星星"
      />
    </>
  );
};

const Stage: React.FC = () => {
  return (
    <>
      <div
        className="WinnerStage w-full flex flex-row justify-center items-end relative z-50"
        style={{ top: "-20rem" }}
      >
        <div className="Winner w-52 relative">
          <div className="Planet-title mb-10">
            <p className="w-full text-center text-white">肥宅星</p>
            <p className="w-full text-center text-white">支持度</p>
          </div>
          <div className="stageText" id="stage2">
            <div className="AlienImg relative">
              <img src={Fatty} alt="外星人" id="roleImg2" />
            </div>
            <div className="StageLeft relative">
              <p className="absolute w-full top-10 text-center">口業橋引路人</p>
              <img src={StageLeft} alt="stage" />
              <p className="w-full text-center absolute bottom-5 text-xl font-semibold">
                2
              </p>
            </div>
          </div>
        </div>
        <div className="Winner w-52 relative">
          <div className="Planet-title mb-10">
            <p className="w-full text-center text-white">兔兔星</p>
            <p className="w-full text-center text-white">支持度</p>
          </div>
          <div className="stageText">
            <div className="AlienImg relative">
              <img src={Rabbit} alt="外星人" id="roleImg1" />
            </div>
            <div className="StageMid relative">
              <p className="absolute w-full top-10 text-center">閃電除除子</p>
              <img src={StageMid} alt="" />
              <p className="w-full text-center absolute bottom-5 text-xl font-semibold">
                1
              </p>
            </div>
          </div>
        </div>
        <div className="Winner w-52 relative">
          <div className="Planet-title mb-10">
            <p className="w-full text-center text-white">派大星</p>
            <p className="w-full text-center text-white">支持度</p>
          </div>
          <div className="stageText" id="stage3">
            <div className="AlienImg relative">
              <img src={PatrikStar} alt="外星人" id="roleImg3" />
            </div>
            <div className="StageRight relative">
              <p className="absolute w-full top-10 text-center">美達</p>
              <img src={StageRight} alt="" />
              <p className="w-full text-center absolute bottom-5 text-xl font-semibold">
                3
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50" style={{ top: "-18rem" }}>
        <h3 className="text-center font-semibold text-xl leading-10">
          《上季總排名》
        </h3>
        <div className="text-center font-semibold text-lg">
          每週將統計個星球支持度，支持度最高之星球候選人即成為宇宙大總統。
        </div>
      </div>
    </>
  );
};

const RankingBoard: React.FC = () => {
  const [page, setPage] = React.useState<"all" | "first" | "second" | "third">(
    "all"
  );
  return (
    <div className="RankingBoard">
      <div className="Ranking-Title">
        <h2
          className="text-3xl text-white bg-rank-title bg-no-repeat text-center bg-center"
          style={{ lineHeight: "6rem" }}
        >
          宇宙排行榜
        </h2>
      </div>
      <div className="w-full text-center text-xl text-white mt-4 font-semibold mb-20">
        2021 / 09 / 13 ~ Now
      </div>
      {/* 頁籤 */}
      <div className="RankBoard w-full flex flex-col items-center">
        <div className="Candidat-Tabs flex flex-row w-rankTable">
          <div
            className="box-border bg-rankForAllColor rounded-tabRadius w-32 h-10 flex items-center justify-center "
            onClick={() => setPage("all")}
          >
            全體排名
          </div>
          <div
            className="box-border bg-rankForThirdColor rounded-tabRadius w-32 h-10 flex items-center justify-center"
            onClick={() => setPage("third")}
          >
            派大星
          </div>
          <div
            className="box-border bg-rankForSecondColor rounded-tabRadius w-32 h-10 flex items-center justify-center"
            onClick={() => setPage("second")}
          >
            肥宅星
          </div>
          <div
            className="box-border bg-rankForFirstColor  rounded-tabRadius w-32 h-10 flex items-center justify-center"
            onClick={() => setPage("first")}
          >
            兔兔星
          </div>
        </div>
        <Boards page={page} />
      </div>
    </div>
  );
};

interface BoardsType {
  page: "all" | "first" | "second" | "third";
}

const getBoardStyle = (page: "all" | "first" | "second" | "third") => {
  switch (page) {
    case "all": {
      return ["bg-rankForAllColor", "bg-rankForAllInnerSection"];
    }
    case "first": {
      return ["bg-rankForFirstColor", "bg-rankForFirstInnerSection"];
    }
    case "second": {
      return ["bg-rankForSecondColor", "bg-rankForSecondInnserSection"];
    }
    case "third": {
      return ["bg-rankForThirdColor", "bg-rankForThirdInnerSection"];
    }
  }
};

const Boards: React.FC<BoardsType> = ({ page }) => {
  const BGstyle = getBoardStyle(page);
  return (
    <div className={`w-rankTable rounded-boardRadius ${BGstyle[0]} p-1 pb-8`}>
      <div className="boardTitleRow h-10 leading-10 flex flex-row justify-evenly mx-10">
        <div className="ranking-title-col">名次</div>
        <div className="ranking-title-col">公民</div>
        <div className="ranking-title-col">支持度</div>
        <div className="ranking-title-col">智慧 / 財富 / 道德</div>
      </div>
      <div
        className={`boarder-row ${BGstyle[1]} mx-10 mb-4 h-12 rounded-rowRadius`}
      ></div>
      <div
        className={`boarder-row ${BGstyle[1]} mx-10 mb-4 h-12 rounded-rowRadius`}
      ></div>
      <div
        className={`boarder-row ${BGstyle[1]} mx-10 mb-4 h-12 rounded-rowRadius`}
      ></div>
      <div
        className={`boarder-row ${BGstyle[1]} mx-10 mb-4 h-12 rounded-rowRadius`}
      ></div>
      <div
        className={`boarder-row ${BGstyle[1]} mx-10 mb-4 h-12 rounded-rowRadius`}
      ></div>
      <div
        className={`boarder-row ${BGstyle[1]} mx-10 mb-4 h-12 rounded-rowRadius`}
      ></div>
    </div>
  );
};
export default Homepage;

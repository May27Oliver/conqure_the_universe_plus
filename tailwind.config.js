module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        rankForAllColor: "#66BAB7",
        rankForAllInnerSection: "#A5DEE4",
        rankForFirstColor: "#F75C2F",
        rankForFirstInnerSection: "#EEA9A9",
        rankForSecondColor: "#2EA9DF",
        rankForSecondInnserSection: "#7DB9DE",
        rankForThirdColor: "#D9AB42",
        rankForThirdInnerSection: "#ECB88A",
      },
      backgroundPosition: {
        "center-top": "center top",
        "earth-bg-position-lg": "center 11%, center 30%",
        "earth-bg-position-md": "center 9.5%, center 35%",
        "earth-bg-position-xl": "center 10%, center 10%",
        "earth-bg-position-xs": "center 6.5%, center bottom",
      },
      borderRadius: {
        tabRadius: "10px 10px 0 0",
        boardRadius: "0 5px 5px 5px",
        rowRadius: "5px",
      },
      backgroundImage: {
        "homepage-logo": "url('/src/image/logo.png')",
        /** 首頁上層背景 */
        "homepage-bg-image": "url('/src/image/home_img/homeBGtop.jpg')",
        /** 首頁星球與底背景 */
        "homepage-bg-earth-bottom":
          "url('/src/image/home_img/homeBGearth.png'),url('/src/image/home_img/homeBGbottom.png')",
        /** 左側獎台 */
        "left-podium-img": "url('/src/image/home_img/stageB2.png')",
        /** 中間獎台 */
        "mid-podium-img": "url('/src/image/home_img/stageR1.png')",
        /** 右側獎台 */
        "right-podium-img": "url('/src/image/home_img/stageY3.png')",
        /** 宇宙排行榜title */
        "rank-title": "url('/src/image/title.png')",
        /** footer*/
        "home-footer": "url('/src/image/home_img/homeFooter.png')",
      },
      backgroundSize: {
        "homepage-bg-size": "100%",
        "homepage-bg-lg-eb-size": "150% 120%",
        "homepage-bg-md-eb-size": "150% 150%",
        "homepage-bg-xl-eb-size": "130% 100%",
        "homepage-bg-xs-eb-size": "150% 300%",
      },
      height: {
        rankTable: "300px",
        "580px": "580px",
        "1300px": "1300px",
      },
      zIndex: {
        backLayer1: "-200",
        backLayer2: "-300",
        backLayer3: "-400",
        backLast: "-999",
      },
      width: {
        rankTable: "800px",
      },
      marginBottom: ["last"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

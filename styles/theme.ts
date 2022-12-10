const palette = {
  black0: "#4d4d4d",
  black1: "#3c3c3c",
  black2: "#1e1e1e",
  black3: "#111111",
  black4: "#000000",

  white0: "#ffffff",
  white1: "#f8f8ff",
  white2: "#fefefa",
  white3: "#fffafa",
  white4: "#aaaaaa",

  LogoGreen0: "#00b050",

  beach0: "#96ceb4",
  beach1: "#ffeead",
  beach2: "#ff6f69",
  beach3: "#ffcc5c",
  beach4: "#88d8b0",
};

export const EmotionTheme = {
  dark: {
    background: palette.black0,
    color: palette.white0,
    impact: palette.LogoGreen0,
    hoverBackgroud: palette.black4,
    hoverColor: palette.white0,
  },
  light: {
    background: palette.white0,
    color: palette.black3,
    impact: palette.LogoGreen0,
    hoverBackgroud: palette.black2,
    hoverColor: palette.white1,
  },
};

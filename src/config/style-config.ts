export enum Colors {
  PRIMARY_MAIN_COLOR = "#f96331",
  SUCCESS = "#63da38",
  ERROR = "#ff3636",
}

export enum Breakpoints {
  XS = 0,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
}

export enum Fonts {
  FONT_FAMILY_BASE = '"Montserrat", "Helvetica", "Arial", sans-serif',
}

export const appTheme = {
  typography: {
    fontFamily: Fonts.FONT_FAMILY_BASE,
  },
  palette: {
    primary: {
      main: Colors.PRIMARY_MAIN_COLOR,
    },
  },
  breakpoints: {
    values: {
      xs: Breakpoints.XS,
      sm: Breakpoints.SM,
      md: Breakpoints.MD,
      lg: Breakpoints.LG,
      xl: Breakpoints.XL,
    },
  },
};

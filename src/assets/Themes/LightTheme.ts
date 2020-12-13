import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const LightTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#FF793A",
      main: "#F94400",
      dark: "#BD0000",
    },
    secondary: {
      light: "#768fff",
      main: "#2962ff",
      dark: "#0039cb",
    },
  },
});

export default LightTheme;

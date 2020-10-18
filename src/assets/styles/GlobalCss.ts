import withStyles from "@material-ui/core/styles/withStyles";

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiButton-root": {
      color: "white",
    },
    ".MuiIconButton-root": {
      color: "white",
    },
    ".MuiToggleButton-root": {
      color: "white",
      border: "none",
    },

    ".MuiToggleButtonGroup-root": {},
  },
})(() => null);

export default GlobalCss;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./utils/serviceWorker";
import LightTheme from "./assets/Themes/LightTheme";
import { ThemeProvider } from "@material-ui/core/styles";
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
  },
})(() => null);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <GlobalCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

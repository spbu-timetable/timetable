import { createTheme, ThemeProvider, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Light from '../../themes/Light';
import Dark from '../../themes/Dark';
import Content from '../Content';
import Head from '../Head';
import { appSlice } from '../../store/reducers/app';
import { useAppDispatch } from '../../store/hooks';


const App: React.FC = () => {

  const theme = useTheme();
  const { setLayout } = appSlice.actions;
  const dispatch = useAppDispatch();

  const layout = useMediaQuery(theme.breakpoints.down("sm")) ? "mobile" : "desktop";
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const colorTheme = React.useMemo(() => createTheme(prefersDarkMode ? Dark : Light), [prefersDarkMode]);
  React.useMemo(() => dispatch(setLayout(layout)), [layout])

  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      <Head />
      <Content />
    </ThemeProvider>
  )
};
export default App;

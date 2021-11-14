import { createTheme, ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import React from 'react';
import Light from '../../themes/Light';
import Dark from '../../themes/Dark';
import Content from '../Content';
import Head from '../Head';


const App: React.FC = () => {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(() => createTheme(prefersDarkMode ? Dark : Light), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head />
      <Content />
    </ThemeProvider>
  )
};
export default App;

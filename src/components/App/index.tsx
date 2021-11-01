import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import React from 'react';
import Light from '../../themes/Light';
import Dark from '../../themes/Dark';
import Content from '../Content';

const App: React.FC = () => {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(() => createTheme(prefersDarkMode ? Dark : Light), [prefersDarkMode]);

  return <ThemeProvider theme={theme}>
    <Content />
  </ThemeProvider>
};
export default App;

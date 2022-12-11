import React from 'react'
import ThemeChangeButton from '../components/common/ThemeChangeButton';
import { ThemeProvider } from '@mui/material/styles';
import useMUITheme from './useMUITheme';

type Props = {
  children: React.ReactNode
}

const MUIThemeProvider = ({ children }: Props) => {
  const { theme, mode, toggleColorMode } = useMUITheme()
  return (
    <ThemeProvider theme={theme}>
      {children}
      <ThemeChangeButton mode={mode} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  )
}

export default MUIThemeProvider
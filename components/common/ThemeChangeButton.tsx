import styled from '@emotion/styled'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';

interface Props {
  mode: string, 
  toggleColorMode: ()=> void,
}

const ThemeChangeButton = ({mode, toggleColorMode}:Props) => {
  return (
    <IconButton sx={{position: 'fixed', bottom: '5px', right: '5px'}} onClick={toggleColorMode} color="inherit">
      { mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

const Button = styled.button`
  position: fixed;
  bottom: 5px;
  right:5px;
`
export default ThemeChangeButton
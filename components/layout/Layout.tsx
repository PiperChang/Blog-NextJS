import styled from "@emotion/styled";
import Footer from './Footer'
import Header from './Header'
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
      <Box sx={{
               bgcolor: 'background.default',
               color: 'text.primary',
      }}>
        <S.container>
          <Header />
            {children}
          <Footer />
        </S.container>
      </Box>
  )
}

export default Layout

const S = {
  container: styled.div`
    margin: 0 auto;
    width: 100vw;
    max-width: 1240px;
    min-height: 100vh;
  `,
};

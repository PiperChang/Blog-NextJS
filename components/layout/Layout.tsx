import styled from "@emotion/styled";
import Footer from './Footer'
import Header from './Header'
import { Box } from '@mui/material';
import { Container } from "@mui/system";

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">    
      <Header />
      <section className="container px-5 mx-auto min-w-fit">
        {children}
        </section>
      <Footer />
    </div>
  )
}

export default Layout

import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
        <section className="container px-5 mx-auto min-w-fit">
          {children}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

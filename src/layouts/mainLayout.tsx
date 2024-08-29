import React, { Fragment } from 'react'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

type ComponentProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: ComponentProps) => {
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
      <Footer />
    </Fragment>
  )
}

export default MainLayout

import React from 'react'
import { Header } from '.'

export const revalidate = 60;


const Layout = ( { children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout

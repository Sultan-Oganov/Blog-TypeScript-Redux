import React, { FC } from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { wrapper } from '../store'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
)

export default wrapper.withRedux(WrappedApp)
import { FC } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};
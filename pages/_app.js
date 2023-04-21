import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from '@/components';
import 'tailwindcss/tailwind.css';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
    
  )
}

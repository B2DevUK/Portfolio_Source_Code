import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white min-h-screen 
    snap-y snap-mandatory scrollbar scrollbar-track-gray-400/20'>
      <Head>
        <title>B2.Dev</title>
        <meta name="description" content="B2's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Icon Bar + Contact Me */}
      <Header />

      {/* Opening Page Animation */}
      

      {/* Button to enter B2Dev */}

      
    </div>
  )
}

export default Home

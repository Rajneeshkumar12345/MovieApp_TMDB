import React from 'react'
import './style.scss';

import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topReted/TopRated';

const Home = () => {
  return (
    <div className='homeage'>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}

export default Home
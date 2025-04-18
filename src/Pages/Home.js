import React from 'react'
import Hero from '../components/Hero'
import Eventlist from '../components/Eventlist'
import Events from '../dummydata/Event'

export default function Home() {
  return (
    <>
    
      <Hero/>
      <Eventlist events={Events}/>

    
    </>
  )
}

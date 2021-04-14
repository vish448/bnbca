import React from "react"
import FeaturedCollection from '../components/featuredCollection'
import NewLaunch from '../components/newLaunch'
import "../styles/index.css"

export default function Home() {
  return ( 
    <>
      <div className="banner"></div>
      <FeaturedCollection />
      <NewLaunch />
    </>
    )
}

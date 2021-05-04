import React from "react"
import {Link} from "gatsby"
import FeaturedCollection from '../components/featuredCollection'
import NewLaunch from '../components/newLaunch'
import "../styles/index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Banner from '../components/slider'


const Home = ({data}) => {
  return ( 
    <>
      <Banner data={data} />
      <FeaturedCollection />
      <NewLaunch />
    </>
    )
}

export default Home
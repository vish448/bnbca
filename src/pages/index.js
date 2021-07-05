import React from "react"
import FeaturedCollection from '../components/featuredCollection'
import NewLaunch from '../components/newLaunch'
import "../styles/index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Banner from '../components/slider'
import {Helmet} from 'react-helmet'


const Home = ({data}) => {
  return ( 
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title> Home | Bownbee Australia</title>
      <meta name="description" content="BownBee Australia is connecting kids to their culture and origin. We are one stop shop for all kids Indian traditional wear and accessories. Ethinic indian wear for kids." />
      <meta name="keywords" content="Ethinic wear, Indian ethinic wear, Indian Kids clothing, Indian traditional cloths, Festival clothing, Girls dresses, Indian girls dresses, Indian boys cloths, Kurta pijama, Salvar for girls, Punbabi girls dresses, Navrati dresses for kids, Indian Traditional wear, Indian accessories Girls, Bownbee, BownbeeAustralia, Bownbeeca" />
    
      <link rel="canonical" href="https://www.bownbee.com.au/" />
    </Helmet>
      <Banner {...data} />
      <FeaturedCollection />
      <NewLaunch />
    </>
    )
}

export default Home
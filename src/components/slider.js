import React from "react";
import Slider from "react-slick";
import {graphql, Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const SimpleSlider = ( {data} ) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      className: 'slides'
    };
    console.log(data)
    const heroImages = data.allImageSharp.edges
    return (
      <div className="relative">
        <Slider {...settings}>
        {
            heroImages.map(({node})=>{
              const bannerImage = getImage(node)
              return(
                <GatsbyImage image={bannerImage} alt="heromage" className="banner" />
              )
            })
          }
        </Slider>
        <button className="shop-cta grid mx-auto absolute pt-2 pb-2 pl-5 pr-5 bg-black text-white inset-x-0 bottom-10 left-50%"> 
        <Link to="/products">
          SHOP
        </Link>
      </button>
      </div>
    );
  }

  export default SimpleSlider

  export const query = graphql`
  query heroImage {
    allImageSharp(filter: {original: {height: {gt: 414, lt: 417}}}) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`

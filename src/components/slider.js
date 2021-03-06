import React from "react";
import Slider from "react-slick";
import {graphql, Link, useStaticQuery} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const SimpleSlider = () => {
    const data = useStaticQuery(graphql`
      query heroImage {
        allImageSharp(filter: {original: {height: {gt: 605, lt: 607}}}) {
          edges {
            node {
              fluid(maxWidth:1800) {
                src
              }
              gatsbyImageData(formats: WEBP)
            }
          }
        }
      }
    `)
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      className: 'slides',
      useTransform: false
    };
    const heroImages = data.allImageSharp.edges
    return (
      <div className="relative">
        <Slider {...settings}>
        {
            heroImages.map(({node})=>{
              const bannerImage = getImage(node)
              return(
                //<img src={"http://localhost:8000" + `/${node.fluid.src}`} width="100%" height="100%"/>
                <GatsbyImage image={bannerImage} alt="test" />
                )
            })
          }
        </Slider>
        <button className="shop-cta w-20 grid mx-auto absolute pt-2 pb-2 pl-5 pr-5 bg-black text-white inset-x-0 bottom-10 left-50%"> 
        <Link to="/products">
          SHOP
        </Link>
      </button>
      </div>
    );
  }

  export default SimpleSlider

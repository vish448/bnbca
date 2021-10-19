import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const NewLaunch = () => {
    
    const data = useStaticQuery(graphql`
    query newLaunchQuery {
        allProductsCsv(filter: {newLaunch: {eq: "TRUE"},type: {eq: "variable"}}) {
        edges {
            node {
            id
            name
            productCategory
            sizes
            sku
            stock
            instock
            description
            colors
            templateKey
            price
            discountedPrice
            discount
            fields {
                slug
            }
            productImage {
                  id
                  childImageSharp {
                    gatsbyImageData( placeholder: BLURRED)
                  }
                }
            newLaunch
            }
        }
        }
    }
  `)

const newLaunchProducts = data.allProductsCsv.edges

var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    className: 'newLaunchSlide',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
    return (
        <>
            <h1 className="mx-auto h-20 pt-8 text-3xl font-semibold grid justify-center content-center leading-1">New Launch</h1>
            <div className="container mx-auto mb-4 relative">  
            <Slider {...settings}> 
                {
                    newLaunchProducts.map(({node})=>{
                        const newLaunchproductImage = getImage(node.productImage)
                        let discountedRate
                        let finalPrice
                        const price = node.price
                        let discount = node.discount
                        if(discount){
                            discountedRate = price - ((price * discount)/100)
                            finalPrice = discountedRate.toFixed(2)
                        }
                        return(
                            <Link 
                                key={node.id}
                                to={`https://bownbee.ca/${node.productCategory}/${node.fields.slug}`}
                                className="hover:text-black"
                                >
                            <div className="item items-center">
                            <GatsbyImage image={newLaunchproductImage} alt="pimage" className="sm:m-0 m-2 h-96" />
                            <div className="item-details p-1 mt-1">
                                <p className="desc text-gray-400 capitalize font-normal">{node.name}</p>
                                <p className="price pb-2 text-lg">$ {node.discountedPrice} <span className=" text-red-500 line-through">$ {node.price}</span></p>
                            </div>
                            </div>
                            </Link>
                        )
                    })
                }
                </Slider> 
            </div>

        </>
    )
}

export default NewLaunch
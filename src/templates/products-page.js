import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ProductPage({ data }) {
    let discountedRate
    let finalPrice
    let discount = data.productsCsv.discount
    const productImageFluid = getImage(data.productsCsv.productImage)
    console.log('image',productImageFluid)
    const price = data.productsCsv.price
    const productSizes = data.productsCsv.sizes.split(',')
    const productColors = data.productsCsv.colors.split(',') 
    const sku = data.productsCsv.sku.split(',')  
    const productImage = data.productsCsv.productImage.childImageSharp.gatsbyImageData.images.fallback.src
    if(discount){
        discountedRate = price - ((price * discount)/100)
        finalPrice = discountedRate.toFixed(2)
    }

    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [activeSize, setActiveSize] = useState(null)
    const [activeColor, setActiveColor] = useState(null)

    const toggleSize = (index) => {
        setActiveSize((activeSize) => (activeSize === index ? null : index))
    }

    const toggleColor = (index) => {
        setActiveColor((activeColor) => (activeColor === index ? null : index))
    }

 
      let productSizeBuffer = ''
      let productSizeOptions = ''
    return (
        <>
            <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">
                {data.productsCsv.slug}
            </div>
            <div className="grid grid-cols-1 justify-items-center sm:justify-items-start sm:grid-cols-2 gap-10 p-14 container mx-auto">
                <div className="grid grid-cols-1">
                    
                        <div>
                            <GatsbyImage image={productImageFluid} alt="pimage"/>
                        </div>
                   
                    
                </div>
                <div>
                    <h1 className="product-name text-4xl pb-4">{data.productsCsv.name}</h1>
                    <p className={`price pb-2 text-lg ${discount ? 'block' : 'hidden'}`}>$ {finalPrice} <span className=" text-red-500 line-through">$ {data.productsCsv.price}</span></p>
                    <p className={`price pb-2 text-lg ${discount ? 'hidden' : 'block'}`}>$ {data.productsCsv.price} </p>
                    
                    <p className={`discount mb-4 ${discount ? 'block' : 'hidden'}`}><span className="text-lg bg-green-600 text-white p-1">{discount}% OFF</span></p> 
                    
                    <p className="text-gray-500 pb-2">SKU: {sku[0]}</p>
                    <div className="sizes mb-4">
                        <p className="tracking-wider mb-2">Size</p>
                        {productSizes.map((size, index) => {
                            productSizeBuffer += size + '|'
                                return (
                                    
                                    <button className={`p-2 border-gray-200 border mr-2 mb-2 hover:bg-black hover:text-white cursor-pointer focus:border-black ${activeSize === index ? 'bg-black text-white' : null}`} role="button" tabIndex={0} 
                                    onClick={() => {toggleSize(index); setSize(size)}}
                                    onKeyDown={() => {toggleSize(index); setSize(size)}} key={index}>{size}</button>
                                    
                                )
                            }
                        )}
                        
                              
                    </div> 
                    <div className="colors mb-8 hidden">
                        <p className="tracking-wider mb-2">Color</p>
                        {productColors.map((color,index) => {
                            return (
                                <button className={`p-2 border-gray-200 border mr-2 ${color == 'black'? `hover:bg-black` :`hover:bg-${color}-500`} cursor-pointer outline-none ${activeColor === index ? `bg-gray-500 text-black` : null}`} role="button" tabIndex={0} 
                                onClick={() => {toggleColor(index); setColor(color)}} onKeyDown = {()=> {toggleColor(index); setColor(size)}} key={index}>
                                 {color}
                                </button>
                            )
                            }
                        )}
                        {productSizeOptions = productSizeBuffer.slice(0, -1)}

                    </div>  
                    <div className="product-details mb-4">
                        <p className="tracking-wider mb-2"><b>Available Quantity:</b> {data.productsCsv.stock} availble for each size. Please enquire for additonal quanity at <a href="tel:6476757590">(647) 675-7590</a></p>
                    </div>
                    <div className="product-details mb-4">
                        <p className="tracking-wider mb-2 font-extrabold"><b>Product Details</b></p>
                        <div>{data.productsCsv.description}</div>
                    </div>
                    <button className="btn bg-green-500 mt-4 snipcart-add-item p-4 rounded text-white"
                            data-item-id={data.productsCsv.id}
                            data-item-price={finalPrice}    
                            data-item-url={`https://bownbee.ca/${data.productsCsv.productCategory}/${data.productsCsv.fields.slug}`}
                            data-item-name={data.productsCsv.name}
                            data-item-image={`https://bownbee.ca` + productImage}
                            data-item-custom1-name="size" 
                            data-item-custom1-value={size}
                            data-item-custom1-options={productSizeOptions}
                            data-item-max-quantity={data.productsCsv.stock}
                    >
                            Add to cart
                    </button>
                </div>
            </div>
        </>
    )

}

export const pageQuery = graphql`
  query ($id: String) {
    productsCsv(id: {eq: $id}) {
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
      discount
      fields {
        slug
      }
      productImage {
        id
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  } 
`   
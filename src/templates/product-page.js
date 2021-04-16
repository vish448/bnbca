import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProductPage({ data }) {
    let discountedRate
    let finalPrice
    let discount = data.markdownRemark.frontmatter.discount
    const productImageFluid = getImage(data.markdownRemark.frontmatter.productImage)
    const price = data.markdownRemark.frontmatter.price
    const productSizes = data.markdownRemark.frontmatter.sizes
    const productColors = data.markdownRemark.frontmatter.colors
    const productImage = data.markdownRemark.frontmatter.productImage.childImageSharp.gatsbyImageData.images.fallback.src
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

    return (
        <>
            <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">
                {data.markdownRemark.fields.slug}
            </div>
            <div className="grid grid-cols-2 gap-10 p-14">
                <div>
                    <GatsbyImage image={productImageFluid} alt="pimage" />
                </div>
                <div>
                    <h1 className="product-name text-4xl pb-4">{data.markdownRemark.frontmatter.name}</h1>
                    <p className="price pb-2 text-lg">$ {finalPrice} <span className=" text-red-500 line-through">$ {data.markdownRemark.frontmatter.price}</span></p>
                    <p className="discount mb-4 "><span className="text-lg bg-green-600 text-white p-1">{discount}% OFF</span></p> 
                    <div className="sizes mb-4">
                        <p className="tracking-wider mb-2">Size</p>
                        {productSizes.map((size, index) => {
                                return (
                                    
                                    <button className={`p-2 border-gray-200 border mr-2 hover:bg-black hover:text-white cursor-pointer focus:border-black ${activeSize === index ? 'bg-black text-white' : null}`} role="button" tabIndex={0} 
                                    onClick={() => {toggleSize(index); setSize(size)}}
                                    onKeyDown={() => {toggleSize(index); setSize(size)}} key={index}>{size}</button>
                                )
                            }
                        )}
                    </div> 
                    <div className="colors mb-8">
                        <p className="tracking-wider mb-2">Color</p>
                        {productColors.map((color,index) => {
                            return (
                                <button className={`p-2 border-gray-200 border mr-2 hover:bg-black hover:text-white cursor-pointer outline-none ${activeColor === index ? 'bg-black text-white' : null} `} role="button" tabIndex={0} 
                                onClick={() => {toggleColor(index); setColor(color)}} onKeyDown = {()=> {toggleSize(index); setSize(size)}} key={index}>
                                 {color}
                                </button>
                            )
                            }
                        )}
                    </div>  
                    <div className="product-details mb-4">
                        <p className="tracking-wider mb-2 font-extrabold"><b>Product Details</b></p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.markdownRemark.html
                            }}
                        ></div>
                    </div>
                    <button className="btn bg-green-500 mt-4 snipcart-add-item p-4 rounded text-white"
                            data-item-id={data.markdownRemark.frontmatter.id}
                            data-item-price={finalPrice}
                            data-item-url={data.markdownRemark.fields.flug}
                            data-item-name={data.markdownRemark.frontmatter.name}
                            data-item-image={'http://localhost:8000/' + productImage}
                            data-item-custom1-name="size"
                            data-item-custom1-value={size}
                            data-item-custom2-name="color"
                            data-item-custom2-value={color}
                    >
                            Add to cart
                    </button>
                </div>
            </div>
        </>
    )

}

export const pageQuery = graphql`
    query($id: String){
        markdownRemark(id:{eq:$id}) {
            html
            frontmatter {
                name
                price
                productCategory
                colors
                discount
                id
                sizes
                productImage {
                    childImageSharp {
                      gatsbyImageData(
                          width: 600
                        placeholder: BLURRED
                      )
                    }
                  }
              }
            fields{
                slug
            }
        }
    }
`   
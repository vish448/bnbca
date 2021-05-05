import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const NewLaunch = () => {
    
    const data = useStaticQuery(graphql`
    query newLaunchQuery {
        allProductsCsv(filter: {newLaunch: {eq: "true"}}) {
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
            discount
            fields {
                slug
            }
            productImage {
                  id
                  childImageSharp {
                    gatsbyImageData(width: 300, placeholder: BLURRED)
                  }
                }
            newLaunch
            }
        }
        }
    }
  `)

const newLaunchProducts = data.allProductsCsv.edges

console.log("newlaunch", data)
    return (
        <>
            <h1 className="mx-auto h-20 pt-8 text-3xl font-semibold grid justify-center content-center leading-1">New Launch</h1>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-5 mx-auto justify-items-center p-8 md:grid-flow-col grid-flow-row">
                
                {
                    newLaunchProducts.map(({node})=>{
                        const newLaunchproductImage = getImage(node.productImage)
                        let discountedRate
                        let finalPrice
                        const price = node.price
                        console.log('price',price)
                        let discount = node.discount
                        if(discount){
                            discountedRate = price - ((price * discount)/100)
                            finalPrice = discountedRate.toFixed(2)
                        }
                        return(
                            <Link 
                                key={node.id}
                                to={`https://dev--bnbca.netlify.app/${node.productCategory}/${node.fields.slug}`}
                                className="hover:text-black"
                                >
                            <div className="item grid items-center">
                            <GatsbyImage image={newLaunchproductImage} alt="pimage" />
                            <div className="item-details p-1 mt-1">
                                <p className="desc text-gray-400 capitalize font-normal">{node.name}</p>
                                <p className="price pb-2 text-lg">$ {finalPrice} <span className=" text-red-500 line-through">$ {node.price}</span></p>
                            </div>
                            </div>
                            </Link>
                        )
                    })
                }
                
            </div>

        </>
    )
}

export default NewLaunch
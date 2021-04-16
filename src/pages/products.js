import React from "react"
import { graphql, Link } from "gatsby"
import ProductsList from "../components/productsLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const ProductPage = ({ data }) =>  {
    const products = data.allMarkdownRemark.edges
    console.log(products)
  return ( 
      <ProductsList>
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <div className="product-list grid grid-cols-4 gap-4 mb-8">
            
            {products.map( ({node}) => {
                const productImageFluid = getImage(node.frontmatter.productImage)
                return(

                    <Link
                            key={node.id}
                            to={node.fields.slug}
                            
                            >
                        <div className="product">
                            <GatsbyImage image={productImageFluid} alt="pimage" />
                            <h1>{node.frontmatter.name}</h1>
                            <p>{node.frontmatter.price}</p>
                        </div>  
                    </Link>
                )
            })}
        </div>
    </ProductsList>
    )
}

export default ProductPage

export const PageQuery = graphql`
    query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        name
                        price
                        productImage {
                            childImageSharp {
                                gatsbyImageData (
                                        width: 300
                                        placeholder: BLURRED
                                )
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
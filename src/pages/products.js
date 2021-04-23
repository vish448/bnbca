import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import ProductsList from "../components/productsLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const ProductPage = ({ data }) =>  {
    const productsFilter = data.allMarkdownRemark.edges
    const csvItems = data.allProductsCsv.edges
    const [colorFilter,setColorFilter] = useState(null)
    console.log('colorFilter',colorFilter)
    if (colorFilter == null) {
        return ( 
            <ProductsList>
            <div className="products-list grid grid-cols-5 gap-4 p-8">
            <aside className="col-start-1">
                FILTER BY:
                    {productsFilter.map(({node})=> {
                        const productColors = node.frontmatter.productColors
                        
                        return(
                            <>
                                {productColors.map(color=> {
                                    return(
                                        <p className="cursor-pointer" onClick={()=>setColorFilter(color)}>{color}</p>)
                                })}
                            </>
                        )
                    })}
        
                
            </aside>
            <main className="col-start-2 col-end-6">
                <h1 className="text-4xl font-bold mb-8">Products</h1>
                <div className="product-list grid grid-cols-4 gap-4 mb-8">
                    {csvItems.map( ({node} ) => {
                        const productImageFluidCsv = getImage(node.productImage)
                            return(
        
                                <Link
                                        key={node.id}
                                        to={node.fields.slug}
                                        
                                        >
                                    <div className="product">
                                        <GatsbyImage image={productImageFluidCsv} alt="pimage" />
                                        <h1>{node.name}</h1>
                                        <p>{node.price}</p>
                                    </div>  
                                </Link>
                            )
                        
                    })}
                </div>
            </main>
            </div>
            </ProductsList>
            )
    }else{
        return ( 
            <ProductsList>
            <div className="products-list grid grid-cols-5 gap-4 p-8">
            <aside className="col-start-1">
                FILTER BY:
                    {productsFilter.map(({node})=> {
                        const productColors = node.frontmatter.productColors
                        
                        return(
                            <>
                                {productColors.map(color=> {
                                    return(
                                        <p className="cursor-pointer" onClick={()=>setColorFilter(color)}>{color}</p>
                                        )
                                })}
                                <p className="cursor-pointer" onClick={()=>setColorFilter(null)}>Reset</p>
                            </>
                        )
                    })}
        
                
            </aside>
            <main className="col-start-2 col-end-6">
                <h1 className="text-4xl font-bold mb-8">Products</h1>
                <div className="product-list grid grid-cols-4 gap-4 mb-8">
                    {csvItems.map( ({node} ) => {
                        const productImageFluidCsv = getImage(node.productImage)
                       
                        if (node.colors == colorFilter) {
                            return(
        
                                <Link
                                        key={node.id}
                                        to={node.fields.slug}
                                        
                                        >
                                    <div className="product">
                                        <GatsbyImage image={productImageFluidCsv} alt="pimage" />
                                        <h1>{node.name}</h1>
                                        <p>PRICE</p>
                                    </div>  
                                </Link>
                            )
                        }

                        
                    })}
                </div>
            </main>
            </div>
            </ProductsList>
            )
    }

  
}

export default ProductPage

export const PageQuery = graphql`
    query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        productColors
                        age
                        }
                    }
                }
            }   
        allProductsCsv {
            edges {
              node {
                id
                name
                productCatergory
                sizes
                sku
                stock
                instock
                description
                colors
                templateKey
                price
                discount
                fields{
                    slug
                }
                productImage {
                  id
                  childImageSharp {
                    gatsbyImageData(width: 300, placeholder: BLURRED)
                  }
                }
              }
            }
        }
    }
`
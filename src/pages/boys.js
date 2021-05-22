import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import ProductsList from "../components/productsLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const BoysPage = ({ data }) =>  {
    const productsFilter = data.allMarkdownRemark.edges
    const csvItems = data.allProductsCsv.edges
    const [colorFilter,setColorFilter] = useState(null)
    const [ageFilter, setAgeFilter] = useState(null)

    const resetFilters = () => {
        setColorFilter(null);
        setAgeFilter(null);
    }

    if (colorFilter == null && ageFilter == null) {
        return ( 
            <ProductsList>
            <div className="products-list grid grid-cols-1 sm:grid-cols-5 gap-0 sm:gap-4 p-2 sm:p-8">
                FILTER BY:
                <aside className="grid-cols-2 sm:grid-cols-1 col-start-1">
                <div className="grid colorFilter w-40">
    
                <h1 className="underline mb-2 text-lg mt-5">COLOR</h1>
                    {productsFilter.map(({node})=> {
                        const productColors = node.frontmatter.productColors
                        
                        return(
                            <>
                                {productColors.map(color=> {
                                    return(
                                        <p className="cursor-pointer" onClick={()=>setColorFilter(color)} onKeyDown={()=>setColorFilter(color)}>{color}</p>)
                                })}
                            </>
                        )
                    })}
                    </div>
                    <div className="ageFilter">
                    <h1 className="mt-5 underline text-lg mb-2">AGE</h1>
                    {productsFilter.map(({node})=> {
                        const age = node.frontmatter.age
                        
                        return(
                            <>
                                {age.map(age=> {
                                    return(
                                        <p className="cursor-pointer" onClick={()=>setAgeFilter(age)} onKeyDown={()=>setAgeFilter(age)}>{age}</p>)
                                })}
                            </>
                        )
                    })}
                    </div>
            </aside>
            <main className="col-start-1 sm:col-start-2 col-end-6">
                <h1 className="text-4xl font-bold mb-8">Products</h1>
                <div className="product-list grid grid-cols-1 justify-items-center sm:justify-items-start sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
            <div className="products-list grid grid-cols-1 sm:grid-cols-5 gap-0 sm:gap-4 p-2 justify-items-center sm:justify-items-start sm:p-8">
                FILTER BY:
                <aside className="grid grid-cols-2 sm:grid-cols-1 col-start-1">
                <div className="grid colorFilter w-40">
                    <h1 className="underline mb-2 text-lg mt-5">COLOR</h1>
                    {productsFilter.map(({node})=> {
                        const productColors = node.frontmatter.productColors
                        
                        return(
                            <>
                                {productColors.map(color=> {
                                    return(
                                        <p className="cursor-pointer" onClick={()=>setColorFilter(color)} onKeyDown={()=>setColorFilter(color)}>{color}</p>)
                                })}
                            </>
                        )
                    })}
                    </div>
                    <div className="ageFilter">
                    <h1 className="mt-5 underline text-lg mb-2">AGE</h1>
                    {productsFilter.map(({node})=> {
                        const age = node.frontmatter.age
                        
                        return(
                            <>
                                {age.map(age=> {
                                    return(
                                        <p className="cursor-pointer" onClick={()=>setAgeFilter(age)} onKeyDown={()=>setAgeFilter(age)}>{age}</p>)
                                })}
                            </>
                        )
                    })}
                    </div>
            </aside>
           
            <main className="col-start-1 sm:col-start-2 col-end-6">
                <h1 className="text-4xl font-bold mb-8">Products
                    <span className="ml-10 text-sm">Filter: 
                        
                        <span className="bg-gray-100 p-1 pl-3 pr-3 rounded-xl" onClick={()=> (setColorFilter(null))} onKeyDown={()=> (setColorFilter(null))}>{colorFilter}</span> 
                        <span className="bg-gray-100 p-1 pl-3 pr-3 rounded-xl" onClick={()=> (setAgeFilter(null))} onKeyDown={()=> (setAgeFilter(null))}>{ageFilter}</span> <span className="bg-gray-100 p-1 pl-3 pr-3 rounded-xl cursor-pointer" onClick= {() => resetFilters()}>RESET</span>
                    </span>
                </h1>
                <div className="product-list grid grid-cols-1 justify-items-center sm:grid-cols-4 gap-4 mb-8">
                    {csvItems.map( ({node} ) => {
                        const productImageFluidCsv = getImage(node.productImage)
                        if (node.colors === colorFilter) {
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
                        }
                        if(ageFilter){
                        
                        const sizes = node.sizes
                        const filter = ageFilter.replace(' to ','-')
                        if(sizes.includes(filter)){
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
                        }
                        }
                        
                    })}
                    
                    
                </div>
            </main>
            </div>
            </ProductsList>
            )
    }

  
}

export default BoysPage

export const PageQuery = graphql`
    query BoysPageQuery {
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
            allProductsCsv(filter: {productCategory: {eq: "boys"}}) {
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
                }
                }
            }
    }
`
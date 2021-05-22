import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const productsLayout = ( {children} ) => {
    return(
        <>
            <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">Products
            </div>
            <div className="promo h-20 m-8 grid justify-items-center content-center hidden">
                
            </div>
            {children}
        </>
    )

}

export default productsLayout
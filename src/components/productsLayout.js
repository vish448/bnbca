import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const productsLayout = ( {children} ) => {
    return(
        <>
            <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">Products
            </div>
            <div className="promo h-20 m-8 grid justify-items-center content-center">
                <StaticImage 
                    src="../images/promo.png"
                    alt="promo image"
                />
            </div>
            <div className="products-list grid grid-cols-7 gap-4 p-8">
                <aside className="col-start-1">
                    FILTER BY:
                </aside>
                <main className="col-start-2 col-end-6">
                {children}
                </main>
            </div>
            
           
        </>
    )

}

export default productsLayout
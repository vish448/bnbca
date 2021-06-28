import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {Helmet} from 'react-helmet'

const productsLayout = ( {children} ) => {
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Products | Bownbee Canada</title>
                <meta name="description" content="Ethinic wear, Indian ethinic wear, Indian Kids clothing, Indian traditional cloths, Festival clothing, Girls dresses, Indian girls dresses, Indian boys cloths, Kurta pijama, Salvar for girls, Punbabi girls dresses, Navrati dresses for kids, Indian Traditional wear, Indian accessories Girls, Bownbee, Bownbeecanada, Bownbeeca" />
                <meta name="keywords" content="BownBee Canada offers wide range of Indian traditional wear and accessories collection for Boys and Girls." />
            
                <link rel="canonical" href="https://www.bownbee.ca/products" />
            </Helmet>
            <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">Products
            </div>
            <div className="promo sm:m-8 grid justify-items-center content-center hidden">
            <StaticImage 
                src="../images/promo.png" 
                alt="promotion"
                placeholder="blurred"
            />
            </div>
            {children}
        </>
    )

}

export default productsLayout
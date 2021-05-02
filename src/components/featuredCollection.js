import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

function FeaturedCollection() {

    return(
        <>
            <h1 className="mx-auto h-20 pt-8 text-3xl font-semibold grid justify-center content-center leading-1">Featured Collection</h1>
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-none gap-6 mx-auto justify-center justify-items-center p-8 md:grid-flow-col grid-flow-row">
                
                <div className="cardContainerTwo">
                    <div className="cardContent grid grid-cols-2">
                        <div className="contentLeft px-8">
                            <h1 className="font-semibold text-4xl py-20 lg:py-16 leading-8">Spring Summer 2020</h1>
                            <p>Cottons and Florals for the season</p>
                            <p className="pt-10 text-lg font-bold"><Link>Export Collection</Link></p>
                        </div>
                        <div className="contentRight">
                            <StaticImage
                                src="../images/kurta-dhoti.png"
                                alt="Kurta Dhoti"
                                placeholder="blurred"
                            />
                        </div>
                    </div>
                </div>

                <div className="cardContainerTwo">
                    <div className="cardContent grid grid-cols-2">
                        <div className="contentLeft px-8">
                            <h1 className="font-semibold text-4xl py-20 lg:py-16  leading-8">Spring Summer 2020</h1>
                            <p>Cottons and Florals for the season</p>
                            <p className="pt-10 text-lg font-bold"><Link>Export Collection</Link></p>
                        </div>
                        <div className="contentRight">
                            <StaticImage
                                src="../images/kurta-dhoti.png"
                                alt="Kurta Dhoti"
                                placeholder="blurred"
                            />
                        </div>
                    </div>
                </div>

                <div className="cardContainerTwo">
                    <div className="cardContent grid grid-cols-2">
                        <div className="contentLeft px-8">
                            <h1 className="font-semibold text-4xl py-20 lg:py-16  leading-8">Spring Summer 2020</h1>
                            <p>Cottons and Florals for the season</p>
                            <p className="pt-10 text-lg font-bold"><Link>Export Collection</Link></p>
                        </div>
                        <div className="contentRight">
                            <StaticImage
                                src="../images/kurta-dhoti.png"
                                alt="Kurta Dhoti"
                                placeholder="blurred"
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default FeaturedCollection
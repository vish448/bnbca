import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function NewLaunch() {
    return (
        <>
            <h1 className="mx-auto h-20 pt-8 text-3xl font-semibold grid justify-center content-center leading-1">New Launch</h1>
            <div className="grid gap-4 grid-cols-5 mx-auto justify-items-center p-8 md:grid-flow-col grid-flow-row">
                <div className="item grid justify-items-center items-center">
                    <StaticImage 
                    src="../images/item-2.png" 
                    alt="A dinosaur"
                    placeholder="blurred"
                    />
                    <div className="item-details">
                        <p className="desc text-gray-400 capitalize font-normal">Printed Jackaet kurta pajama set-gray</p>
                        <p className="price text-black text-xl">$45.90</p>
                    </div>
                    
                </div>
                <div className="item grid justify-items-center items-center">
                    <StaticImage 
                    src="../images/item-3.png" 
                    alt="A dinosaur"
                    placeholder="blurred"
                    />
                    <div className="item-details">
                        <p className="desc text-gray-400 capitalize font-normal">Printed Jackaet kurta pajama set-gray</p>
                        <p className="price text-black text-xl">$45.90</p>
                    </div>
                </div>
                <div className="item grid justify-items-center items-center">
                    <StaticImage 
                    src="../images/item-4.png" 
                    alt="A dinosaur"
                    placeholder="blurred"
                    />
                    <div className="item-details">
                        <p className="desc text-gray-400 capitalize font-normal">Printed Jackaet kurta pajama set-gray</p>
                        <p className="price text-black text-xl">$45.90</p>
                    </div>
                </div>
                <div className="item grid justify-items-center items-center">
                    <StaticImage 
                    src="../images/item-5.png" 
                    alt="A dinosaur"
                    placeholder="blurred"
                    />
                    <div className="item-details">
                        <p className="desc text-gray-400 capitalize font-normal">Printed Jackaet kurta pajama set-gray</p>
                        <p className="price text-black text-xl">$45.90</p>
                    </div>
                </div>
                <div className="item grid justify-items-center items-center">
                    <StaticImage 
                    src="../images/item-6.png" 
                    alt="A dinosaur"
                    placeholder="blurred"
                    />
                    <div className="item-details">
                        <p className="desc text-gray-400 capitalize font-normal">Printed Jackaet kurta pajama set-gray</p>
                        <p className="price text-black text-xl">$45.90 <span className="discount text-red-500 text-sm line-through">$59.90</span></p>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default NewLaunch
import React from 'react'
import Header from './header'
import Footer from './footer'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import "@fontsource/quicksand"

function Layout({children}) {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          company
          companyWebsite
        }
      }
    }
  `)
    return(
        <>
            <div className="h-screen grid justify-items-center items-center">
            
                        <StaticImage 
                            src="../images/logo.png" 
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={817}
                            
                        />
                <h1 className="content-center font-bold text-5xl align-top">Coming Soon...</h1>
            </div>
        </>
    )

}

export default Layout
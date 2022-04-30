import React from 'react'
import Img from "gatsby-image"
import IndexPage from '@vojtaholik/gatsby-theme-simplecast/src/pages/index'

export default function ArtistPage() {
    const src_img = "https://www.mcmireport.com/wp-content/uploads/2014/06/GMS-pic-rocking-mic.jpg"
    return (
        <div>
            
            <h1>GMS</h1>
            <img src={src_img} alt="" />

        </div>
    )
}

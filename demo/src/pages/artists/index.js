import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'

export default function NotFound() {
    return (
        <div>
            <h1>Artists Page</h1>
            <img src="https://www.mcmireport.com/wp-content/uploads/2021/03/MCMI-PEN-SWORD-RECORDS.jpg" alt="" />
            <Img src="../../../static/img/2022-04-29-18-24-16.png" alt="" />
            <li>Keith WildChild Middleton</li>
            <li>LR Blitzkrieg</li>
            <li><Link to="gms">GMS	GMS</Link></li>
            <li>PH	PH</li>
            <li>CHORDZ CORDERO in STUDIO	CHORDZ CORDERO</li>
            <li>Artists	Juggernaut War Party</li>
            <li>HYDRA	HYDRA</li>
            <li>plague	ThePLAGUE (-aka- ‘Army of the 12Monkeyz’)</li>
            <li>MarXman	The MarXman</li>
            <li>MrMecc	MrMecc</li>
        </div>
    )
}

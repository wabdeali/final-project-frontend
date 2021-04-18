import React from 'react'
import Navbar from '../../components/Navbar'
function WAP() {
    return (
        <div>

            <Navbar></Navbar>

            <embed src= "../downloads/Attackguide.pdf" style={{width:"100%",height:"100vh",overflow: "hidden;",position:"fixed"}}></embed>
        </div>
    )
}

export default WAP

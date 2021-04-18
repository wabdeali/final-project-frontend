import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
// import hook1 from '../hooks/hook1'

export class linux extends Component {



    render() {
        return (
            <>
            <Navbar></Navbar>
               <iframe src="https://linuxonline.netlify.app/" frameborder="0" style={{width:"100%",height:"100vh",overflow: "hidden;",position:"fixed"}}></iframe>
            </>
        )
    }
}

export default linux
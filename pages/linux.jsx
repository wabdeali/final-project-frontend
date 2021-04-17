import React, { Component } from 'react'
import Head from 'next/head'
// import hook1 from '../hooks/hook1'

export class linux extends Component {



    render() {
        return (
            <>
                <Head>
                    <script src="./linux/jor1k.js" />
                    <script src="./linux/script.js" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" />
                </Head>
                <div>
                    <div className="row1" style={{ marginTop: "10px" }}>
                        <div className="col-sm-6">
                            <label>
                                Restart with new binary image:
                    <img src="" width="20px" height="20px" title="Restart with new binary image" />
                                <input type="file" id="files" style={{
                                    visibility: "hidden",
                                    width: "1px",
                                    height: "1px"
                                }} name="files[]" onchange='OnNewImage(this.files)' />
                            </label>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default linux
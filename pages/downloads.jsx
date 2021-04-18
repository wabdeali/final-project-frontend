import Navbar from '../components/Navbar'
import styles from '../styles/downloads.module.css'


function downloads() {
    return (
        <>
        <Navbar />
        <div >
            <div className={styles.website}>

            <div className={styles.a} style={{ overflowX: "hidden"}}>
                <h1 className={styles.h1}>Get the WAP Attack Source Code</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                <button className={styles.button}>Download WAP</button>
                </div>
                <div className={styles.websiteimg}></div>


            </div>
            
            <div className={styles.website2}>
            <div className={styles.a}>

                <h1 className={styles.h11}>WAP ATTACK GUIDE</h1>
                <p className={styles.p11}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                <button className={styles.button}> <a href='/pdf/WAP'target="_blank">Download PDF</a></button>
                </div>
                <div className={styles.websiteimg11}></div>


            </div>

            <div className={styles.website3}>
            <div className={styles.a}>

                <h1 className={styles.h11}style={{color:"#DC143C;"}}>Linux Online Guide</h1>
                <p className={styles.p11}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                <button className={styles.button}> <a href='/pdf/linux'target="_blank">Download Linux Guide</a></button>
                </div>
                <div className={styles.websiteimg111}></div>


            </div>
            <div className={styles.website4}>
            <div className={styles.a}>

                <h1 className={styles.h11} style={{color:"#66CDAA;"}}>Research Documentation</h1>
                <p className={styles.p11}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                <button className={styles.button}> <a href='/'target="_blank">Download PDF</a></button>
                </div>
                <div className={styles.websiteimg1111}></div>


            </div>
            </div>
            
            

            
            </>
    )
}

export default downloads

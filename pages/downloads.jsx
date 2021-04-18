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
                <p className={styles.p}>The VM is an instance of Kali Linux with Complete Setup of NODE, NPM and POSTGREsql. To Start Refer to the Setup Document Down Below.</p>
                <button className={styles.button}><a href='https://drive.google.com/file/d/14J5zZSIus-tgCHIRQPnQ2zCKcASv4-bg/view?usp=sharing'target="_blank">Download WAP_VM</a></button>
                </div>
                <div className={styles.websiteimg}></div>


            </div>
            
            <div className={styles.website2}>
            <div className={styles.a}>

                <h1 className={styles.h11}>WAP ATTACK GUIDE</h1>
                <p className={styles.p11}>a complete guide to cover all the Exercises. Beginner friendly for anyone interested in hacking and wants to take a step in Cyber Security </p>
                <button className={styles.button}> <a href='/pdf/WAP'target="_blank">Download PDF</a></button>
                </div>
                <div className={styles.websiteimg11}></div>


            </div>

            <div className={styles.website3}>
            <div className={styles.a}>

                <h1 className={styles.h11}style={{color:"#DC143C;"}}>Linux Online Guide</h1>
                <p className={styles.p11}>If you are Seeing this online Download this Guid to Linux to learn basics of terminal and Experiance what the PRO's do for a living with linux. Dont worry if you dont have linux install just go to home page and click Learn Linux or reffer the Guide to get started</p>
                <button className={styles.button}> <a href='/pdf/linux'target="_blank">Download Linux Guide</a></button>
                </div>
                <div className={styles.websiteimg111}></div>


            </div>
            <div className={styles.website5}>
            <div className={styles.a}>

                <h1 className={styles.h11} style={{color:"#ffcc99;"}}>Manual Setup</h1>
                <p className={styles.p11}>the brave ones may pass the test of time but with this in your download folder you may very well concour the world. A grate start is essential for a good day and with the setup manual you can have that with n errors (i guess?!).</p>
                <button className={styles.button}> <a href='/pdf/setup'target="_blank">Download PDF</a></button>
                </div>
                <div className={styles.websiteimg11111}></div>


            </div>

            <div className={styles.website4}>
            <div className={styles.a}>

                <h1 className={styles.h11} style={{color:"#66CDAA;"}}>Research Documentation</h1>
                <p className={styles.p11}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit sequi id nobis illum, culpa animi officia eligendi sed. Natus consequuntur corporis reprehenderit voluptate aliquam asperiores cumque, ullam accusamus in.</p>
                <button className={styles.button}> <a href='/pdf/Research'target="_blank">Download PDF</a></button>
                </div>
                <div className={styles.websiteimg1111}></div>


            </div>
            </div>
            
            

            
            </>
    )
}

export default downloads

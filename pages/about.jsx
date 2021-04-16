import Navbar from '../components/Navbar'
import styles from '../styles/About.module.css'

function about() {
    return (
        <>
            <Navbar />
            <div className={styles.aboutus}>.
                <h1>Meet The Team!</h1>
               
                    <div className={styles.column}>
                    <div className={styles.card}>
                    <div className={styles.img}><img src="./img/12.jpg" alt="upna londa"className={styles.img}/></div>
                    <div className={styles.container}>
                        <h2>Isaac John</h2>
                        <p>"Ni naman"</p>

                    </div>
                    </div>
                    </div>

                    
                    <div className={styles.column}>
                    <div className={styles.card}>
                    <div className={styles.img}><img src="./img/12.jpg" alt="ali bhai" className={styles.img}/></div>
                    <div className={styles.container}>
                        <h2>Abdeali Waseef</h2>
                        <p>"trumpet nerd"</p>

                    </div>
                    </div>
                    </div>

                    
                    
                    <div className={styles.column}>
                    <div className={styles.card}>
                    <div className={styles.img}><img src="./img/12.jpg" alt="farooq" className={styles.img} /></div>
                    <div className={styles.container}>
                        <h2>Raina Farooq</h2>
                        <p>"Suta gang!!"</p>

                    </div>
                    </div>
                    </div>
                
            </div>
            <div className={styles.para}>.
                
                
            </div>
            
        </>
    )
}

export default about

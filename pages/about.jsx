import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";

function about() {
    return (
        <div >
            <Navbar />
            <div className={styles.aboutus}>
                .<h1>Meet The Team!</h1>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img
                                src="./img/12.jpg"
                                alt="upna londa"
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.container}>
                            <h2>Isaac John</h2>
                            <p>7 Billion people can figureout how to educate and sutain 7 billion people.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img
                                src="./img/ali.jpeg"
                                alt="ali bhai"
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.container}>
                            <h2>Abdeali Waseef</h2>
                            <p>Education is a god given birth right. fight for it Since no one else will !</p>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img
                                src="./img/farooq.jpeg"
                                alt="farooq"
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.container}>
                            <h2>Raina Farooq</h2>
                            <p>The Rich knowledge of humanity dosen't discriminate, we discriminate knowledge. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.para}>.</div>
        </div>
    );
}

export default about;

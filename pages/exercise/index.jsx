import Layout from "../../components/Layout";
import styles from "../exercise/exercise.module.css"
function index() {
    return (
        <div>
            <div className={styles.bg} ></div>
        <div className={styles.bg1}>
          <main className={styles.main}>

            <h1 className={styles.title}>
              Welcome to <a href="/">WAP!</a>
            </h1>

            <p className={styles.description}>
              Learning made easy for{' '}
              <code className={styles.code}>Web Application and Penitration</code>
            </p>

            <div className={styles.grid}>
              <a href="/exercise/xss" className={styles.card}>
                <h3>XSS Attack &rarr;</h3>
                <p>ISO files ,PDF and many other goodies. </p>
              </a>

              <a href="/exercise/htmlinsertion" className={styles.card}>
                <h3>HTML Insertion &rarr;</h3>
                <p>Lets Begin the Hunger Games.</p>
              </a>

              <a
                href="/exercise/csrf"
                className={styles.card}
              >
                <h3>CSRF Attack &rarr;</h3>
                <p>Getting on with the basics.</p>
              </a>

              <a
                href="/exercise/bruteforce"
                className={styles.card}
              >
                <h3> PassWORD Attacks &rarr;</h3>
                <p>
                  Wanna Know more about us, click here!!
          </p>
              </a>
              <a
                href="/exercise/sqlinjection"
                className={styles.card}
              >
                <h3> SQL Injection &rarr;</h3>
                <p>
                  Wanna Know more about us, click here!!
          </p>
              </a>
            </div>
            </main>
        </div>
        </div>
    )
}

export default index

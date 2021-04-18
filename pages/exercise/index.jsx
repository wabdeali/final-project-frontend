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
                <p>JavaScript Attacks are actually easy </p>
              </a>

              <a href="/exercise/htmlinsertion" className={styles.card}>
                <h3>HTML Insertion &rarr;</h3>
                <p>Man CSS is fun with hacking</p>
              </a>

              <a
                href="/exercise/csrf"
                className={styles.card}
              >
                <h3>CSRF Attack &rarr;</h3>
                <p>Never going to Let you go</p>
              </a>

              <a
                href="/exercise/bruteforce"
                className={styles.card}
              >
                <h3> PassWORD Attacks &rarr;</h3>
                <p>
                  Leave no Password Unturn (BruteForce)
          </p>
              </a>
              <a
                href="/exercise/sqlinjection"
                className={styles.card}
              >
                <h3> SQL Injection &rarr;</h3>
                <p>
                  Finally that SQL Claas comes in handy 
          </p>
              </a>
            </div>
            </main>
        </div>
        </div>
    )
}

export default index

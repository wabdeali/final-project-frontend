
import styles from "../styles/exercise.module.css"
function index() {
    return (
        <div>
            <div className={styles.bg} ></div>
        <div className={styles.bg1}>
          <main className={styles.main}>

            <h1 className={styles.title}>
              Welcome to <a href="https://wapenetrationtesting.netlify.app/">WAP!</a>
            </h1>

            <p className={styles.description}>
              Learning made easy for{' '}
              <code className={styles.code}>Web Application and Penitration</code>
            </p>

            <div className={styles.grid}>
              <a href="/downloads" className={styles.card}>
                <h3>Downloads &rarr;</h3>
                <p>VM Files and documents </p>
              </a>

              <a href="https://github.com/wabdeali/final-project-frontend" className={styles.card}>
                <h3>Github frontend &rarr;</h3>
                <p>final-project-frontend</p>
              </a>

              <a
                href="https://github.com/wabdeali/final-project-backend"
                className={styles.card}
              >
                <h3>Github Backend &rarr;</h3>
                <p>final-project-backend</p>
              </a>

              <a
                href="/exercise/bruteforce"
                className={styles.card}
              >
                <h3> Setup Manual &rarr;</h3>
                <p>
                  For People who dont fear the terminal
          </p>
              </a>
              
            </div>
            </main>
        </div>
        </div>
    )
}

export default index
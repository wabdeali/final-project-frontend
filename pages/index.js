import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>WAP</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
              <a href="/downloads" className={styles.card}>
                <h3>Downloads &rarr;</h3>
                <p>ISO files ,PDF and many other goodies. </p>
              </a>

              <a href="/exercise" className={styles.card}>
                <h3>Start Learning &rarr;</h3>
                <p>Lets Begin the Hunger Games.</p>
              </a>

              <a
                href="/linux"
                className={styles.card}
              >
                <h3>Linux Online &rarr;</h3>
                <p>Getting on with the basics.</p>
              </a>

              <a
                href="/about"
                className={styles.card}
              >
                <h3>About us &rarr;</h3>
                <p>
                  Wanna Know more about us, click here!!
          </p>
              </a>
            </div>

            <div className={styles.hero}>
              <div className={styles.blackop} >.
      <h1>Made with Next.JS</h1>;
      </div>
            </div>

            <div className={styles.writeup}>
              <div> <img src="https://64.media.tumblr.com/ebf74887520abe1b1fbed76f463af135/tumblr_pf527mw5Nx1vxnjybo1_1280.gifv" alt=" bg" /></div>
              <h1 className={styles.head}>Why Do This?</h1>
              <div className={styles.para}>

                <p>Become invaluable in our tech-driven world. Meet the global demand for problem-solvers with strong technical foundations and the agility to keep learning. So are you Ready?</p>
              </div>


            </div>
          </main>
        </div>

        <footer className={styles.footer}>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Project of 2021{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  )
}

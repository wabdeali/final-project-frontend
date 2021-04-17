import Link from 'next/link'
import styles from './Layout.module.scss'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <div style={{ overflowY: "hidden", height: "100vh" }}>
            <Navbar />
            <div className={styles.layoutContainer}>
                <div className={styles.layoutExercise}>
                    {children}
                </div>
                <div className={styles.layoutSidebar}>
                    <div className={styles.sidebarLinks}>
                        <p>Select type of Attack:</p>
                        <ul>
                            <li>
                                <Link href="/exercise/xss">XSS Attack</Link>
                            </li>
                            <li>
                                <Link href="/exercise/htmlinsertion">HTML Insertion Attack</Link>
                            </li>
                            <li>
                                <Link href="/exercise/csrf">CSRF Attack</Link>
                            </li>
                            <li>
                                <Link href="/exercise/bruteforce">Brute Force Attack</Link>
                            </li>
                            <li>
                                <Link href="/exercise/sqlinjection">SQL Injection Attack</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout

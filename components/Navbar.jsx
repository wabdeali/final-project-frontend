import styles from './Navbar.module.scss'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <p className={styles.logo}>LOGO</p>
            <ul>
                <li>Home</li>
                <li>Exercises</li>
                <li>Contribute</li>
                <li>Help</li>
            </ul>
        </nav>
    )
}

export default Navbar

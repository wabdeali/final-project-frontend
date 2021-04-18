import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss'

function Navbar() {
    const [width, setWidth] = useState("0px")

  const openNav = () => {
    setWidth("240px") 
  };

 
  const closeNav = () => {   
      setWidth("0px")
  };

  return (
   
    <div className={styles.Nav}>
      <h1><a href="/">WAP</a></h1>
      <button className={styles.menu} onClick={openNav}>=</button>
      <div id="mySidenav" className={styles.sidenav} style={{ width: width }}>
        <button className={styles.closebtn} onClick={closeNav} >
          &times;
        </button>
        <Link href="/">Home</Link>
        <Link href="/exercise">Exercises</Link>
        <Link href="/linux">LinuxOnline</Link>
        <Link href="/about">About us</Link>
        <Link href="/downloads">Downloads</Link>
    </div>
    </div>
  )
}

export default Navbar

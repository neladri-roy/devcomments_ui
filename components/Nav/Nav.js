import Link from 'next/link'
import React from 'react'
import styles from '/styles/Home.module.css'
const Nav = () => {
  return (
    <>
   <div className={styles.description}> 
    <Link href="/">
      DEVCOMMENTS.IO
    </Link>
    
    <span className={styles.code}>
   /blog
  </span>
   </div>
  
 </>
  )
}

export default Nav
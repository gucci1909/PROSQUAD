import React , {useEffect} from 'react'
import styles from '../styles/Navbar.module.css';
import { Button,Link } from '@chakra-ui/react';

const Navbar = () => {
return (
  <div>

    <div className={styles.container}>



    <nav className={styles.nav}>
   <ul className={styles.items}>
    <li>Home</li>
    <li>teacher</li>
    <li>student</li>
    <li>courses</li>
   </ul>
    </nav>
    </div>
    </div>
 )  
}









export default Navbar;
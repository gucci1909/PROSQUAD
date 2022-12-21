import styles from '../styles/Signin.module.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import {Link} from "@chakra-ui/react"

export default function Signin() {



  // useEffect(() => {
  //   Aos.init({ duration: 2000 })
  // })
  return (
    <div className={styles.container}>
      <div className={styles.box} data-aos='flip-left'>
        <form autoComplete="off" className={styles.form}>
          <h2 className={styles.sign}>Sign in</h2>
          <div className={styles.inputBox}>
            <input type="text" required="required" />
            <span>Email</span>
            <i />
          </div>
          <div className={styles.inputBox}>
            <input type="password" required="required" />
            <span>Password</span>
            <i />
          </div>
          <div className={styles.links}>
            <Link href="#">Forgot Password ?</Link>
            <Link href="signup">Signup</Link>
          </div>
          <input defaultValue="Login" className={styles.submit} />
        </form>
      </div>
    </div>
  );

};
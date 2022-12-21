import styles from '../styles/Signup.module.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import {Button, Link} from "@chakra-ui/react"

export default function Signin() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div className={styles.container}>
            <div className={styles.box} data-aos='flip-left'>
                <form autoComplete="off" className={styles.form}>
                    <h2 className={styles.sign}>Sign up</h2>
                    <div className={styles.inputBox}>
                        <input type="text" required="required" />
                        <span>Name</span>
                        <i />
                    </div>
                  
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
                    <Button className={styles.submit}>Signup</Button>
                    <Button className={styles.submit}>Student Access</Button>
                    <Button className={styles.submit}>Teacher Access</Button>
                  
                    <div className={styles.links}>
                        <Link to="#">Already Have Account ?</Link>
                        <Link href='/signin'>Signin</Link>
                    </div>

                </form>
            </div>
        </div>
    );

};
import styles from '../styles/Signup.module.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

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
                        <span>Phone</span>
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
                    <input defaultValue="Signup" className={styles.submit} />
                    <div>
                        <button className={styles.google}>
                            <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt='google'></img>
                            <p>Signup with Google</p>
                        </button>
                    </div>
                    <div>
                        <button className={styles.github}>
                            <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png' alt='google'></img>
                            <p>Signup with GitHub</p>
                        </button>
                    </div>
                    <div className={styles.links}>
                        <a href="#">Already Have Account ?</a>
                        <a href="signin">Signin</a>
                    </div>

                </form>
            </div>
        </div>
    );

};
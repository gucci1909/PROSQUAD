import styles from '../styles/Signin.module.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import Navbar from "../components/navbar"

export default function Signin() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  const [text, setText] = useState({
    email: "",
    password: ""
  });

  const handleForm = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  }

  const onClick = () => {
    setText("")
  }

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.box} data-aos='flip-left'>
          <form autoComplete="off" className={styles.form}>
            <h2 className={styles.sign}>Sign in</h2>
            <div className={styles.inputBox}>
              <input type="email" name="email" value={text.email} onChange={handleForm} required="required" />
              <span>Email</span>
              <i />
            </div>
            <div className={styles.inputBox}>
              <input type="password" name="password" value={text.password} onChange={handleForm} required="required" />
              <span>Password</span>
              <i />
            </div>
            <div className={styles.links}>
              <a href="#">Forgot Password ?</a>
              <a href="signup">Signup</a>
            </div>
            <button className={styles.submit} onClick={onClick}>Login</button>
          </form>
        </div>
      </div>
    </>
  );

};
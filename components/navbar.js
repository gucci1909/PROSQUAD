import Link from "next/link";
import styles from '../styles/Navbar.module.css';

export default function Navbar() {

    return (
        <div className={styles.container}>
            <Link href="/">Home</Link>
            <Link href="signin">Signin</Link>
            <Link href="signup">Signup</Link>
        </div>
    )

}

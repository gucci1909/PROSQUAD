import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Navbar() {

    return (
        <>
            <Link href="signin">Signin</Link>
            <Link href="signup">Signup</Link>
        </>
    )

}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Signup from './signup'
import Signin from './signin'
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  )
}

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

    <div>
      <div>
        <img src="https://www.teachforindia.org/assets/fellowship-desktop.png" alt="image"></img>
      </div>
      <div>
        <h2>Our Mission</h2>
        <h3>We believe leadership for education is the solution. We are building a movement of leaders who will eliminate educational inequity in India using technology. </h3>
      </div>
      <div>
        <h2>The Fellowship</h2>
        <h3>We are providing an opportunity for the brightest and most promising youth, from the best universities and workplaces, to serve as full-time teachers to children from low-income communities in under-resourced schools. Through two years of teaching and working with key education stakeholders, our Fellows are exposed to the grassroots realities of education system and cultivate the knowledge, skills, and mindsets needed to attain positions of leadership in and beyond education, working collectively to build a vibrant movement for educational equity across the globe. </h3>
      </div>
      <div>
        <h2>Join The Movement</h2>
        <h3>The pandemic has hit the youth in poor families the most. Now more than ever we need to solve the education crisis. This will lead to a safer, happier, more prosperous socirty for all of us. Getting there will take a movement of all of us, for all our youth. Join the movement.</h3>
      </div>
    </div>

  )
}

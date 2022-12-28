import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div>
      <h1 className='jumbotron square text-center '>Hello World!</h1>
    </div>
  )
}

export default Home;
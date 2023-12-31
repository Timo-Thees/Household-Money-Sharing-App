import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HouseholdOverview from './householdOverview'
import Login from './login'
import { useState } from 'react'
import useLocalStorage from '@/components/useLocalStorage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [loginId, setLoginId] = useLocalStorage("household app user data", [])

  return (
    <>
      <Head>
        <title>CashMoney - equal share</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        {loginStatus === false ? 
        <Login setLoginStatus={setLoginStatus} loginId={loginId} setLoginId={setLoginId}/> : 
        <div>        
          <HouseholdOverview loginStatus={loginStatus}/>
          <button onClick={()=>setLoginStatus(false)}>Log out</button>
        </div>}
      </main>
    </>
  )
}
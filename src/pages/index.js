import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Layout/Navbar'
import Hero from '@/components/Home/Hero'
import About from '@/components/Home/About'
import Companies from '@/components/Home/Companies'
import Features from '@/components/Home/Features'

import CompaniesDetails from '@/components/Home/companies-details'
import Contact from '@/components/Home/Contact'
import Footer from '@/components/Layout/Footer'
import Team from '@/components/Home/Team'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Companies/>
    {/* <Features/> */}
    <CompaniesDetails/>
    <Team/>
    <Contact/>
    <Footer/>
    </>
  )
}

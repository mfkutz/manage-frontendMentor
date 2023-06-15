import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import bgDesktop from '../assets/bg/tablet-pattern.svg'
import HeroData from '../components/HeroData'
import What from '../components/What'
import Separator from '../components/Separator'
import BannerOrange from '../components/BannerOrange'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'


const Home = () => {
    return (
        <div className='z-10 lg:pt-[50px] pt-[40px] flex flex-col items-center overflow-x-hidden relative'>
            <img src={bgDesktop} alt="" className='absolute -z-10 -top-[9rem] -right-[7rem]' />
            <img src={bgDesktop} alt="" className='absolute -z-10 lg:bottom-[40rem] lg:-left-[30rem] left-[19rem] bottom-[128rem] lg:w-[815px] ' />
            <Header />
            <Hero />
            <HeroData />
            <What />
            <Carousel />
            <Separator />
            <BannerOrange />
            <Footer />
        </div>
    )
}

export default Home
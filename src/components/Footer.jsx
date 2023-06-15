import { Link } from 'react-router-dom'
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiPinterestFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import LogoFoo from './LogoFoo';
import { useState } from 'react';

const Footer = () => {

    const [emailState, setEmailState] = useState('')
    const [notification, setNotification] = useState(false)
    const [notificationSent, setNotificationSent] = useState(false)

    const validateInput = (e) => {
        e.preventDefault()


        if (!emailState || !/\S+@\S+\.\S+/.test(emailState)) {
            setNotification(true);
            setNotificationSent(false)
        } else {
            setNotification(false);
            setEmailState('')
            setNotificationSent(true)
        }
    }
    const handleEmailChange = (e) => {
        setEmailState(e.target.value);
    }

    return (
        <div className='bg-Very-Dark-Blue w-full flex lg:flex-row flex-col-reverse lg:justify-evenly lg:py-14 '>


            {/* /////////////////////////////////////logo and social ////////////////////////////////////////*/}
            <div className='flex flex-col lg:justify-between lg:items-start'>
                <div>
                    <LogoFoo color={'#FFFFFF'} />
                </div>
                <div className='flex justify-between gap-2'>
                    <RiFacebookBoxFill color='white' size='26px' className='socialIcon' />
                    <RiYoutubeFill color='white' size='26px' className='socialIcon' />
                    <RiTwitterFill color='white' size='26px' className='socialIcon' />
                    <RiPinterestFill color='white' size='26px' className='socialIcon' />
                    <RiInstagramLine color='white' size='26px' className='socialIcon' />
                </div>
            </div>

            {/* /////////////////////////////////////links ////////////////////////////////////////*/}
            <div className='flex gap-28'>
                <div className='flex flex-col gap-3'>
                    <Link to='/'> <div className='text-white text-[15px] hover:text-Bright-Red cursor-pointer'>Home</div></Link>
                    <Link to='pricing'><div className='text-white text-[15px] hover:text-Bright-Red cursor-pointer'>Pricing</div></Link>
                    <Link to='products'><div className='text-white text-[15px] hover:text-Bright-Red cursor-pointer'>Products</div></Link>
                    <Link to='about'><div className='text-white text-[15px] hover:text-Bright-Red cursor-pointer'>About Us</div></Link>
                </div>

                <div className='flex flex-col gap-3'>
                    <Link to='careers'><div className='text-white text-[15px] hover:text-Bright-Red cursor-pointer'>Careers</div></Link>
                    <Link to='community'><div className='text-white text-[15px] hover:text-Bright-Red cursor-pointer'>Community</div></Link>
                    <Link to='privacy'><div className='text-white text-[15px] hover:text-Bright-Red cursor-pointer'>Privacy Policy</div></Link>
                </div>
            </div>
            {/* /////////////////////////////////////form ////////////////////////////////////////*/}
            <div>
                <form onSubmit={validateInput} className='flex flex-col lg:justify-end '>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <input
                                type="text"
                                className='rounded-3xl text-[13px] px-5 py-3 styleInput'
                                placeholder='Updates in your inbox...'
                                value={emailState}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <button className='text-white text-[12px] bg-Bright-Red hover:bg-[#f88f75] px-6 py-3 rounded-3xl'>
                            Go
                        </button>
                    </div>
                    <p className={`text-Bright-Red text-[10px] pt-2 pl-2 italic ${notification ? 'block' : 'hidden'}`}>Please insert a valid E-mail</p>
                    <p className={`text-Bright-Red text-[10px] pt-2 pl-2 italic ${notificationSent ? 'block' : 'hidden'}`}>E-mail sent :D</p>
                    <p className='text-Dark-Grayish-Blue hidden lg:block text-[12px] text-right pt-[65px]'>Copyright 2020. All Rights Reserved</p>
                </form>
            </div>

        </div>
    )
}

export default Footer
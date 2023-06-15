import logo from '../assets/logo/logo.svg'
import Button from './Button'
import iconClose from '../assets/icons/icon-close.svg'
import iconMenu from '../assets/icons/icon-hamburger.svg'
import { useState } from 'react'

const Header = () => {
    const [menuState, setMenuState] = useState(false)

    return (
        <div className='flex lg:justify-evenly justify-between px-7 lg:mb-0 mb-9 items-center min-w-full relative'>
            <div>
                <img src={logo} alt="logo" className='w-[105px] lg:w-[146px]' />
            </div>
            <div>
                {/* /////////////////////////////////NAV DESKTOP//////////////////////////////////// */}
                <nav className='lg:block hidden'>
                    <ul className='flex gap-8 flex-grow '>
                        <li className='text-[12px] text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue cursor-pointer'>Pricing</li>
                        <li className='text-[12px] text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue cursor-pointer'>Product</li>
                        <li className='text-[12px] text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue cursor-pointer'>About Us</li>
                        <li className='text-[12px] text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue cursor-pointer'>Careers</li>
                        <li className='text-[12px] text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue cursor-pointer'>Community</li>
                    </ul>
                </nav>
                {/* /////////////////////////////////NAV MOBILE//////////////////////////////////// */}
                <nav className={`lg:hidden ${menuState ? 'block' : 'hidden'} flex absolute top-16 right-7 bg-white min-w-[310px] min-h-[300px] justify-center rounded-[4px] specialBackground z-50`}>
                    <ul className='flex gap-7 flex-col justify-center text-center'>
                        <li className='text-[14px] text-Dark-Blue font-bold hover:text-Dark-Grayish-Blue cursor-pointer'>Pricing</li>
                        <li className='text-[14px] text-Dark-Blue font-bold hover:text-Dark-Grayish-Blue cursor-pointer'>Product</li>
                        <li className='text-[14px] text-Dark-Blue font-bold hover:text-Dark-Grayish-Blue cursor-pointer'>About Us</li>
                        <li className='text-[14px] text-Dark-Blue font-bold hover:text-Dark-Grayish-Blue cursor-pointer'>Careers</li>
                        <li className='text-[14px] text-Dark-Blue font-bold hover:text-Dark-Grayish-Blue cursor-pointer'>Community</li>
                    </ul>
                </nav>
            </div>
            <div className='lg:block hidden'>
                <Button color={'Bright-Red'} />
            </div>
            <div className='lg:hidden mb-2 items-center' onClick={() => setMenuState(!menuState)}>
                <img src={iconMenu} alt="icon menu" className={`${menuState ? 'hidden' : ''} h-5`} />
                <img src={iconClose} alt="icon menu" className={`${menuState ? 'block' : 'hidden'} h-5 `} />

            </div>
        </div>
    )
}

export default Header
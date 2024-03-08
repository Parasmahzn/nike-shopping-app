import { useState } from 'react';
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const toggleNavMenu = () => setIsNavMenuOpen((prevState) => !prevState);

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt='Logo'
                        width={130}
                        height={29}
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block' onClick={toggleNavMenu}>
                    <img
                        src={hamburger}
                        alt='Hamburger'
                        width={25}
                        height={25}
                    />
                </div>
                {isNavMenuOpen && <div>
                    <ul>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className='font-montserrat leading-normal text-lg text-slate-gray'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>}
            </nav>
        </header>
    )
}

export default Nav
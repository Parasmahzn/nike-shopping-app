import { useState } from 'react';
import { headerLogo } from '../assets/images'
import { hamburger, close } from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

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
                <div className='hidden max-lg:block justify-end items-center'>
                    <img
                        src={toggle ? close : hamburger}
                        alt='menu'
                        width={25}
                        height={25}
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-red-400 absolute top-20 right-0 mx-2 my-2 min-w-[140px] rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li key={nav.label}
                                    className={`font-montserrat font-medium cursor-pointer text-[16px] ${active === nav.label ? "text-slate-gray" : "text-white"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.label);
                                    }}
                                >
                                    <a href={nav.href}>{nav.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav
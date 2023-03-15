import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { useRouter } from 'next/router';
import { RiAccountCircleFill, RiDashboardFill } from 'react-icons/ri'
import { MdLeaderboard } from 'react-icons/md'
import { RiHistoryFill } from 'react-icons/ri'
import { IoMdPhotos } from 'react-icons/io'
import { SiPivotaltracker } from 'react-icons/si'
import { RiSettings4Fill } from 'react-icons/ri'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navBg, setNavBg] = useState('#030303');
    const [linkColor, setLinkColor] = useState('#9D9D9E');

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }

    }, [nav])

    const [shadow, setShadow] = useState(false);
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 10) {
                setShadow(true)
            } else {
                setShadow(false);
            }





        }
        window.addEventListener('scroll', handleShadow)
        //console.log("ShadowEffect")

        return () => {
            window.removeEventListener('scroll', handleShadow)
            //console.log("Removed")
        }

    }, [])

    const router = useRouter();
    return (
        <div className={shadow ? ('fixed backdrop-blur-md bg-white/70 w-full h-20 z-[100]') : ('fixed bg-white w-full h-20 z-[100]')}>
            <div className='flex justify-between items-center w-full h-full  px-4 2xl:px-16'>
                <div>
                    <p className=' tracking-widest font-medium text-xl text-black'>SpendWise</p>
                </div>
                <div>
                    <ul className='hidden md:flex  text-[#9D9D9E]'>
                        <Link href='/#'>
                            <li className=" text-md mx-5 font-medium uppercase hover:text-[#9D9D9E] hover:translate-y-[-5px]  ease-in duration-150">Dashboard</li>
                        </Link>
                        <Link href='/#'>
                            <li onClick={() => setNav(false)} className=" text-md mx-5 font-medium uppercase hover:text-[#9D9D9E] hover:translate-y-[-5px]  ease-in duration-150">Budgets</li>
                        </Link>
                        <Link href='/#'>
                            <li className=" text-md mx-5 font-medium uppercase hover:text-[#9D9D9E] hover:translate-y-[-5px]  ease-in duration-150">Expense Tracker</li>
                        </Link>
                        <Link href='/#'>
                            <li className=" text-md mx-5 font-medium uppercase hover:text-[#9D9D9E] hover:translate-y-[-5px]  ease-in duration-150">History</li>
                        </Link>


                    </ul>
                </div>
                <div>
                    <div>
                        <ul className='hidden md:flex  text-[#9D9D9E]'>

                            <Link href='/#'>
                                <li className=" text-md mx-2 font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150"><RiAccountCircleFill size={30}/></li>
                            </Link>
                            <Link href='/#'>
                                <li className=" text-md mx-2 font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150"><RiSettings4Fill className=' hover:rotate-90 transition-all ease-in duration-200' size={30}/></li>
                            </Link>
                            
                        </ul>

                    </div>

                    <div onClick={handleNav} className='md:hidden cursor-pointer'>

                        <AiOutlineMenu size={25} className="hover:text-gray-500 text-black ease-in duration-200" />
                    </div>




                </div>



            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 h-full w-full bg-black/70' : ''}>
                <div className={nav ? 'fixed  right-0 top-0 bg-[#000000] bg-gradient-to-b from-[#000000] to-[#000000] px-4 py-5 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200' :
                    'fixed  right-[-100%] top-0 bg-[#000000] px-4 py-5  h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200'}>
                    <div className=' flex flex-col w-full h-full justify-between'>
                        <div className=''>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className=' text-white tracking-widest font-medium text-xl'>SpendWise</p>
                                </div>
                                <div onClick={handleNav} className='p-2 rounded-full shadow-sm hover:shadow-sm shadow-[#030303] bg-white cursor-pointer text-black hover:shadow-gray-400 hover:opacity-[0.8] active:opacity-[0.5] transition-all ease-in duration-200 '>
                                    <AiOutlineClose size={18} />
                                </div>

                            </div>
                            <div className=' border-b-2 border-gray-300 text-[#f5f5f5]'>
                                <p className='py-3 w-[85%] md:w-[90%] text-lg md:text-3xl text-gray-500 font-bold font-sans font-light'>Your Budget Buddy</p>
                            </div>



                        </div>
                        <div className='h-full  flex flex-col justify-center'>
                            <ul className='uppercase text-white flex flex-col justify-between gap-9' >
                                <Link href='/'>
                                    <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/' ? "text-yellow-400" : ""} hover:bg-[#fe0109] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`}><div className=' flex items-center justify-start'><RiDashboardFill className=' mr-2' />Dashboard</div></li>
                                </Link>
                                <Link href='/points'>
                                    <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/points' ? "text-yellow-400" : ""} hover:bg-[#fe0109] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`}><div className=' flex items-center justify-start'><MdLeaderboard className=' mr-2' />Budgets</div></li>
                                </Link>
                                <Link href='/photos'>
                                    <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/photos' ? "text-yellow-400" : ""} hover:bg-[#fe0109] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`}><div className=' flex items-center justify-start'><SiPivotaltracker className=' mr-2' />Expense Tracker</div></li>
                                </Link>
                                <Link href='/schedule'>
                                    <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/schedule' ? "text-yellow-400" : ""} hover:bg-[#fe0109] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`} ><div className=' flex items-center justify-start'><RiHistoryFill className=' mr-2' />History</div></li>
                                </Link>
                                
                                <Link href='/winners'>
                                    <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/winners' ? "text-yellow-400" : ""} hover:bg-[#fe0109] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`}><div className=' flex items-center justify-start'><RiSettings4Fill className=' mr-2' />Settings</div></li>
                                </Link>


                            </ul>

                        </div>
                        <div className='flex flex-col gap-2 bottom-10 my-4'>
                            <p className='uppercase pl-2 tracking-widest text-gray-500 font-medium'>Your Account</p>
                            <div>
                                <div className='flex justify-start gap-5 items-center w-full  sm:w-[85%]'>
                                    <Link href="https://instagram.com/sparx.2023?igshid=YmMyMTA2M2Y=">
                                        <div className='rounded-full bg-white text-black p-4 cursor-pointer ease-in duration-300'>
                                            <FaInstagram size={20} className="hover:scale-150 transition-all ease-in duration-150" />
                                        </div>
                                    </Link>

                                    <div className='rounded-full bg-white text-black p-4 cursor-pointer ease-in duration-300'>
                                        <RiAccountCircleFill size={20} className="hover:scale-150 transition-all ease-in duration-150" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Navbar
import { React, useRef, useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { PiClockBold } from "react-icons/pi";
import { FaRegBell, FaRegEdit } from "react-icons/fa";
import { BsChatLeft, BsFullscreen } from "react-icons/bs";
import { LuHome } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import { MdErrorOutline, MdOutlinePersonAddAlt, MdOutlinePersonOutline, MdOutlineSettings, MdHelpOutline } from "react-icons/md";
import Analystic from '../analystic';
import Side from '../side/side';
import usaimg from './../../img/us.png'
import russianimg from './../../img/ru.png'
import spanish from './../../img/es.png'
import german from './../../img/de.png'
import boyimg from './../../img/avatar.jpg'
import girl1img from './../../img/avatar-5.jpg'
import girl2img from './../../img/avatar-4.jpg'
import girl3img from './../../img/avatar-3.jpg'
import boy2img from './../../img/avatar-2.jpg'
import { useEffect } from 'react';

function header({pagesfunc , smpagesfunc}) {
    const megamenu = useRef()
    const resources = useRef()
    const notif = useRef()
    const chat = useRef()
    const flags = useRef('flags')
    const minimenu = useRef()
    const [flag, setFlag] = useState(false)
    const header = useRef()

    useEffect(() => {
        window.addEventListener('click', () => {
            closer2()
        })
    }, [])
    function closer2() {
        if (megamenu.current.getAttribute('data-stat') == 'false') {
            megamenu.current.classList.add('hidden')
            megamenu.current.classList.remove('flex')
            megamenu.current.classList.add('translate-y-[-20px]')
            megamenu.current.classList.remove('opacity-1')
            megamenu.current.classList.add('opacity-0')
            megamenu.current.setAttribute('data-stat', 'true');
        }
        if (resources.current.getAttribute('data-stat') == 'false') {
            resources.current.classList.add('hidden')
            resources.current.classList.remove('flex')
            resources.current.classList.add('translate-y-[-20px]')
            resources.current.classList.remove('opacity-1')
            resources.current.classList.add('opacity-0')
            resources.current.setAttribute('data-stat', 'true');
        }
        if (notif.current.getAttribute('data-stat') == 'false') {
            notif.current.classList.add('hidden')
            notif.current.classList.remove('flex')
            notif.current.classList.add('translate-y-[-20px]')
            notif.current.classList.remove('opacity-1')
            notif.current.classList.add('opacity-0')
            notif.current.setAttribute('data-stat', 'true');
        }
        if (chat.current.getAttribute('data-stat') == 'false') {
            chat.current.classList.add('hidden')
            chat.current.classList.remove('flex')
            chat.current.classList.add('translate-y-[-20px]')
            chat.current.classList.remove('opacity-1')
            chat.current.classList.add('opacity-0')
            chat.current.setAttribute('data-stat', 'true');
        }
        if (flags.current.getAttribute('data-stat') == 'false') {
            flags.current.classList.add('hidden')
            flags.current.classList.remove('flex')
            flags.current.classList.add('translate-y-[-20px]')
            flags.current.classList.remove('opacity-1')
            flags.current.classList.add('opacity-0')
            flags.current.setAttribute('data-stat', 'true');
        }
        if (minimenu.current.getAttribute('data-stat') == 'false') {
            minimenu.current.classList.add('hidden')
            minimenu.current.classList.remove('flex')
            minimenu.current.classList.add('translate-y-[-20px]')
            minimenu.current.classList.remove('opacity-1')
            minimenu.current.classList.add('opacity-0')
            minimenu.current.setAttribute('data-stat', 'true');
        }
    }
    function closer(name) {
        if (name == 'megamenu') {
            if (resources.current.getAttribute('data-stat') == 'false') {
                resources.current.classList.add('hidden')
                resources.current.classList.remove('flex')
                resources.current.classList.add('translate-y-[-20px]')
                resources.current.classList.remove('opacity-1')
                resources.current.classList.add('opacity-0')
                resources.current.setAttribute('data-stat', 'true');
            }
            if (notif.current.getAttribute('data-stat') == 'false') {
                notif.current.classList.add('hidden')
                notif.current.classList.remove('flex')
                notif.current.classList.add('translate-y-[-20px]')
                notif.current.classList.remove('opacity-1')
                notif.current.classList.add('opacity-0')
                notif.current.setAttribute('data-stat', 'true');
            }
            if (chat.current.getAttribute('data-stat') == 'false') {
                chat.current.classList.add('hidden')
                chat.current.classList.remove('flex')
                chat.current.classList.add('translate-y-[-20px]')
                chat.current.classList.remove('opacity-1')
                chat.current.classList.add('opacity-0')
                chat.current.setAttribute('data-stat', 'true');
            }
            if (flags.current.getAttribute('data-stat') == 'false') {
                flags.current.classList.add('hidden')
                flags.current.classList.remove('flex')
                flags.current.classList.add('translate-y-[-20px]')
                flags.current.classList.remove('opacity-1')
                flags.current.classList.add('opacity-0')
                flags.current.setAttribute('data-stat', 'true');
            }
            if (minimenu.current.getAttribute('data-stat') == 'false') {
                minimenu.current.classList.add('hidden')
                minimenu.current.classList.remove('flex')
                minimenu.current.classList.add('translate-y-[-20px]')
                minimenu.current.classList.remove('opacity-1')
                minimenu.current.classList.add('opacity-0')
                minimenu.current.setAttribute('data-stat', 'true');
            }
        }
        if (name == 'resources') {
            if (megamenu.current.getAttribute('data-stat') == 'false') {
                megamenu.current.classList.add('hidden')
                megamenu.current.classList.remove('flex')
                megamenu.current.classList.add('translate-y-[-20px]')
                megamenu.current.classList.remove('opacity-1')
                megamenu.current.classList.add('opacity-0')
                megamenu.current.setAttribute('data-stat', 'true');
            }
            if (notif.current.getAttribute('data-stat') == 'false') {
                notif.current.classList.add('hidden')
                notif.current.classList.remove('flex')
                notif.current.classList.add('translate-y-[-20px]')
                notif.current.classList.remove('opacity-1')
                notif.current.classList.add('opacity-0')
                notif.current.setAttribute('data-stat', 'true');
            }
            if (chat.current.getAttribute('data-stat') == 'false') {
                chat.current.classList.add('hidden')
                chat.current.classList.remove('flex')
                chat.current.classList.add('translate-y-[-20px]')
                chat.current.classList.remove('opacity-1')
                chat.current.classList.add('opacity-0')
                chat.current.setAttribute('data-stat', 'true');
            }
            if (flags.current.getAttribute('data-stat') == 'false') {
                flags.current.classList.add('hidden')
                flags.current.classList.remove('flex')
                flags.current.classList.add('translate-y-[-20px]')
                flags.current.classList.remove('opacity-1')
                flags.current.classList.add('opacity-0')
                flags.current.setAttribute('data-stat', 'true');
            }
            if (minimenu.current.getAttribute('data-stat') == 'false') {
                minimenu.current.classList.add('hidden')
                minimenu.current.classList.remove('flex')
                minimenu.current.classList.add('translate-y-[-20px]')
                minimenu.current.classList.remove('opacity-1')
                minimenu.current.classList.add('opacity-0')
                minimenu.current.setAttribute('data-stat', 'true');
            }
        }
        if (name == 'notif') {
            if (megamenu.current.getAttribute('data-stat') == 'false') {
                megamenu.current.classList.add('hidden')
                megamenu.current.classList.remove('flex')
                megamenu.current.classList.add('translate-y-[-20px]')
                megamenu.current.classList.remove('opacity-1')
                megamenu.current.classList.add('opacity-0')
                megamenu.current.setAttribute('data-stat', 'true');
            }
            if (resources.current.getAttribute('data-stat') == 'false') {
                resources.current.classList.add('hidden')
                resources.current.classList.remove('flex')
                resources.current.classList.add('translate-y-[-20px]')
                resources.current.classList.remove('opacity-1')
                resources.current.classList.add('opacity-0')
                resources.current.setAttribute('data-stat', 'true');
            }
            if (chat.current.getAttribute('data-stat') == 'false') {
                chat.current.classList.add('hidden')
                chat.current.classList.remove('flex')
                chat.current.classList.add('translate-y-[-20px]')
                chat.current.classList.remove('opacity-1')
                chat.current.classList.add('opacity-0')
                chat.current.setAttribute('data-stat', 'true');
            }
            if (flags.current.getAttribute('data-stat') == 'false') {
                flags.current.classList.add('hidden')
                flags.current.classList.remove('flex')
                flags.current.classList.add('translate-y-[-20px]')
                flags.current.classList.remove('opacity-1')
                flags.current.classList.add('opacity-0')
                flags.current.setAttribute('data-stat', 'true');
            }
            if (minimenu.current.getAttribute('data-stat') == 'false') {
                minimenu.current.classList.add('hidden')
                minimenu.current.classList.remove('flex')
                minimenu.current.classList.add('translate-y-[-20px]')
                minimenu.current.classList.remove('opacity-1')
                minimenu.current.classList.add('opacity-0')
                minimenu.current.setAttribute('data-stat', 'true');
            }
        } if (name == 'chat') {
            if (megamenu.current.getAttribute('data-stat') == 'false') {
                megamenu.current.classList.add('hidden')
                megamenu.current.classList.remove('flex')
                megamenu.current.classList.add('translate-y-[-20px]')
                megamenu.current.classList.remove('opacity-1')
                megamenu.current.classList.add('opacity-0')
                megamenu.current.setAttribute('data-stat', 'true');
            }
            if (resources.current.getAttribute('data-stat') == 'false') {
                resources.current.classList.add('hidden')
                resources.current.classList.remove('flex')
                resources.current.classList.add('translate-y-[-20px]')
                resources.current.classList.remove('opacity-1')
                resources.current.classList.add('opacity-0')
                resources.current.setAttribute('data-stat', 'true');
            }
            if (notif.current.getAttribute('data-stat') == 'false') {
                notif.current.classList.add('hidden')
                notif.current.classList.remove('flex')
                notif.current.classList.add('translate-y-[-20px]')
                notif.current.classList.remove('opacity-1')
                notif.current.classList.add('opacity-0')
                notif.current.setAttribute('data-stat', 'true');
            }
            if (flags.current.getAttribute('data-stat') == 'false') {
                flags.current.classList.add('hidden')
                flags.current.classList.remove('flex')
                flags.current.classList.add('translate-y-[-20px]')
                flags.current.classList.remove('opacity-1')
                flags.current.classList.add('opacity-0')
                flags.current.setAttribute('data-stat', 'true');
            }
            if (minimenu.current.getAttribute('data-stat') == 'false') {
                minimenu.current.classList.add('hidden')
                minimenu.current.classList.remove('flex')
                minimenu.current.classList.add('translate-y-[-20px]')
                minimenu.current.classList.remove('opacity-1')
                minimenu.current.classList.add('opacity-0')
                minimenu.current.setAttribute('data-stat', 'true');
            }
        } if (name == 'flags') {
            if (megamenu.current.getAttribute('data-stat') == 'false') {
                megamenu.current.classList.add('hidden')
                megamenu.current.classList.remove('flex')
                megamenu.current.classList.add('translate-y-[-20px]')
                megamenu.current.classList.remove('opacity-1')
                megamenu.current.classList.add('opacity-0')
                megamenu.current.setAttribute('data-stat', 'true');
            }
            if (resources.current.getAttribute('data-stat') == 'false') {
                resources.current.classList.add('hidden')
                resources.current.classList.remove('flex')
                resources.current.classList.add('translate-y-[-20px]')
                resources.current.classList.remove('opacity-1')
                resources.current.classList.add('opacity-0')
                resources.current.setAttribute('data-stat', 'true');
            }
            if (notif.current.getAttribute('data-stat') == 'false') {
                notif.current.classList.add('hidden')
                notif.current.classList.remove('flex')
                notif.current.classList.add('translate-y-[-20px]')
                notif.current.classList.remove('opacity-1')
                notif.current.classList.add('opacity-0')
                notif.current.setAttribute('data-stat', 'true');
            }
            if (chat.current.getAttribute('data-stat') == 'false') {
                chat.current.classList.add('hidden')
                chat.current.classList.remove('flex')
                chat.current.classList.add('translate-y-[-20px]')
                chat.current.classList.remove('opacity-1')
                chat.current.classList.add('opacity-0')
                chat.current.setAttribute('data-stat', 'true');
            }
            if (minimenu.current.getAttribute('data-stat') == 'false') {
                minimenu.current.classList.add('hidden')
                minimenu.current.classList.remove('flex')
                minimenu.current.classList.add('translate-y-[-20px]')
                minimenu.current.classList.remove('opacity-1')
                minimenu.current.classList.add('opacity-0')
                minimenu.current.setAttribute('data-stat', 'true');
            }
        } if (name == 'minimenu') {
            if (megamenu.current.getAttribute('data-stat') == 'false') {
                megamenu.current.classList.add('hidden')
                megamenu.current.classList.remove('flex')
                megamenu.current.classList.add('translate-y-[-20px]')
                megamenu.current.classList.remove('opacity-1')
                megamenu.current.classList.add('opacity-0')
                megamenu.current.setAttribute('data-stat', 'true');
            }
            if (resources.current.getAttribute('data-stat') == 'false') {
                resources.current.classList.add('hidden')
                resources.current.classList.remove('flex')
                resources.current.classList.add('translate-y-[-20px]')
                resources.current.classList.remove('opacity-1')
                resources.current.classList.add('opacity-0')
                resources.current.setAttribute('data-stat', 'true');
            }
            if (notif.current.getAttribute('data-stat') == 'false') {
                notif.current.classList.add('hidden')
                notif.current.classList.remove('flex')
                notif.current.classList.add('translate-y-[-20px]')
                notif.current.classList.remove('opacity-1')
                notif.current.classList.add('opacity-0')
                notif.current.setAttribute('data-stat', 'true');
            }
            if (chat.current.getAttribute('data-stat') == 'false') {
                chat.current.classList.add('hidden')
                chat.current.classList.remove('flex')
                chat.current.classList.add('translate-y-[-20px]')
                chat.current.classList.remove('opacity-1')
                chat.current.classList.add('opacity-0')
                chat.current.setAttribute('data-stat', 'true');
            }
            if (flags.current.getAttribute('data-stat') == 'false') {
                flags.current.classList.add('hidden')
                flags.current.classList.remove('flex')
                flags.current.classList.add('translate-y-[-20px]')
                flags.current.classList.remove('opacity-1')
                flags.current.classList.add('opacity-0')
                flags.current.setAttribute('data-stat', 'true');
            }
        }

    }

    const sidepanel = (e) => {
        pagesfunc(flag)
        if (flag) {
            header.current.classList.add('md:w-[calc(100%-260px)]')
            header.current.classList.remove('w-[100%]')
            setFlag(!flag)
        } else {
            header.current.classList.add('w-[100%]')
            header.current.classList.remove('md:w-[calc(100%-260px)]')
            setFlag(!flag)
        }
    }
    const smsidepanel = (e) => {
        smpagesfunc(flag)
        if (flag) {
            header.current.classList.add('right-[-260px]')
            header.current.classList.remove('right-0')
            setFlag(!flag)
        } else {
            header.current.classList.remove('right-[-260px]')
            header.current.classList.add('right-0')
            setFlag(!flag)
        }
    }

    const megaandresource = (e) => {
        e.stopPropagation()
        let _ul = e.currentTarget.children[2]
        let name = _ul.getAttribute('data-name')
        closer(name)
        _ul.addEventListener('click', (val) => {
            val.stopPropagation()
        })
        let stat = _ul.getAttribute('data-stat')
        if (stat == 'true') {
            _ul.classList.add('flex')
            _ul.classList.remove('hidden')
            _ul.setAttribute('data-stat', 'false')
            setTimeout(() => {
                _ul.classList.remove('translate-y-[-20px]')
                _ul.classList.remove('opacity-0')
                _ul.classList.add('opacity-1')
            }, 100);
        } else {
            setTimeout(() => {
                _ul.classList.remove('flex')
                _ul.classList.add('hidden')
            }, 200);
            _ul.classList.add('translate-y-[-20px]')
            _ul.classList.add('opacity-0')
            _ul.classList.remove('opacity-1')
            _ul.setAttribute('data-stat', 'true')
        }
    }

    const notifandchat = (e) => {
        e.stopPropagation()
        let _ul = e.currentTarget.parentElement.nextElementSibling
        let name = _ul.getAttribute('data-name')
        closer(name)
        let stat = _ul.getAttribute('data-stat')
        if (stat == 'true') {
            _ul.classList.remove('hidden')
            _ul.classList.add('flex')
            setTimeout(() => {
                _ul.classList.remove('opacity-0')
                _ul.classList.add('translate-y-[-20px]')
                _ul.classList.add('opacity-1')
            }, 100);
            _ul.setAttribute('data-stat', 'false')
        } else {
            setTimeout(() => {
                _ul.classList.add('hidden')
                _ul.classList.remove('flex')
            }, 100);
            _ul.classList.add('opacity-0')
            _ul.classList.remove('translate-y-[-20px]')
            _ul.classList.remove('opacity-1')
            _ul.setAttribute('data-stat', 'true')
        }
    }

    const language = (e) => {
        e.stopPropagation()
        let _ul = e.currentTarget.children[1]
        let name = _ul.getAttribute('data-name')
        closer(name)
        let stat = _ul.getAttribute('data-stat')
        if (stat == 'true') {
            _ul.classList.remove('hidden')
            _ul.classList.add('flex')
            setTimeout(() => {
                _ul.classList.remove('opacity-0')
                _ul.classList.add('opacity-1')
                _ul.classList.remove('translate-y-[-20px]')
                _ul.classList.add('translate-y-0]')
            }, 100);
            _ul.setAttribute('data-stat', 'false')
        } else {
            _ul.classList.add('opacity-0')
            _ul.classList.remove('opacity-1')
            _ul.classList.add('translate-y-[-20px]')
            _ul.classList.remove('translate-y-0]')
            setTimeout(() => {
                _ul.classList.add('hidden')
                _ul.classList.remove('flex')
            }, 100);
            _ul.setAttribute('data-stat', 'true')
        }
    }
    const smallMenu = (e) => {
        e.stopPropagation()
        let div = e.currentTarget.nextElementSibling
        let stat = div.getAttribute('data-stat')
        let name = div.getAttribute('data-name')
        closer(name)
        if (stat == 'true') {
            div.classList.add('flex')
            div.classList.remove('hidden')
            setTimeout(() => {
                div.classList.add('opacity-1')
                div.classList.remove('opacity-0')
                div.classList.add('translate-y-0')
                div.classList.remove('translate-y-[-20px]')
            }, 100);
            div.setAttribute('data-stat', 'false')
        } else {
            div.classList.remove('opacity-1')
            div.classList.add('opacity-0')
            div.classList.remove('translate-y-0')
            div.classList.add('translate-y-[-20px]')
            setTimeout(() => {
                div.classList.remove('flex')
                div.classList.add('hidden')
            }, 100);
            div.setAttribute('data-stat', 'true')
        }
    }

    return (
        <>
            <Side sidekey={flag} />
            <div ref={header} className='w-full md:w-[calc(100%-260px)] duration-[0.2s] flex flex-wrap h-[70px] bg-[#19222c] absolute top-0 right-[-260px] md:right-0 z-[10]'>
                <div className='w-full h-full flex flex-wrap relative'>
                    <div className=' w-[20%] md:w-[5%] h-full hidden md:flex items-center justify-center '>
                        <HiMenuAlt2 data-flag={flag}  onClick={(event) => { sidepanel(event) }} className='text-[35px] text-white hover:text-[#3b7ddd] cursor-pointer' />
                    </div>
                    <div className=' w-[20%] md:w-[5%] h-full flex md:hidden items-center justify-center '>
                        <HiMenuAlt2 data-flag={flag}  onClick={(event) => { smsidepanel(event) }} className='text-[35px] text-white hover:text-[#3b7ddd] cursor-pointer' />
                    </div>
                    <div className='w-[25%] h-full hidden md:flex items-center py-[15px] px-[22px] justify-center  relative'>
                        <input placeholder='Search...' className='w-full h-full rounded-[20px] px-[10px] outline-none font-interm text-[10px] lg:text-[14px] text-white bg-[#222e3c]' type="text" />
                        <IoSearchOutline className='h-full absolute top-0 right-[35px] cursor-pointer text-[#798592] text-[18px] lg:text-[22px]' />
                    </div>
                    <div className='w-[13%] hidden lg:flex flex-wrap h-full justify-center items-center relative '>
                        <div onClick={(event) => { megaandresource(event) }} className=' h-[fit-content] flex flex-wrap cursor-pointer'>
                            <p className='w-[fit-content] flex items-center  justify-center  font-interm text-[#acafb3] hover:text-[#c8cacd] duration-[0.2s] text-[13px]'>Mega menu</p>
                            <div className='w-[fit-content] flex items-center  justify-center  text-[#acafb3]'><IoIosArrowDown /></div>
                            <ul ref={megamenu} data-name='megamenu' data-stat='true' className='w-[450px] ul lg:w-[750px] h-[320px] duration-[0.2s]  translate-y-[-20px] opacity-0 hidden flex-wrap absolute bottom-[-320px] left-0 bg-[#19222c] [box-shadow:_0_0_2px_1px_white;] rounded-[5px]'>
                                <li className='w-1/3 h-full flex flex-wrap  content-start'>
                                    <p className='h-[10%] w-full ps-[20px] text-[12px]  flex items-center justify-start font-interl text-[#acafb3]'>UI Elements</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>Alert</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>buttons</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>cards</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>Carousel</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>General</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>Grid</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>Modals</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>Tabs</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]'>Typography</p>
                                </li>
                                <li className='w-1/3 h-full flex flex-wrap  content-start'>
                                    <p className='h-[10%]  w-full ps-[20px] text-[12px]  flex items-center justify-start font-interl text-[#acafb3]'>Forms</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Layouts</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Basic Inputs</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Input Groups</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Advanced Inputs</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Editors</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Validation</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Wizard</p>
                                </li>
                                <li className='w-1/3 h-full flex flex-wrap  content-start'>
                                    <p className='h-[10%]  w-full ps-[20px] text-[12px]  flex items-center justify-start font-interl text-[#acafb3]'>Tables</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Basic Tables</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >responsive Tables</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Table with Buttons</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Column Search</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Multi selection</p>
                                    <p className='h-[10%] hover:bg-[#384350] duration-[0.2s] text-[13px] w-full ps-[20px]  flex items-center justify-start font-interm text-[#acafb3]' >Ajax sourced Data</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[13%] hidden lg:flex flex-wrap h-full justify-center items-center relative '>
                        <div onClick={(event) => { megaandresource(event) }} className=' h-[fit-content] flex flex-wrap cursor-pointer'>
                            <p className='w-[fit-content] flex items-center  justify-center  font-interm text-[#acafb3] hover:text-[#c8cacd] duration-[0.2s] text-[13px]'>Resources</p>
                            <div className='w-[fit-content] flex items-center ul justify-center  text-[#acafb3]'><IoIosArrowDown /></div>
                            <ul ref={resources} data-name='resources' data-stat='true' className='w-[170px] ul  translate-y-[-20px] opacity-0 h-[120px] duration-[0.2s] hidden flex-wrap absolute left-0 bottom-[-120px] [box-shadow:_0_0_2px_1px_white;] py-[10px]  bg-[#19222c] rounded-[5px]'>
                                <li className='w-full h-1/3 flex flex-wrap duration-[0.2s] hover:bg-[#384350]  text-[#acafb3]'><div className='w-[20%] h-full justify-end  flex items-center'><LuHome /></div><p className='w-[80%] ps-[5px] h-full flex items-center '>Homepage</p></li>
                                <li className='w-full h-1/3 flex flex-wrap duration-[0.2s] hover:bg-[#384350]  text-[#acafb3]'><div className='w-[20%] h-full justify-end  flex items-center'><FiBookOpen /></div><p className='w-[80%] ps-[5px] h-full flex items-center '>Documentation</p></li>
                                <li className='w-full h-1/3 flex flex-wrap duration-[0.2s] hover:bg-[#384350]  text-[#acafb3]'><div className='w-[20%] h-full justify-end  flex items-center'><FaRegEdit /></div><p className='w-[80%] ps-[5px] h-full flex items-center '>Changelog</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[80%] md:w-[70%] lg:w-[44%] h-full flex  justify-end '>
                        <div className='w-[50%] h-full flex flex-wrap  text-[18px] text-[#acafb3] '>
                            <div className='w-[22.5%] lg:w-[18%] h-full flex items-center justify-center  group  md:relative'>
                                <div className='duration-[0.2s] hover:text-[#3b7ddd] cursor-pointer relative'>
                                <div className='w-[20px] text-white h-[20px] absolute top-[-10px] right-[-5px] group-hover:top-[-15px] text-[14px] duration-[0.1s] flex items-center justify-center rounded-[10px] bg-[#3b7ddd] '>4</div>
                                    <FaRegBell onClick={(event) => { notifandchat(event) }} className='text-[20px]' />
                                </div>
                                <ul ref={notif} data-name='notif' data-stat='true' className='w-full md:w-[320px] h-[420px] duration-[0.2s] absolute bottom-[-420px] [box-shadow:_0_0_2px_1px_white;] rounded-[5px] right-0 hidden opacity-0   flex-wrap bg-[#19222c]'>
                                    <li className='w-full cursor-default text-[14px] h-[12%] [border-bottom:_1px_solid_#acafb3;] flex justify-center items-center font-interb text-[#e5e9ed]'>4 New Notification</li>
                                    <li className='w-full h-[20%] flex flex-wrap [border-bottom:_1px_solid_#acafb3;] hover:bg-[#384350] duration-[0.2s] cursor-pointer'>
                                        <div className='h-full w-[20%] flex items-center justify-center text-red-500'><MdErrorOutline /></div>
                                        <div className='h-full w-[80%] flex flex-wrap text-[#acafb3] pe-[40px]'>
                                            <h4 className='w-[100%] h-[40%] flex items-center justify-start font-interm text-[12px] md:text-[14px] text-[#e5e9ed] '>Update completed</h4>
                                            <p className='w-[100%] h-[40%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>Restart server 12 to complete update</p>
                                            <p className='w-[100%] h-[20%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>30min ago</p>
                                        </div>
                                    </li>
                                    <li className='w-full h-[24%] flex flex-wrap [border-bottom:_1px_solid_#acafb3;] hover:bg-[#384350] duration-[0.2s] cursor-pointer'>
                                        <div className='h-full w-[20%] flex items-center justify-center text-yellow-500'><FaRegBell /></div>
                                        <div className='h-full w-[80%] flex flex-wrap text-[#acafb3] pe-[40px]'>
                                            <h4 className='w-[100%] h-[40%] flex items-center justify-start font-interm text-[12px] md:text-[14px] text-[#e5e9ed] '>Lorem ipsum</h4>
                                            <p className='w-[100%] h-[40%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>aliquam ex eros, imperdiet vulputate hendrerit et.</p>
                                            <p className='w-[100%] h-[20%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>2h ago</p>
                                        </div>
                                    </li>
                                    <li className='w-full h-[14%] flex flex-wrap [border-bottom:_1px_solid_#acafb3;] hover:bg-[#384350] duration-[0.2s] cursor-pointer'>
                                        <div className='h-full w-[20%] flex items-center justify-center text-[#3b7ddd]'><LuHome /></div>
                                        <div className='h-full w-[80%] flex flex-wrap text-[#acafb3] pe-[40px]'>
                                            <h4 className='w-[100%] h-[50%] flex items-center justify-start font-interm text-[12px] md:text-[14px] text-[#e5e9ed] '>login from 192.186.1.8</h4>
                                            <p className='w-[100%] h-[50%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>5h ago</p>
                                        </div>
                                    </li>
                                    <li className='w-full h-[22%] flex flex-wrap [border-bottom:_1px_solid_#acafb3;] hover:bg-[#384350] duration-[0.2s] cursor-pointer'>
                                        <div className='h-full w-[20%] flex items-center justify-center text-[#1d9878]'><MdOutlinePersonAddAlt /></div>
                                        <div className='h-full w-[80%] flex flex-wrap text-[#acafb3] pe-[40px]'>
                                            <h4 className='w-[100%] h-[40%] flex items-center justify-start font-interm text-[12px] md:text-[14px] text-[#e5e9ed] '>login from 192.186.1.8</h4>
                                            <p className='w-[100%] h-[40%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>Christina accepted your request</p>
                                            <p className='w-[100%] h-[20%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>14h ago</p>
                                        </div>
                                    </li>
                                    <li className='w-full  h-[8%] flex items-center justify-center cursor-default text-[#acafb3] text-[12px] font-interl' href="">
                                        <div className='hover:[text-decoration:_underline]  cursor-pointer'>Show all notification</div>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[22.5%] lg:w-[18%] h-full flex items-center justify-center  md:relative'>
                                <div className='duration-[0.2s] hover:text-[#3b7ddd] cursor-pointer'>
                                    <BsChatLeft onClick={(event) => { notifandchat(event) }} />
                                </div>
                                <ul ref={chat} data-name='chat' data-stat='true' className='w-full md:w-[320px] h-[420px] duration-[0.2s] absolute bottom-[-420px] [box-shadow:_0_0_2px_1px_white;] rounded-[5px] right-0 hidden opacity-0   flex-wrap bg-[#19222c]'>
                                    <li className='w-full cursor-default text-[14px] h-[12%] [border-bottom:_1px_solid_#acafb3;] flex justify-center items-center font-interb text-[#e5e9ed]'>4 New Notification</li>
                                    <li className='w-full h-[20%] flex flex-wrap [border-bottom:_1px_solid_#acafb3;] hover:bg-[#384350] duration-[0.2s] cursor-pointer'>
                                        <div className='h-full w-[20%] flex items-center justify-center text-red-500'>
                                            <figure className='w-[50px] h-[50px] rounded-[25px] border overflow-hidden'>
                                                <img className='w-full h-full object-cover' src={girl1img} alt="" />
                                            </figure>
                                        </div>
                                        <div className='h-full w-[80%] flex flex-wrap text-[#acafb3] pe-[40px]'>
                                            <h4 className='w-[100%] h-[40%] flex items-center justify-start font-interm text-[12px] md:text-[14px] text-[#e5e9ed] '>Venessa Tucker</h4>
                                            <p className='w-[100%] h-[40%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>Nam pretium turpis et arcu. Duis arcu tortor</p>
                                            <p className='w-[100%] h-[20%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>15min ago</p>
                                        </div>
                                    </li>
                                    <li className='w-full h-[20%] flex flex-wrap [border-bottom:_1px_solid_#acafb3;] hover:bg-[#384350] duration-[0.2s] cursor-pointer'>
                                        <div className='h-full w-[20%] flex items-center justify-center text-yellow-500'>
                                            <figure className='w-[50px] h-[50px] rounded-[25px] border overflow-hidden'>
                                                <img className='w-full h-full object-cover' src={girl2img} alt="" />
                                            </figure>
                                        </div>
                                        <div className='h-full w-[80%] flex flex-wrap text-[#acafb3] pe-[40px]'>
                                            <h4 className='w-[100%] h-[40%] flex items-center justify-start font-interm text-[12px] md:text-[14px] text-[#e5e9ed] '>William Harris</h4>
                                            <p className='w-[100%] h-[40%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>curabitur ligula sapien euismod vitae.</p>
                                            <p className='w-[100%] h-[20%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>2h ago</p>
                                        </div>
                                    </li>
                                    <li className='w-full h-[20%] flex flex-wrap [border-bottom:_1px_solid_#acafb3;] hover:bg-[#384350] duration-[0.2s] cursor-pointer'>
                                        <div className='h-full w-[20%] flex items-center justify-center text-[#3b7ddd]'>
                                            <figure className='w-[50px] h-[50px] rounded-[25px] border overflow-hidden'>
                                                <img className='w-full h-full object-cover' src={girl3img} alt="" />
                                            </figure>
                                        </div>
                                        <div className='h-full w-[80%] flex flex-wrap text-[#acafb3] pe-[40px]'>
                                            <h4 className='w-[100%] h-[40%] flex items-center justify-start font-interm text-[12px] md:text-[14px] text-[#e5e9ed] '>Christina Mason</h4>
                                            <p className='w-[100%] h-[40%] flex items-center justify-start text-[9px] md:text-[11px] font-interm '>pallentesque auctor neque nec urna.</p>
                                            <p className='w-[100%] h-[20%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>4h ago</p>
                                        </div>
                                    </li>
                                    <li className='w-full h-[20%] flex flex-wrap [border-bottom:_1px_solid_#acafb3;] hover:bg-[#384350] duration-[0.2s] cursor-pointer'>
                                        <div className='h-full w-[20%] flex items-center justify-center text-[#1d9878]'>
                                            <figure className='w-[50px] h-[50px] rounded-[25px]  overflow-hidden'>
                                                <img className='w-full h-full object-cover' src={boy2img} alt="" />
                                            </figure>
                                        </div>
                                        <div className='h-full w-[80%] flex flex-wrap text-[#acafb3] pe-[40px]'>
                                            <h4 className='w-[100%] h-[40%] flex items-center justify-start font-interm text-[12px] md:text-[14px] text-[#e5e9ed] '>Sharon Lessman</h4>
                                            <p className='w-[100%] h-[40%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>Aenean tellus metus, bibendum sed, posuere ac, mattis non.</p>
                                            <p className='w-[100%] h-[20%] flex items-center justify-start text-[9px] md:text-[11px] font-interm  '>5h ago</p>
                                        </div>
                                    </li>
                                    <li className='w-full  h-[8%] flex items-center justify-center cursor-default text-[#acafb3] text-[12px] font-interl' href="">
                                        <div className='hover:[text-decoration:_underline]  cursor-pointer'>Show all notification</div>
                                    </li>
                                </ul>
                            </div>
                            <div onClick={(event) => { language(event) }} className='w-[22.5%] lg:w-[18%] h-full flex items-center justify-center  cursor-pointer relative'>
                                <figure className='w-[20px] h-[20px] rounded-[10px] overflow-hidden'>
                                    <img className='w-full h-full object-cover cursor-pointer' src={usaimg} alt="" />
                                </figure>
                                <ul ref={flags} data-name='flags' data-stat='true' className='w-[160px] h-[150px] rounded-[5px] duration-[0.2s] hidden translate-y-[-20px] opacity-0 flex-wrap  content-center absolute bottom-[-150px] right-0 bg-[#222e3c] [box-shadow:_0_0_2px_1px_white;]'>
                                    <li className='w-full h-1/5 flex flex-wrap  hover:bg-[#384350] duration-[0.2s]'>
                                        <div className='w-[30%] h-full flex items-center justify-center'>
                                            <figure className='w-[20px] h-full'>
                                                <img className='w-full h-full object-contain' src={usaimg} alt="" />
                                            </figure>
                                        </div>
                                        <p className='w-[70%] h-full font-interm text-[14px]  flex items-center'>English</p>
                                    </li>
                                    <li className='w-full h-1/5 flex flex-wrap  hover:bg-[#384350] duration-[0.2s]'>
                                        <div className='w-[30%] h-full flex items-center justify-center'>
                                            <figure className='w-[20px] h-full'>
                                                <img className='w-full h-full object-contain' src={spanish} alt="" />
                                            </figure>
                                        </div>
                                        <p className='w-[70%] h-full font-interm text-[14px]  flex items-center'>Spanish</p>
                                    </li>
                                    <li className='w-full h-1/5 flex flex-wrap  hover:bg-[#384350] duration-[0.2s]'>
                                        <div className='w-[30%] h-full flex items-center justify-center'>
                                            <figure className='w-[20px] h-full'>
                                                <img className='w-full h-full object-contain' src={russianimg} alt="" />
                                            </figure>
                                        </div>
                                        <p className='w-[70%] h-full font-interm text-[14px]  flex items-center'>Russian</p>
                                    </li>
                                    <li className='w-full h-1/5 flex flex-wrap  hover:bg-[#384350] duration-[0.2s]'>
                                        <div className='w-[30%] h-full flex items-center justify-center'>
                                            <figure className='w-[20px] h-full'>
                                                <img className='w-full h-full object-contain' src={german} alt="" />
                                            </figure>
                                        </div>
                                        <p className='w-[70%] h-full font-interm text-[14px]  flex items-center'>German</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[18%] h-full hidden lg:flex items-center justify-center  cursor-pointer duration-[0.2s] hover:text-[#3b7ddd]'>
                                <BsFullscreen />
                            </div>
                            <div className='w-[32.5%] lg:w-[28%] h-full flex items-center justify-center  cursor-pointer duration-[0.2s] hover:text-[#3b7ddd] relative'>
                                <figure onClick={(event) => { smallMenu(event) }} className='w-[42px] h-[42px] '>
                                    <img className='w-full h-full object-cover rounded-[5px]' src={boyimg} alt="" />
                                </figure>
                                <div ref={minimenu} data-name='minimenu' data-stat='true' className='w-[195px] h-[200px] duration-[0.2s] hidden flex-wrap translate-y-[-20px] opacity-0 absolute right-0 bottom-[-200px]  bg-[#222e3c]  [box-shadow:_0_0_2px_1px_white;] rounded-[5px]'>
                                    <ul className='w-full h-[40%] py-[10px] border-b  flex justify-center flex-wrap'>
                                        <li className='w-full flex flex-wrap font-interl  justify-center  hover:bg-[#384350] text-[#bdc0c5]'>
                                            <div className='w-[70%] h-full flex flex-wrap'>
                                                <div className='text-[19px]  flex flex-wrap items-center justify-center '><MdOutlinePersonOutline /></div>
                                                <a className='flex ps-[5px]  text-[14px] items-center' href="">Profile</a>
                                            </div>
                                        </li>
                                        <li className='w-full flex flex-wrap font-interl  justify-center  hover:bg-[#384350] text-[#bdc0c5]'>
                                            <div className='w-[70%] h-full flex flex-wrap'>
                                                <div className='text-[19px]  flex flex-wrap items-center justify-center '><PiClockBold /></div>
                                                <a className='flex ps-[5px]  text-[14px] items-center' href="">Analystic</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='w-full h-[40%] py-[10px] border-b  flex justify-center flex-wrap'>
                                        <li className='w-full flex flex-wrap font-interl  justify-center  hover:bg-[#384350] text-[#bdc0c5]'>
                                            <div className='w-[70%] h-full flex flex-wrap'>
                                                <div className='text-[19px]  flex flex-wrap items-center justify-center '><MdOutlineSettings /></div>
                                                <a className='flex ps-[5px]  text-[14px] items-center' href="">Setting & Privacy</a>
                                            </div>
                                        </li>
                                        <li className='w-full flex flex-wrap font-interl  justify-center  hover:bg-[#384350] text-[#bdc0c5]'>
                                            <div className='w-[70%] h-full flex flex-wrap'>
                                                <div className='text-[19px]  flex flex-wrap items-center justify-center '><MdHelpOutline /></div>
                                                <a className='flex ps-[5px]  text-[14px] items-center' href="">Help center</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='w-full h-[20%] py-[10px]  flex justify-center flex-wrap'>
                                        <li className='w-[70%] flex flex-wrap font-interl   hover:bg-[#384350] text-[#bdc0c5]'>
                                            <a className='flex text-[14px]' href="">Log Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default header
import React, { useState, props } from 'react'
import img1 from '../../img/avatar.jpg'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiClockBold } from "react-icons/pi";
import { MdOutlineSettings, MdHelpOutline, MdOutlinePersonOutline, MdArrowRightAlt } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { BiDockLeft } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { useRef, useEffect } from 'react';
import { LuCreditCard } from "react-icons/lu";
import {Link} from 'react-router-dom'


function side({ sidekey }) {
  const [flag, setFlag] = useState(false)
  const arrowup = useRef()
  const arrowdown = useRef()
  const menu = useRef()
  const sidebar = useRef()
  let drop = ''

  const smallMenu = (e) => {
    e.stopPropagation()
    if (flag) {
      arrowdown.current.classList.add('opacity-1')
      arrowup.current.classList.add('opacity-0')
      arrowdown.current.classList.remove('opacity-0')
      arrowup.current.classList.remove('opacity-1')
      menu.current.classList.add('opacity-0')
      menu.current.classList.add('invisible')
      setFlag(!flag)
    } else {
      arrowdown.current.classList.add('opacity-0')
      arrowup.current.classList.add('opacity-1')
      arrowdown.current.classList.remove('opacity-1')
      arrowup.current.classList.remove('opacity-0')
      menu.current.classList.remove('opacity-0')
      menu.current.classList.remove('invisible')
      setFlag(!flag)
    }
  }

  useEffect(() => {
    window.addEventListener('click',()=>{
      setFlag(false)
      arrowdown.current.classList.add('opacity-1')
      arrowup.current.classList.add('opacity-0')
      arrowdown.current.classList.remove('opacity-0')
      arrowup.current.classList.remove('opacity-1')
      menu.current.classList.add('opacity-0')
      menu.current.classList.add('invisible')
    })
    drop = document.querySelectorAll('.dropmenu')
    drop.forEach((val) => {
      let h = val.clientHeight
      val.setAttribute('data-h', h)
      val.classList.add('h-0')
    })

    if (sidekey) {
      sidebar.current.classList.add('left-[-260px]')
      sidebar.current.classList.remove('left-0')
    } else {
      sidebar.current.classList.add('left-0')
      sidebar.current.classList.remove('left-[-260px]')
    }

  }, [sidekey])



  const acc = (e) => {
    let stat = e.currentTarget.getAttribute('data-stat')
    let z = e.currentTarget.children[3].getAttribute('data-h')
    let arrow = document.querySelectorAll('.arrow')
    let _li = document.querySelectorAll('._li')
    let drop = document.querySelectorAll('.dropmenu')
    _li.forEach((val) => {
      val.setAttribute('data-stat', 'true')
    })
    arrow.forEach((val) => {
      val.classList.remove('rotate-[-180deg]')
    })
    drop.forEach((val) => {
      val.classList.add('h-0')
    })
    if (stat == 'true') {
      e.currentTarget.setAttribute('data-stat', 'false')
      e.currentTarget.children[2].classList.add('rotate-[-180deg]')
      e.currentTarget.children[3].classList.add('h-[' + z + 'px]')
      e.currentTarget.children[3].classList.remove('h-0')
    } else {
      e.currentTarget.setAttribute('data-stat', 'true')
      e.currentTarget.children[2].classList.remove('rotate-[-180deg]')
      e.currentTarget.children[3].classList.remove('h-[' + z + 'px]')
      e.currentTarget.children[3].classList.add('h-0')
    }
  }


  return (
    <>
      <div ref={sidebar} className='w-[260px] fixed top-0 left-0 duration-[0.2s] h-full flex flex-wrap ps-[25px] bg-[#222e3c] justify-center content-start'>

        <div className='w-full '>
          <h1 className='w-full py-[10px] font-interm text-white text-[22px]'>Admin panel</h1>
        </div>

        <div className='w-full h-[15%] py-[10px] items-center  flex flex-wrap '>
          <div className='w-full flex flex-wrap content-center'>
            <figure className='w-[42px] h-[42px]'>
              <img className='object-contain rounded-[5px]' src={img1} alt="" />
            </figure>
            <div className='w-[80%]  flex flex-wrap px-[5px] relative'>
              <div onClick={(event) => { smallMenu(event) }} className='w-[fit-content] flex flex-wrap cursor-pointer '>
                <p className='font-interm w-[fit-content] text-[#bdc0c5]'>pedram</p>
                <div className='w-[fit-content] flex flex-wrap items-center text-[#bdc0c5] relative '>
                  <div ref={arrowdown} className='h-full flex items-center justify-center absolute top-0 left-0 '><IoIosArrowDown /></div>
                  <div ref={arrowup} className='h-full flex items-center justify-center absolute top-0 left-0  opacity-0'><IoIosArrowUp /></div>
                </div>
              </div>
              <p className='font-interl w-full text-[#bdc0c5]'>Developer</p>
              <div ref={menu} className='w-full absolute left-0 top-[100%]  bg-[#222e3c] opacity-0 invisible [box-shadow:_0_0_2px_1px_white;] rounded-[5px]'>
                <ul className='w-full border-b py-[10px] flex flex-wrap'>
                  <li className='w-full flex flex-wrap font-interl py-[2px] hover:bg-[#384350] px-[20px] text-[#bdc0c5]'><div className='text-[22px] flex flex-wrap items-center justify-center '><MdOutlinePersonOutline /></div><a className='flex ps-[5px] ' href="">Profile</a></li>
                  <li className='w-full flex flex-wrap font-interl py-[2px] hover:bg-[#384350] px-[20px] text-[#bdc0c5]'><div className='text-[22px] flex flex-wrap items-center justify-center '><PiClockBold /></div><a className='flex ps-[5px] ' href="">Analystic</a></li>
                </ul>
                <ul className='w-full border-b py-[10px] flex flex-wrap'>
                  <li className='w-full flex flex-wrap font-interl py-[2px] hover:bg-[#384350] px-[20px] text-[#bdc0c5]'><div className='text-[22px] flex flex-wrap items-center justify-center '><MdOutlineSettings /></div><a className='flex ps-[5px] ' href="">Setting & Privacy</a></li>
                  <li className='w-full flex flex-wrap font-interl py-[2px] hover:bg-[#384350] px-[20px] text-[#bdc0c5]'><div className='text-[22px] flex flex-wrap items-center justify-center '><MdHelpOutline /></div><a className='flex ps-[5px] ' href="">Help center</a></li>
                </ul>
                <ul className='w-full py-[10px] flex flex-wrap'>
                  <li className='w-full flex flex-wrap font-interl py-[2px] hover:bg-[#384350] px-[20px] text-[#bdc0c5]'><a className='flex ps-[5px]' href="">Log Out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-[60%] flex flex-wrap '>
          <ul className='w-full h-[100%] flex flex-wrap content-start'>
            <li onClick={(event) => { acc(event) }} className='acc w-full py-[15px] h-[fit-content] flex flex-wrap cursor-pointer  _li' data-stat="true">
              <div className='w-[15%] flex items-center justify-center text-[#bdc0c5] text-[20px]'><VscSettings /></div>
              <p className='w-[70%] flex items-center justify-start text-[#bdc0c5] font-interm text-[16px]'>Dashboard</p>
              <div className='w-[15%] flex items-center justify-center text-[#bdc0c5] text-[12px] duration-[0.2s] arrow'><IoIosArrowDown /></div>
              <ul className='w-full flex flex-wrap overflow-hidden mt-[5px]  ps-[20px] duration-[0.4s] dropmenu'>
                <li className='w-full flex flex-wrap  my-[4px] font-interl py-[2px] text-[19px] text-[#bdc0c5] '>
                  <a className='w-full flex flex-wrap group' href="">
                    <div className='flex items-center text-[19px] me-[3px] group-hover:translate-x-[3px] duration-[0.4s] group-hover:text-white'><MdArrowRightAlt /></div>
                    <Link to='/analystic'  className='text-[14px]  flex items-center group-hover:text-white'>Analystic</Link>
                  </a>
                </li>
                <li className='w-full flex flex-wrap  my-[4px] font-interl py-[2px] text-[19px] text-[#bdc0c5]'>
                  <a className='w-full flex flex-wrap group' href="">
                    <div className='flex items-center text-[19px] me-[3px] group-hover:translate-x-[3px] duration-[0.2s] group-hover:text-white'><MdArrowRightAlt /></div>
                    <Link to='/ecommerce' className='text-[14px]  flex items-center group-hover:text-white'>E-Commerce</Link>
                  </a>
                </li>
              </ul>
            </li>
            <li onClick={(event) => { acc(event) }} className='acc w-full py-[15px] h-[fit-content] flex flex-wrap cursor-pointer  _li' data-stat="true">
              <div className='w-[15%] flex items-center justify-center text-[#bdc0c5] text-[20px]'><BiDockLeft /></div>
              <p className='w-[70%] flex items-center justify-start text-[#bdc0c5] font-interm text-[16px]'>Pages</p>
              <div className='w-[15%] flex items-center justify-center text-[#bdc0c5] text-[12px] duration-[0.2s] arrow'><IoIosArrowDown /></div>
              <ul className='w-full flex flex-wrap overflow-hidden mt-[5px]  ps-[20px] duration-[0.4s] dropmenu'>
                <li className='w-full flex flex-wrap  my-[4px] font-interl py-[2px] text-[19px] text-[#bdc0c5] '>
                  <a className='w-full flex flex-wrap group' href="">
                    <div className='flex items-center text-[19px] me-[3px] group-hover:translate-x-[3px] duration-[0.4s] group-hover:text-white'><MdArrowRightAlt /></div>
                    <Link to='/setting' className='text-[14px]  flex items-center group-hover:text-white'>Setting</Link>
                  </a>
                </li>
                <li className='w-full flex flex-wrap  my-[4px] font-interl py-[2px] text-[19px] text-[#bdc0c5]'>
                  <a className='w-full flex flex-wrap group' href="">
                    <div className='flex items-center text-[19px] me-[3px] group-hover:translate-x-[3px] duration-[0.2s] group-hover:text-white'><MdArrowRightAlt /></div>
                    <Link to='/pricing' className='text-[14px]  flex items-center group-hover:text-white'>Pricing</Link>
                  </a>
                </li>
                <li className='w-full flex flex-wrap  my-[4px] font-interl py-[2px] text-[19px] text-[#bdc0c5]'>
                  <a className='w-full flex flex-wrap group' href="">
                    <div className='flex items-center text-[19px] me-[3px] group-hover:translate-x-[3px] duration-[0.2s] group-hover:text-white'><MdArrowRightAlt /></div>
                    <Link to='/projetcs' className='text-[14px]  flex items-center group-hover:text-white'>Projects</Link>
                  </a>
                </li>
              </ul>
            </li>
            <li className='acc w-full py-[15px] h-[fit-content] flex flex-wrap cursor-pointer  ' data-stat="true">
              <a className='w-full flex fex-wrap' href="">
                <div className='w-[15%] flex items-center justify-center text-[#bdc0c5] text-[20px]'><BsPerson /></div>
                <Link to='/profile' className='w-[70%] flex items-center justify-start text-[#bdc0c5] font-interm text-[16px]'>Profile</Link>
              </a>
            </li>
            <li className='acc w-full py-[15px] h-[fit-content] flex flex-wrap cursor-pointer  ' data-stat="true">
              <a className='w-full flex fex-wrap' href="">
                <div className='w-[15%] flex items-center justify-center text-[#bdc0c5] text-[20px]'><LuCreditCard /></div>
                <Link to='/invoice' className='w-[70%] flex items-center justify-start text-[#bdc0c5] font-interm text-[16px]'>Invoice</Link>
              </a>
            </li>
            <li className='acc w-full py-[15px] h-[fit-content] flex flex-wrap cursor-pointer  ' data-stat="true">
              <a className='w-full flex fex-wrap' href="">
                <div className='w-[15%] flex items-center justify-center text-[#bdc0c5] text-[20px]'><CiCalendar /></div>
                <Link to='/calendar' className='w-[70%] flex items-center justify-start text-[#bdc0c5] font-interm text-[16px]'>Calendar</Link></a>
            </li>
          </ul>
        </div>

      </div>
    </>
  )


}

export default side
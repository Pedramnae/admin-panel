import React, { useState } from 'react'
import { useEffect } from 'react';
import Header from './header'
import { useRef } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

let _div = null
function calendar() {
  const mounth = useRef()
  const year = useRef()
  const days = useRef()
  const promp = useRef()
  const calendar = useRef()
  let date = new Date()
  let currmounth = date.getMonth()
  let curryear = date.getFullYear()
  const [inp1 , setInp1] = useState('')


  useEffect(() => {
    const mountharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


    let prevnext = document.querySelectorAll('.nextprevclick')

    prevnext.forEach((val) => {
      val.addEventListener('click', () => {
        currmounth = val.id === 'right' ? currmounth + 1 : currmounth - 1

        if (currmounth < 0 || currmounth > 11) {
          date = new Date(curryear, currmounth)
          currmounth = date.getMonth()
          curryear = date.getFullYear()
        }
        calendarview()
      })
    })

    function calendarview() {
      let firstdayofmounth = new Date(curryear, currmounth, 1).getDay()
      let lastdateofmounth = new Date(curryear, currmounth + 1, 0).getDate()
      let lastdayeofmounth = new Date(curryear, currmounth, lastdateofmounth).getDay()
      let lastdateoflastmounth = new Date(curryear, currmounth, 0).getDate()

      let litag = ""
      for (let i = firstdayofmounth; i > 0; i--) {
        litag += `<li  class='w-[14%] calendardays h-[15%] cursor-pointer flex flex-wrap justify-center items-center  text-[14px] border  hover:bg-[#646d77] '>
          <div class='w-full h-[20%]  justify-end pe-[15px] flex items-center text-[#575f6a] font-interr'>
            ${lastdateoflastmounth - i + 1}
          </div>
          <div  class='w-full h-[80%] flex '>
          
          </div>
        </li>`
      }


      for (let i = 1; i <= lastdateofmounth; i++) {
        let today = i === date.getDate() && currmounth === new Date().getMonth() && curryear === new Date().getFullYear() ? 'bg-[#3b7ddd]' : ''
        litag += `<li  class=' ${today} w-[14%] calendardays h-[15%] cursor-pointer flex flex-wrap justify-center items-center text-[14px] border  hover:bg-[#646d77] '>
          <div class='w-full h-[20%]  justify-end pe-[15px] flex items-center text-[#bdc0c5] font-interr'>
            ${i}
          </div>
          <div  class='w-full h-[80%] flex '>
          
          </div>
        </li>`
      }

      for (let i = lastdayeofmounth; i < 6; i++) {
        litag += `<li  class=' w-[14%] calendardays h-[15%] cursor-pointer  flex flex-wrap justify-center items-center text-[14px] border  hover:bg-[#646d77] '>
        <div class='w-full h-[20%]  justify-end pe-[15px] flex items-center text-[#575f6a] font-interr'>
          ${i - lastdayeofmounth + 1}
        </div>
        <div  class='w-full h-[80%] flex '>
        
        </div>
      </li>`
      }

      year.current.innerText = curryear
      mounth.current.innerText = mountharr[currmounth]
      days.current.innerHTML = litag
    }
    calendarview()
    let mounthdays = document.querySelectorAll('.calendardays')
    mounthdays.forEach((val) => {
      val.addEventListener('click', () => {
        _div = daysclick(event)
      })
    })

  }, [])

  function daysclick(event) {
    let _div = event.currentTarget.children[1]
    promp.current.classList.add('flex')
    promp.current.classList.remove('hidden')
    return _div
  }


  function setevent(e) {
    let id = e.target.getAttribute('id')
    if (id == 'cancel') {
      promp.current.classList.add('hidden')
      promp.current.classList.remove('flex')
    }
    if (id == 'add') {
      let event = inp1
      let text = "<span class='w-full h-full bg-[#3b7ddd] font-interr text-[7px] md:text-[10px] text-white flex text-center justify-center rounded-[2px]  items-center'>" + event + "</span>"
      _div.innerHTML = text
      promp.current.classList.add('hidden')
      promp.current.classList.remove('flex')
      setInp1('')
      console.log(_div);
    }
  }




  const calendarfunc = (f) => {
    console.log(f);
    if (f == false) {
      calendar.current.classList.add('w-full')
      calendar.current.classList.remove('md:w-[calc(100%-260px)]')
    } else {
      calendar.current.classList.remove('w-full')
      calendar.current.classList.add('md:w-[calc(100%-260px)]')
    }
  }
  const smcalendarfunc = (f) => {
    if (f == false) {
      calendar.current.classList.remove('right-[-260px]')
      calendar.current.classList.add('right-0')
    } else {
      calendar.current.classList.add('right-[-260px]')
      calendar.current.classList.remove('right-0')
    }
  }
  return (
    <section className='w-full h-[100vh] flex flex-wrap relative'>
      <Header smpagesfunc={(event) => { smcalendarfunc(event) }} pagesfunc={(event) => { calendarfunc(event) }} />
      <div ref={calendar} className='w-[100%] md:w-[calc(100%-260px)] overflow-x-hidden px-[20px] flex flex-wrap content-center duration-[0.2s] h-[130vh] absolute top-[70px] right-[-260px] md:right-0 bg-[#19222c]'>
        {/* promp */}
        {/* promp */}
        <div ref={promp} className='w-full h-full hidden justify-center items-center fixed top-0 left-0 z-[100] bg-[#222e3c66]'>
          <div className='w-[350px] md:w-[450px] h-[250px] md:h-[300px] rounded-[5px] flex flex-wrap bg-[#222e3c] [box-shadow:_0_0_50px_1px_#3b7ddd;]'>
            <p className='w-full h-[30%] flex items-center justify-center font-interb text-white text-[24px] '>Add event on this day</p>
            <div className='w-full h-[40%] flex items-center justify-center '>
              <input maxLength={12} onChange={(e) => setInp1(e.target.value)} value={inp1} className='border bg-[#222e3c] focus:[box-shadow:_0_0_0_6px_#284164] font-interr text-white w-[calc(100%-80px)] text-[14px] h-[40px] rounded-[5px] ps-[20px]' placeholder='going to gym and...' type="text" name="" id="" />
            </div>
            <div className='w-full h-[30%] flex flex-wrap'>
              <span className='w-1/2 h-full flex items-center justify-center'>
                <button id='cancel' onClick={(event) => { setevent(event) }} className='w-fit btn h-fit px-[25px] py-[10px] bg-[#3b7ddd] text-white text-[14px] font-interr hover:bg-[#3b3bdd] rounded-[5px]'>Cancel</button>
              </span>
              <span className='w-1/2 h-full flex items-center justify-center'>
                <button id='add' onClick={(event) => { setevent(event) }} className='w-fit btn h-fit px-[25px] py-[10px] bg-[#3b7ddd] text-white text-[14px] font-interr hover:bg-[#3b3bdd] rounded-[5px]'>Add</button>
              </span>
            </div>
          </div>
        </div>
        {/* promp */}
        {/* promp */}



        <h1 className='w-full h-[10%] flex items-center font-interb text-white text-[21px]'>Calendar</h1>
        <div className='w-full h-[85%] flex flex-wrap rounded-[5px] bg-[#222e3c]'>

          <span className='w-full h-[15%] flex flex-wrap px-[10px] items-center justify-between'>
            <div id='left' className='w-fit h-fit px-[15px] py-[5px] nextprevclick  text-[22px] rounded-[5px] flex items-center justify-center bg-[#3b7ddd] hover:bg-[#326abc] duration-[0.2s] text-[#bdc0c5] cursor-pointer'><FaAngleLeft /></div>
            <div className='w-fit h-full flex flex-wrap items-center'>
              <div ref={mounth} className='w-fit h-1/2 flex items-center px-[20px]  justify-center font-interm text-[24px] text-white'>July</div>
              <div ref={year} className='w-fit h-1/2 flex items-center px-[20px]  justify-center font-interm text-[24px] text-white'>2024</div>
            </div>
            <div id='right' className='w-fit h-fit px-[15px] py-[5px] nextprevclick  text-[22px] rounded-[5px] flex items-center justify-center bg-[#3b7ddd] hover:bg-[#326abc] duration-[0.2s] text-[#bdc0c5] cursor-pointer'><FaAngleRight /></div>
          </span>

          <div className='w-full h-[5%] flex flex-wrap  justify-center'>
            <span className='h-full w-[14%] flex items-center border justify-center font-interr text-[14px] text-[#bdc0c5]'>Sun</span>
            <span className='h-full w-[14%] flex items-center border justify-center font-interr text-[14px] text-[#bdc0c5]'>Mon</span>
            <span className='h-full w-[14%] flex items-center border justify-center font-interr text-[14px] text-[#bdc0c5]'>Tue</span>
            <span className='h-full w-[14%] flex items-center border justify-center font-interr text-[14px] text-[#bdc0c5]'>Wed</span>
            <span className='h-full w-[14%] flex items-center border justify-center font-interr text-[14px] text-[#bdc0c5]'>Thu</span>
            <span className='h-full w-[14%] flex items-center border justify-center font-interr text-[14px] text-[#bdc0c5]'>Fri</span>
            <span className='h-full w-[14%] flex items-center border justify-center font-interr text-[14px] text-[#bdc0c5]'>Sat</span>
          </div>

          <div ref={days} className='w-full h-[80%] flex flex-wrap justify-center content-start'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default calendar
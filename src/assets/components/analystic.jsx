import React, { useEffect, useRef } from 'react'
import Header from './view/header'
import { BsTruck } from "react-icons/bs";
import { LuDollarSign } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { Chart as ChartJS, elements } from 'chart.js/auto'
import { Bar, Line, Doughnut } from 'react-chartjs-2'
import svg1 from './../img/1.svg'
import svg2 from './../img/2.svg'
import svg3 from './../img/3.svg'
import svg4 from './../img/4.svg'
import svg5 from './../img/5.svg'
import map from './../img/map.svg'
import Data from './data.json'
import Data3 from './data3.json'
import browserdata from './browserdata.json'
import { IoIosMore } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


function analystic() {
    const analysticdiv = useRef()
    const mounth = useRef()
    const year = useRef()
    const days = useRef()
    const Analysticfunc = (f) => {
        console.log(f);
        if (f == false) {
            analysticdiv.current.classList.add('w-full')
            analysticdiv.current.classList.remove('md:w-[calc(100%-260px)]')
        } else {
            analysticdiv.current.classList.remove('w-full')
            analysticdiv.current.classList.add('md:w-[calc(100%-260px)]')
        }
    }
    const smAnalysticfunc = (f) => {
        if (f == false) {
            analysticdiv.current.classList.remove('right-[-260px]')
            analysticdiv.current.classList.add('right-0')
        } else {
            analysticdiv.current.classList.add('right-[-260px]')
            analysticdiv.current.classList.remove('right-0')
        }
    }

    function dropmenu(e) {
        let ul = e.currentTarget.children[0].children[0]
        let stat = ul.getAttribute('data-stat')
        if (stat == 'false') {
            ul.classList.add('flex')
            ul.classList.remove('hidden')
            ul.setAttribute('data-stat', 'true')
        } else {
            ul.classList.add('hidden')
            ul.classList.remove('flex')
            ul.setAttribute('data-stat', 'false')
        }
    }

    useEffect(() => {
        const mountharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let date = new Date()
        let currmounth = date.getMonth()
        let curryear = date.getFullYear()

        let prevnext = document.querySelectorAll('.nextprevclick')

        prevnext.forEach((val) => {
            val.addEventListener('click', () => {
                currmounth = val.id === 'right' ? currmounth + 1 : currmounth - 1

                if (currmounth < 0 || currmounth > 11) {
                    date = new Date(curryear, currmounth)
                    currmounth = date.getMonth()
                    curryear = date.getFullYear()
                }
                calendar()
            })
        })

        function calendar() {
            let firstdayofmounth = new Date(curryear, currmounth, 1).getDay()
            let lastdateofmounth = new Date(curryear, currmounth + 1, 0).getDate()
            let lastdayeofmounth = new Date(curryear, currmounth, lastdateofmounth).getDay()
            let lastdateoflastmounth = new Date(curryear, currmounth, 0).getDate()

            let litag = ""
            for (let i = firstdayofmounth; i > 0; i--) {
                litag += `<li class='w-[14%] h-[20%] rounded-[3px] flex justify-center items-center font-interr text-[14px]  text-[#575f6a] hover:bg-[#646d77] '>${lastdateoflastmounth - i + 1}</li>`
            }


            for (let i = 1; i <= lastdateofmounth; i++) {
                let today = i === date.getDate() && currmounth === new Date().getMonth() && curryear === new Date().getFullYear() ? 'bg-[#3b7ddd]' : ''
                litag += `<li class=' ${today} w-[14%] h-[20%] rounded-[3px] flex justify-center items-center font-interr text-[14px]  text-[#bdc0c5] hover:bg-[#646d77] '>${i}</li>`
            }

            for (let i = lastdayeofmounth; i < 6; i++) {
                litag += `<li class='w-[14%] h-[20%] rounded-[3px] flex justify-center items-center font-interr text-[14px]  text-[#575f6a] hover:bg-[#646d77] '>${i - lastdayeofmounth + 1}</li>`
            }

            year.current.innerText = curryear
            mounth.current.innerText = mountharr[currmounth]
            days.current.innerHTML = litag
        }
        calendar()

    }, [])
    return (
        <>
            <section className='w-full h-[100vh] flex flex-wrap relative'>
                <Header smpagesfunc={(event) => { smAnalysticfunc(event) }} pagesfunc={(event) => { Analysticfunc(event) }} />
                <div ref={analysticdiv} className='w-[100%] md:w-[calc(100%-260px)] overflow-x-hidden px-[25px] flex  flex-wrap content-start duration-[0.2s] h-[400vh] md:h-[300vh] lg:h-[250vh] xl:h-[200vh]  absolute top-[70px] right-[-260px] md:right-0 bg-[#19222c]'>
                    <div className='w-full h-[35%] md:h-[25%]  flex flex-wrap  '>
                        <div className='w-full h-[5%] md:h-[10%] items-center flex flex-wrap '>
                            <h1 className='w-[50%] h-full hidden md:flex items-center justify-start font-interm text-[20px] text-white'> Analystic Dashboard </h1>
                            <div className='w-full md:w-[50%] h-[100%]   flex flex-wrap justify-end'>
                                <div className='w-[120px] h-full flex  items-center justify-center '>
                                    <p className='py-[6px] px-[16px] bg-[#222e3c] rounded-[5px] duration-[0.2s] hover:[box-shadow:_0_0_1px_0_#222e3c;] [box-shadow:_0_0_1px_0_white;] font-interm text-white text-[12px] cursor-pointer'>invite a friend</p>
                                </div>
                                <div className='w-[120px] h-full flex  items-center justify-center '>
                                    <p className='py-[6px] px-[16px] bg-[#3b7ddd] rounded-[5px] hover:bg-[#326abc] font-interm text-white text-[12px] cursor-pointer'>New Project</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full lg:w-[45%] h-[62%] lg:h-[90%] mb-[20px] lg:mb-0 lg:my-0 flex flex-wrap  justify-between content-between '>
                            <div className='w-full md:w-[48%] h-[23%] md:h-[45%] ps-[14px] md:mb-[10px] rounded-[5px] bg-[#222e3c] flex flex-wrap'>
                                <div className='w-[60%] h-[70%]  flex flex-wrap '>
                                    <p className='w-full h-[50%] flex items-center justify-start text-white text-[15px] font-interm'>Sales</p>
                                    <p className='w-full h-[50%] flex items-center justify-start text-white text-[23px] font-interl'>2.382</p>
                                </div>
                                <div className='w-[40%] h-[70%]  flex flex-wrap justify-end md:justify-center pe-[30px] pt-[15px] '>
                                    <div className='w-[35px] h-[35px] flex items-center justify-center rounded-[18px] bg-[#384350] text-[19px] text-[#3b7ddd]'><BsTruck /></div>
                                </div>
                                <div className='w-full h-[30%]  flex flex-wrap items-center '>
                                    <div className='h-[100%] flex justify-start items-center '>
                                        <div className='px-[3px] py-[1px] rounded-[4px] hover:bg-[#223650] bg-[#263a54] text-[#3875cb] text-[9px] font-interl'>-3.65%</div>
                                    </div>
                                    <p className='h-full flex items-center font-interm text-[#9499a0] ps-[3px] text-[11px]'>Since last week</p>
                                </div>
                            </div>
                            <div className='w-full md:w-[48%] h-[23%] md:h-[45%] ps-[14px]  md:mb-[10px]  rounded-[5px] bg-[#222e3c] flex flex-wrap'>
                                <div className='w-[60%] h-[70%]  flex flex-wrap '>
                                    <p className='w-full h-[50%] flex items-center justify-start text-white text-[15px] font-interm'>Earnings</p>
                                    <p className='w-full h-[50%] flex items-center justify-start text-white text-[23px] font-interl'>$21.300</p>
                                </div>
                                <div className='w-[40%] h-[70%]  flex flex-wrap justify-end md:justify-center pe-[30px] pt-[15px] '>
                                    <div className='w-[35px] h-[35px] flex items-center justify-center rounded-[18px] bg-[#384350] text-[19px] text-[#3b7ddd]'><LuDollarSign /></div>
                                </div>
                                <div className='w-full h-[30%]  flex flex-wrap items-center '>
                                    <div className='h-[100%] flex justify-start items-center '>
                                        <div className='px-[3px] py-[1px] rounded-[4px] hover:bg-[#203c43] bg-[#214348] text-[#1cb588] text-[9px] font-interl'>6.65%</div>
                                    </div>
                                    <p className='h-full flex items-center font-interm text-[#9499a0] ps-[3px] text-[11px]'>Since last week</p>
                                </div>
                            </div>
                            <div className='w-full md:w-[48%] h-[23%] md:h-[45%] ps-[14px]  md:mt-[10px]  rounded-[5px] bg-[#222e3c] flex flex-wrap'>
                                <div className='w-[60%] h-[70%]  flex flex-wrap '>
                                    <p className='w-full h-[50%] flex items-center justify-start text-white text-[15px] font-interm'>Visitors</p>
                                    <p className='w-full h-[50%] flex items-center justify-start text-white text-[23px] font-interl'>14.212</p>
                                </div>
                                <div className='w-[40%] h-[70%]  flex flex-wrap justify-end md:justify-center pe-[30px] pt-[15px] '>
                                    <div className='w-[35px] h-[35px] flex items-center justify-center rounded-[18px] bg-[#384350] text-[19px] text-[#3b7ddd]'><GoPeople /></div>
                                </div>
                                <div className='w-full h-[30%]  flex flex-wrap items-center '>
                                    <div className='h-[100%] flex justify-start items-center '>
                                        <div className='px-[3px] py-[1px] rounded-[4px] hover:bg-[#203c43] bg-[#214348] text-[#1cb588] text-[9px] font-interl'>5.25%</div>
                                    </div>
                                    <p className='h-full flex items-center font-interm text-[#9499a0] ps-[3px] text-[11px]'>Since last week</p>
                                </div>
                            </div>
                            <div className='w-full md:w-[48%] h-[23%] md:h-[45%] ps-[14px]  md:mt-[10px]  rounded-[5px] bg-[#222e3c] flex flex-wrap'>
                                <div className='w-[60%] h-[70%]  flex flex-wrap '>
                                    <p className='w-full h-[50%] flex items-center justify-start text-white text-[15px] font-interm'>Orders</p>
                                    <p className='w-full h-[50%] flex items-center justify-start text-white text-[23px] font-interl'>64</p>
                                </div>
                                <div className='w-[40%] h-[70%]  flex flex-wrap justify-end md:justify-center pe-[30px] pt-[15px] '>
                                    <div className='w-[35px] h-[35px] flex items-center justify-center rounded-[18px] bg-[#384350] text-[19px] text-[#3b7ddd]'><FiShoppingCart /></div>
                                </div>
                                <div className='w-full h-[30%]  flex flex-wrap items-center '>
                                    <div className='h-[100%] flex justify-start items-center '>
                                        <div className='px-[3px] py-[1px] rounded-[4px] hover:bg-[#392c3a] bg-[#3e2f3d] text-[#dc3545] text-[9px] font-interl'>-2.25%</div>
                                    </div>
                                    <p className='h-full flex items-center font-interm text-[#9499a0] ps-[3px] text-[11px] '>Since last week</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[55%] lg:px-[10px] rounded-[3px] h-[30%] lg:h-[90%]  flex flex-wrap '>
                            <div className='w-full h-ful flex flex-wrap bg-[#222e3c] rounded-[5px]'>
                                <div className='w-full flex justify-end flex-wrap h-[15%] '>
                                    <div className='w-[50%]  h-full flex justify-end flex-wrap'>
                                        <div className='w-[35%] h-full  flex items-center justify-center'>
                                            <select name="" id="" size={1} className='bg-[#2d3846] text-[#bcbfc4] px-[10px] py-[2px] rounded-[2px] font-interm text-[12px]'>
                                                <option value="Jan">Jan</option>
                                                <option value="Feb">Feb</option>
                                                <option value="Mar">Mar</option>
                                                <option value="Apr" selected>Apr</option>
                                            </select>
                                        </div>
                                        <div className='w-[35%] h-full  flex items-center justify-center'>
                                            <input type="text" placeholder='Search' className='ps-[5px] font-interm text-[12px] py-[2px] w-[90%] bg-[#2d3846] rounded-[4px]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-[85%] flex  justify-center'>
                                    <Line
                                        data={{
                                            labels: Data.map(data => data.label),
                                            datasets: [{
                                                label: 'Recent Movement',
                                                data: Data.map(data => data.data),
                                            }],
                                        }}
                                        options={
                                            {
                                                elements: {
                                                    line: {
                                                        tension: 0.5,
                                                    }
                                                }
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[40%] md:h-[45%] lg:h-[45%] xl:h-[40%] pt-[30px] flex flex-wrap'>

                        {/* xl */}
                        {/* xl */}
                        {/* xl */}
                        {/* xl */}
                        <div className='w-full md:w-[calc(50%-15px)] xl:w-[calc(25%-30px)] h-[calc(33%-15px)] md:h-[calc(60%-30px)] xl:h-full flex  flex-wrap bg-[#222e3c] rounded-[5px] p-[15px] md:mt-[15px] lg:mt-0 md:me-[15px]'>
                            <span className='w-1/2 h-[10%]  font-interb text-[14px] text-[#bdc0c5]  flex items-center'>Calendar</span>
                            <span onClick={(event) => { dropmenu(event) }} className='w-1/2 h-[10%]   items-center  flex justify-end text-[#bdc0c5] text-[14px] relative'>
                                <span className='w-fit h-fit cursor-pointer '>
                                    <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                    </ul>
                                    <IoIosMore />
                                </span>
                            </span>
                            <div className='w-full h-[90%] flex flex-wrap '>
                                <div className='w-full h-[15%] flex flex-wrap brder justify-between items-center'>
                                    <span id='left' className='w-fit h-fit p-[6px]  hover:bg-[#646d77] cursor-pointer nextprevclick text-[#bdc0c5] text-[22px] rounded-[5px]'><FaAngleLeft /></span>
                                    <span ref={mounth} className='w-fit h-fit p-[6px]  text-[14px] font-interm text-[#bdc0c5]'></span>
                                    <span ref={year} className='w-fit h-fit p-[6px]  text-[14px] font-interm text-[#bdc0c5]'></span>
                                    <span id='right' className='w-fit h-fit p-[6px]  hover:bg-[#646d77] cursor-pointer nextprevclick text-[#bdc0c5] text-[22px] rounded-[5px]'><FaAngleRight /></span>
                                </div>
                                <div className='w-full h-[15%] flex flex-wrap  justify-between'>
                                    <span className='w-[14%] flex justify-center h-full items-center font-interr text-[12px]  text-[#bdc0c5]'>Sun</span>
                                    <span className='w-[14%] flex justify-center h-full items-center font-interr text-[12px]  text-[#bdc0c5]'>Mon</span>
                                    <span className='w-[14%] flex justify-center h-full items-center font-interr text-[12px]  text-[#bdc0c5]'>Tue</span>
                                    <span className='w-[14%] flex justify-center h-full items-center font-interr text-[12px]  text-[#bdc0c5]'>Wed</span>
                                    <span className='w-[14%] flex justify-center h-full items-center font-interr text-[12px]  text-[#bdc0c5]'>Thu</span>
                                    <span className='w-[14%] flex justify-center h-full items-center font-interr text-[12px]  text-[#bdc0c5]'>Fri</span>
                                    <span className='w-[14%] flex justify-center h-full items-center font-interr text-[12px]  text-[#bdc0c5]'>Sat</span>
                                </div>
                                <ul ref={days} className='w-full h-[60%] justify-between flex flex-wrap  py-[15px]'>

                                </ul>
                            </div>
                        </div>

                        <div className='w-[calc(50%-15px)] xl:flex hidden h-full mx-[15px] bg-[#222e3c] rounded-[5px] p-[15px]'>
                            <figure className='w-[90%] h-[90%]'>
                                <img className='w-full h-full object-contain' src={map} alt="" />
                            </figure>
                        </div>

                        <div className='w-[calc(25%-15px)] h-full hidden xl:flex  flex-wrap bg-[#222e3c] rounded-[5px] p-[15px] ms-[15px] '>
                            <span className='w-1/2 h-fit py-[5px] font-interb text-[14px] text-[#bdc0c5]'>Browser usage</span>
                            <span onClick={(event) => { dropmenu(event) }} className='w-1/2 h-fit py-[5px] flex justify-end text-[#bdc0c5] text-[14px] relative'>
                                <span className='w-fit h-fit cursor-pointer '>
                                    <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                    </ul>
                                    <IoIosMore />
                                </span>
                            </span>
                            <div className='w-full h-fit  flex  justify-center'>
                                <Doughnut
                                    data={{
                                        datasets: [{
                                            label: 'Recent Movement',
                                            data: browserdata.map(data => data.data),
                                            backgroundColor: [
                                                '#3b7ddd',
                                                '#fcb92c',
                                                '#dc3545',
                                                '#e8eaed'
                                            ],
                                            spacing: 0,
                                            borderRadius: 0,
                                            borderWidth: 10,
                                            borderColor: '#222e3c',
                                            hoverBorderColor: '#222e3c'
                                        }],
                                    }}
                                    options={
                                        {
                                            datasets: {
                                                doughnut: {
                                                    cutout: 60
                                                }
                                            }
                                        }
                                    }
                                />
                            </div>
                            <div className='w-full h-fit flex flex-wrap'>
                                <div className='w-full flex flex-wrap py-[10px] border-b '>
                                    <span className='w-1/2 flex flex-wrap items-center'>
                                        <div className='w-[13px] h-[13px] rounded-[10px] bg-[#3b7ddd]'></div>
                                        <span className='font-interr text-[14px] text-[#b9bcc2] px-[5px]'>Chrome</span>
                                        <div className='px-[4px] py-[2px] rounded-[4px] hover:bg-[#203c43] bg-[#214348] text-[#1cb588] text-[11px] font-interl'>+12%</div>
                                    </span>
                                    <span className='w-1/2 flex flex-wrap font-interr text-[14px] justify-end text-[#b9bcc2]'>4306</span>
                                </div>
                                <div className='w-full flex flex-wrap py-[10px] border-b '>
                                    <span className='w-1/2 flex flex-wrap items-center'>
                                        <div className='w-[13px] h-[13px] rounded-[10px] bg-[#fcb92c]'></div>
                                        <span className='font-interr text-[14px] text-[#b9bcc2] px-[5px]'>Fire fox</span>
                                        <div className='px-[4px] py-[2px] rounded-[4px] hover:bg-[#392c3a] bg-[#3e2f3d] text-[#dc3545] text-[11px] font-interl'>-3%</div>
                                    </span>
                                    <span className='w-1/2 flex flex-wrap font-interr text-[14px] justify-end text-[#b9bcc2]'>3801</span>
                                </div>
                                <div className='w-full flex flex-wrap py-[10px] border-b '>
                                    <span className='w-1/2 flex flex-wrap items-center'>
                                        <div className='w-[13px] h-[13px] rounded-[10px] bg-[#dc3545]'></div>
                                        <span className='font-interr text-[14px] text-[#b9bcc2] px-[5px]'>Edge</span>
                                    </span>
                                    <span className='w-1/2 flex flex-wrap font-interr text-[14px] justify-end text-[#b9bcc2]'>1689</span>
                                </div>
                                <div className='w-full flex flex-wrap py-[10px] border-b '>
                                    <span className='w-1/2 flex flex-wrap items-center'>
                                        <div className='w-[13px] h-[13px] rounded-[10px] bg-[#e8eaed]'></div>
                                        <span className='font-interr text-[14px] text-[#b9bcc2] px-[5px]'>Others</span>
                                    </span>
                                    <span className='w-1/2 flex flex-wrap font-interr text-[14px] justify-end text-[#b9bcc2]'>3251</span>
                                </div>
                            </div>
                        </div>
                        {/*end xl */}
                        {/*end xl */}
                        {/*end xl */}
                        {/*end xl */}

                        <div className='w-full md:w-[calc(50%-15px)] h-[calc(33%-15px)] md:h-[calc(60%-30px)] flex xl:hidden  flex-wrap bg-[#222e3c] rounded-[5px] md:mt-[15px] lg:mt-0 p-[15px] md:ms-[15px] '>
                            <span className='w-[65%] flex items-center h-[10%]   font-interb text-[14px] text-[#bdc0c5]'>Browser usage</span>
                            <span onClick={(event) => { dropmenu(event) }} className='w-[35%] items-center  h-[10%] flex justify-end text-[#bdc0c5] text-[14px] relative'>
                                <span className='w-fit h-fit cursor-pointer '>
                                    <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                        <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                    </ul>
                                    <IoIosMore />
                                </span>
                            </span>
                            <div className='w-full h-[50%] md:h-[40%]  flex  justify-center'>
                                <Doughnut
                                    data={{
                                        datasets: [{
                                            label: 'Recent Movement',
                                            data: browserdata.map(data => data.data),
                                            backgroundColor: [
                                                '#3b7ddd',
                                                '#fcb92c',
                                                '#dc3545',
                                                '#e8eaed'
                                            ],
                                            spacing: 0,
                                            borderRadius: 0,
                                            borderWidth: 10,
                                            borderColor: '#222e3c',
                                            hoverBorderColor: '#222e3c'
                                        }],
                                    }}
                                    options={
                                        {
                                            datasets: {
                                                doughnut: {
                                                    cutout: 55
                                                }
                                            }
                                        }
                                    }
                                />
                            </div>
                            <div className='w-full h-[40%] md:h-[50%]  flex flex-wrap'>
                                <div className='w-full h-[25%] flex flex-wrap py-[10px] border-b '>
                                    <span className='w-1/2 flex flex-wrap items-center'>
                                        <div className='w-[13px] h-[13px] rounded-[10px] bg-[#3b7ddd]'></div>
                                        <span className='font-interr text-[14px] text-[#b9bcc2] px-[5px]'>Chrome</span>
                                        <div className='px-[4px] py-[2px] rounded-[4px] hover:bg-[#203c43] bg-[#214348] text-[#1cb588] text-[11px] font-interl'>+12%</div>
                                    </span>
                                    <span className='w-1/2 flex flex-wrap font-interr text-[14px] justify-end text-[#b9bcc2]'>4306</span>
                                </div>
                                <div className='w-full h-[25%] flex flex-wrap py-[10px] border-b '>
                                    <span className='w-1/2 flex flex-wrap items-center'>
                                        <div className='w-[13px] h-[13px] rounded-[10px] bg-[#fcb92c]'></div>
                                        <span className='font-interr text-[14px] text-[#b9bcc2] px-[5px]'>Fire fox</span>
                                        <div className='px-[4px] py-[2px] rounded-[4px] hover:bg-[#392c3a] bg-[#3e2f3d] text-[#dc3545] text-[11px] font-interl'>-3%</div>
                                    </span>
                                    <span className='w-1/2 flex flex-wrap font-interr text-[14px] justify-end text-[#b9bcc2]'>3801</span>
                                </div>
                                <div className='w-full h-[25%] flex flex-wrap py-[10px] border-b '>
                                    <span className='w-1/2 flex flex-wrap items-center'>
                                        <div className='w-[13px] h-[13px] rounded-[10px] bg-[#dc3545]'></div>
                                        <span className='font-interr text-[14px] text-[#b9bcc2] px-[5px]'>Edge</span>
                                    </span>
                                    <span className='w-1/2 flex flex-wrap font-interr text-[14px] justify-end text-[#b9bcc2]'>1689</span>
                                </div>
                                <div className='w-full h-[25%] flex flex-wrap py-[10px] border-b '>
                                    <span className='w-1/2 flex flex-wrap items-center'>
                                        <div className='w-[13px] h-[13px] rounded-[10px] bg-[#e8eaed]'></div>
                                        <span className='font-interr text-[14px] text-[#b9bcc2] px-[5px]'>Others</span>
                                    </span>
                                    <span className='w-1/2 flex flex-wrap font-interr text-[14px] justify-end text-[#b9bcc2]'>3251</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-full xl:hidden h-[calc(33%-15px)] md:h-[calc(40%-15px)] bg-[#222e3c] rounded-[5px] p-[15px]'>
                            <figure className='w-[90%] h-[90%]'>
                                <img className='w-full h-full object-contain' src={map} alt="" />
                            </figure>
                        </div>
                    </div>


                    <div className='w-full h-[25%] md:h-[30%] lg:h-[30%] xl:h-[35%] flex flex-wrap items-center justify-between '>
                        <div className='w-full md:w-[calc(65%-15px)] lg:w-[calc(75%-15px)] h-[calc(50%-30px)] md:h-[calc(100%-30px)] flex flex-wrap rounded-[5px] bg-[#222e3c] px-[15px]'>
                            <span className='w-full flex flex-wrap h-[10%] '>
                                <span className='w-1/2 h-full flex items-center font-interb text-[14px] text-[#bdc0c5]'>Latest Projects</span>
                                <span onClick={(event) => { dropmenu(event) }} className='w-1/2 items-center  h-full flex justify-end text-[#bdc0c5] text-[14px] relative'>
                                    <span className='w-fit h-fit cursor-pointer '>
                                        <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                            <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                            <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                            <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                        </ul>
                                        <IoIosMore />
                                    </span>
                                </span>
                            </span>

                            <div className='w-full h-[90%] flex flex-wrap  justify-between'>
                                <div className='flex flex-wrap h-full  w-[60%] lg:w-[32.5%] xl:w-[26%]'>
                                    <div className='w-full h-[10%] flex flex-wrap  font-interb text-[14px] text-[#aaafb4] items-center'>
                                        Name
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-[30%] h-full flex items-center '>
                                            <figure className='w-[40px] h-[40px] bg-[#2d3846] flex items-center justify-center  rounded-[2px]'>
                                                <img className='w-[30px] h-[30px] object-cover' src={svg2} alt="" />
                                            </figure>
                                        </span>
                                        <div className='w-[70%] h-full flex flex-wrap '>
                                            <span className='w-full h-1/2 font-interb text-[14px] flex items-end text-[#aaafb4] '>Project Apollo</span>
                                            <span className='w-full h-1/2 font-interm text-[14px] flex items-center text-[#aaafb4] '>Web, UI/UX Design</span>
                                        </div>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-[30%] h-full flex items-center '>
                                            <figure className='w-[40px] h-[40px] bg-[#2d3846] flex items-center justify-center  rounded-[2px]'>
                                                <img className='w-[30px] h-[30px] object-cover' src={svg4} alt="" />
                                            </figure>
                                        </span>
                                        <div className='w-[70%] h-full flex flex-wrap '>
                                            <span className='w-full h-1/2 font-interb text-[14px] flex items-end text-[#aaafb4] '>Project Bongo</span>
                                            <span className='w-full h-1/2 font-interm text-[14px] flex items-center text-[#aaafb4] '>Web</span>
                                        </div>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-[30%] h-full flex items-center '>
                                            <figure className='w-[40px] h-[40px] bg-[#2d3846] flex items-center justify-center  rounded-[2px]'>
                                                <img className='w-[30px] h-[30px] object-cover' src={svg5} alt="" />
                                            </figure>
                                        </span>
                                        <div className='w-[70%] h-full flex flex-wrap '>
                                            <span className='w-full h-1/2 font-interb text-[14px] flex items-end text-[#aaafb4] '>Project Canary</span>
                                            <span className='w-full h-1/2 font-interm text-[14px] flex items-center text-[#aaafb4] '>Web, UI/UX Design</span>
                                        </div>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-[30%] h-full flex items-center '>
                                            <figure className='w-[40px] h-[40px] bg-[#2d3846] flex items-center justify-center  rounded-[2px]'>
                                                <img className='w-[30px] h-[30px] object-cover' src={svg1} alt="" />
                                            </figure>
                                        </span>
                                        <div className='w-[70%] h-full flex flex-wrap '>
                                            <span className='w-full h-1/2 font-interb text-[14px] flex items-end text-[#aaafb4] '>Project Edison</span>
                                            <span className='w-full h-1/2 font-interm text-[14px] flex items-center text-[#aaafb4] '>UI/UX Design</span>
                                        </div>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-[30%] h-full flex items-center '>
                                            <figure className='w-[40px] h-[40px] bg-[#2d3846] flex items-center justify-center  rounded-[2px]'>
                                                <img className='w-[30px] h-[30px] object-cover' src={svg3} alt="" />
                                            </figure>
                                        </span>
                                        <div className='w-[70%] h-full flex flex-wrap '>
                                            <span className='w-full h-1/2 font-interb text-[14px] flex items-end text-[#aaafb4] '>Project Indigo</span>
                                            <span className='w-full h-1/2 font-interm text-[14px] flex items-center text-[#aaafb4] '>Web, UI/UX Design</span>
                                        </div>
                                    </div>
                                </div>
                                {/* first */}
                                {/* first */}
                                {/* first */}
                                <div className='hidden xl:flex flex-wrap h-full  w-[27%] ps-[10px]'>
                                    <div className='w-full h-[10%] flex flex-wrap  font-interb text-[14px] text-[#aaafb4] items-center'>
                                        Company
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Lechters</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>Real Estate</span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Cellophane Transportation</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>Transportation</span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Clemens</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>Insurance</span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Affinity Investment Group</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>Finance</span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Konsili</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>Retail</span>
                                    </div>
                                </div>
                                {/* second */}
                                {/* second */}
                                {/* second */}
                                <div className='hidden lg:flex flex-wrap h-full  w-[26.5%] xl:w-[20%] ps-[10px]'>
                                    <div className='w-full h-[10%] flex flex-wrap  font-interb text-[14px] text-[#aaafb4] items-center'>
                                        Author
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Vanessa Tucker</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>HTML, JS, React</span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>William Harris</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>HTML, JS, Vue</span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Sharon Lessman</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>HTML, JS, Laravel</span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Vanessa Tucker</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>HTML, JS, React</span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interb text-[14px] text-[#aaafb4]'>Christina Mason</span>
                                        <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#aaafb4]'>HTML, JS, Vue</span>
                                    </div>
                                </div>
                                {/* third */}
                                {/* third */}
                                {/* third */}
                                <div className='flex md:hidden lg:flex flex-wrap h-full  w-[30%] lg:w-[20%] xl:w-[13.5%] ps-[10px]'>
                                    <div className='w-full h-[10%] flex flex-wrap  font-interb text-[14px] text-[#aaafb4] items-center'>
                                        Status
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interm text-[14px] text-[#aaafb4]'>65%</span>
                                        <span className='w-full h-1/2 flex items-center'>
                                            <div className='w-full h-[8px] flex bg-[#a5f1db] rounded-[10px] overflow-hidden'>
                                                <span className='w-[65%] h-full bg-[#1cbb8c]'></span>
                                            </div>
                                        </span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interm text-[14px] text-[#aaafb4]'>33%</span>
                                        <span className='w-full h-1/2 flex items-center'>
                                            <div className='w-full h-[8px] flex bg-[#f8d8db] rounded-[10px] overflow-hidden'>
                                                <span className='w-[33%] h-full bg-[#dc3545]'></span>
                                            </div>
                                        </span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interm text-[14px] text-[#aaafb4]'>50%</span>
                                        <span className='w-full h-1/2 flex items-center'>
                                            <div className='w-full h-[8px] flex bg-[#fff8e9] rounded-[10px] overflow-hidden'>
                                                <span className='w-[50%] h-full bg-[#fcb92c]'></span>
                                            </div>
                                        </span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interm text-[14px] text-[#aaafb4]'>80%</span>
                                        <span className='w-full h-1/2 flex items-center'>
                                            <div className='w-full h-[8px] flex bg-[#a5f1db] rounded-[10px] overflow-hidden'>
                                                <span className='w-[89%] h-full bg-[#1cbb8c]'></span>
                                            </div>
                                        </span>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap '>
                                        <span className='w-full h-1/2 flex items-end font-interm text-[14px] text-[#aaafb4]'>78%</span>
                                        <span className='w-full h-1/2 flex items-center'>
                                            <div className='w-full h-[8px] flex bg-[#dee9f9] rounded-[10px] overflow-hidden'>
                                                <span className='w-[78%] h-full bg-[#3b7ddd]'></span>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                {/* fourth */}
                                {/* fourth */}
                                {/* fourth */}
                                <div className='hidden md:flex flex-wrap h-full  w-[40%] lg:w-[20%] xl:w-[13.5%] ps-[10px]'>
                                    <div className='w-full h-[10%] flex flex-wrap  font-interb text-[14px] text-[#aaafb4] items-center'>
                                        Action
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap  items-center justify-start'>
                                        <button className='w-fit h-fit px-[14px] py-[6px] hover:bg-[#222e3c] rounded-[3px] bg-[#2d3846] font-interm text-[#cbced1] text-[14px]'>View</button>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap  items-center'>
                                        <button className='w-fit h-fit px-[14px] py-[6px] hover:bg-[#222e3c] rounded-[3px] bg-[#2d3846] font-interm text-[#cbced1] text-[14px]'>View</button>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap  items-center'>
                                        <button className='w-fit h-fit px-[14px] py-[6px] hover:bg-[#222e3c] rounded-[3px] bg-[#2d3846] font-interm text-[#cbced1] text-[14px]'>View</button>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap  items-center'>
                                        <button className='w-fit h-fit px-[14px] py-[6px] hover:bg-[#222e3c] rounded-[3px] bg-[#2d3846] font-interm text-[#cbced1] text-[14px]'>View</button>
                                    </div>
                                    <div className='w-full h-[18%] flex flex-wrap  items-center'>
                                        <button className='w-fit h-fit px-[14px] py-[6px] hover:bg-[#222e3c] rounded-[3px] bg-[#2d3846] font-interm text-[#cbced1] text-[14px]'>View</button>
                                    </div>
                                </div>
                                {/* fifth */}
                                {/* fifth */}
                                {/* fifth */}
                            </div>
                        </div>

                        <div className='w-full md:w-[calc(35%-15px)] lg:w-[calc(25%-15px)] h-[calc(50%-30px)] md:h-[calc(100%-30px)] flex flex-wrap rounded-[5px] bg-[#222e3c] p-[15px]'>
                            <div className='w-full h-[10%] flex flex-wrap'>
                                <span className='w-1/2 h-full flex items-center font-interb text-[14px] text-[#bdc0c5]'>Monthly Sales</span>
                                <span onClick={(event) => { dropmenu(event) }} className='w-1/2 items-center  h-full flex justify-end text-[#bdc0c5] text-[14px] relative'>
                                    <span className='w-fit h-fit cursor-pointer '>
                                        <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                            <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                            <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                            <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                        </ul>
                                        <IoIosMore />
                                    </span>
                                </span>
                            </div>
                            <div className='w-full h-[90%]  flex  justify-center'>
                                <div className='w-full h-full hidden md:flex'>
                                    <Bar
                                        data={{
                                            labels: Data3.map(data => data.label),
                                            datasets: [{
                                                label: '',
                                                data: Data3.map(data => data.data),
                                                backgroundColor: '#3b7ddd',
                                                borderRadius: 10,
                                                barThickness: 5,
                                            }],
                                        }}
                                        options={
                                            {
                                                maintainAspectRatio: false,
                                            }
                                        }
                                    />
                                </div>
                                <div className='w-full h-full flex md:hidden'>
                                    <Bar
                                        data={{
                                            labels: Data3.map(data => data.label),
                                            datasets: [{
                                                label: '',
                                                data: Data3.map(data => data.data),
                                                backgroundColor: '#3b7ddd',
                                                borderRadius: 10,
                                                barThickness: 15,
                                            }],
                                        }}
                                        options={
                                            {
                                                maintainAspectRatio: false,
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}

export default analystic
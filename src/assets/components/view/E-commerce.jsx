import React from 'react'
import Header from './header'
import { useRef } from 'react'
import { LuDollarSign } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { Chart as ChartJS, elements } from 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2'
import Data from './../data.json'
import Data2 from './../data2.json'
import { IoIosMore } from "react-icons/io";
import logo1 from './../../img/1.svg'
import logo2 from './../../img/2.svg'
import logo3 from './../../img/3.svg'
import logo4 from './../../img/4.svg'
import logo5 from './../../img/5.svg'

function Ecommerce() {
  const ecommereve = useRef()
  const ecommerevefunc = (f) => {
    console.log(f);
    if (f == false) {
      ecommereve.current.classList.add('w-full')
      ecommereve.current.classList.remove('md:w-[calc(100%-260px)]')
    } else {
      ecommereve.current.classList.remove('w-full')
      ecommereve.current.classList.add('md:w-[calc(100%-260px)]')
    }
  }
  const smecommerevefunc = (f) => {
    if (f == false) {
      ecommereve.current.classList.remove('right-[-260px]')
      ecommereve.current.classList.add('right-0')
    } else {
      ecommereve.current.classList.add('right-[-260px]')
      ecommereve.current.classList.remove('right-0')
    }
  }
  function dropmenu(e) {
    let ul = e.target.nextElementSibling
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
  return (
    <section className='w-full h-[100vh] flex flex-wrap relative'>
      <Header smpagesfunc={(event) => { smecommerevefunc(event) }} pagesfunc={(event) => { ecommerevefunc(event) }} />
      <div ref={ecommereve} className='w-[100%] md:w-[calc(100%-260px)]  px-[25px] flex flex-wrap content-start duration-[0.2s] h-[275vh] lg:h-[180vh] absolute top-[70px] right-[-260px] md:right-0 bg-[#19222c]'>

        <div className='w-full h-[5%] flex flex-wrap '>
          <h2 className='w-1/2 h-full font-interb text-[white] text-[21px] hidden md:flex items-center'>E-commerce Dashboard</h2>
          <div className='w-full md:w-1/2 h-full flex flex-wrap content-center justify-end'>
            <button className='px-[20px] py-[7px] rounded-[3px] font-interm text-[14px] mx-[5px] text-[#d3d5d8] bg-[#222e3c] hover:bg-[#1b2c40]'>Invite a Friend</button>
            <button className='px-[20px] py-[7px] rounded-[3px] font-interm text-[14px] mx-[5px] text-[#d3d5d8] bg-[#3b7ddd] hover:bg-[#355b90]'>New Project</button>
          </div>
        </div>

        <div className='w-full h-[38%] xl:h-[15%] flex flex-wrap  py-[10px] justify-between '>

          <div className='lg:w-[23%] w-full h-[20%] my-[7px] lg:my-0 lg:h-full flex flex-wrap bg-[#222e3c] rounded-[5px] p-[10px]'>
            <div className='w-full h-[30%] flex flex-wrap '>
              <p className='w-1/2 h-full flex items-center text-white font-interb text-[14px]'>Income</p>
              <div className='w-1/2 h-full flex items-center justify-end '>
                <div className='w-[35px] h-[35px] rounded-[50px] flex items-center justify-center text-[#3b7ddd] bg-[#384350]'><LuDollarSign /></div>
              </div>
            </div>
            <span className='w-full h-[30%] flex items-center  font-interr text-[28px] text-white'>$47.482</span>
            <div className='w-full h-[30%] flex flex-wrap '>
              <div className='h-[100%] flex justify-start items-center '>
                <div className='px-[3px] py-[1px] rounded-[4px] hover:bg-[#203c43] bg-[#214348] text-[#1cb588] text-[11px] font-interl'>6.65%</div>
              </div>
              <p className='h-full flex items-center font-interm text-[#9499a0] ps-[3px] text-[14px]'>Since last week</p>
            </div>
          </div>

          <div className='lg:w-[23%] w-full h-[20%] my-[7px] lg:my-0 lg:h-full flex flex-wrap bg-[#222e3c] rounded-[5px] p-[10px]'>
            <div className='w-full h-[30%] flex flex-wrap '>
              <p className='w-1/2 h-full flex items-center text-white font-interb text-[14px]'>Orders</p>
              <div className='w-1/2 h-full flex items-center justify-end '>
                <div className='w-[35px] h-[35px] rounded-[50px] flex items-center justify-center text-[#3b7ddd] bg-[#384350]'><FiShoppingBag /></div>
              </div>
            </div>
            <span className='w-full h-[30%] flex items-center  font-interr text-[28px] text-white'>2.542</span>
            <div className='w-full h-[30%] flex flex-wrap '>
              <div className='h-[100%] flex justify-start items-center '>
                <div className='px-[3px] py-[1px] rounded-[4px] hover:bg-[#392c3a] bg-[#3e2f3d] text-[#dc3545] text-[11px] font-interl'>-5.25%</div>
              </div>
              <p className='h-full flex items-center font-interm text-[#9499a0] ps-[3px] text-[14px]'>Since last week</p>
            </div>
          </div>

          <div className='lg:w-[23%] w-full h-[20%] my-[7px] lg:my-0 lg:h-full flex flex-wrap bg-[#222e3c] rounded-[5px] p-[10px]'>
            <div className='w-full h-[30%] flex flex-wrap '>
              <p className='w-1/2 h-full flex items-center text-white font-interb text-[14px]'>Activity</p>
              <div className='w-1/2 h-full flex items-center justify-end '>
                <div className='w-[35px] h-[35px] rounded-[50px] flex items-center justify-center text-[#3b7ddd] bg-[#384350]'><TbActivityHeartbeat /></div>
              </div>
            </div>
            <span className='w-full h-[30%] flex items-center  font-interr text-[28px] text-white'>16.300</span>
            <div className='w-full h-[30%] flex flex-wrap '>
              <div className='h-[100%] flex justify-start items-center '>
                <div className='px-[3px] py-[1px] rounded-[4px] hover:bg-[#203c43] bg-[#214348] text-[#1cb588] text-[11px] font-interl'>4.65%</div>
              </div>
              <p className='h-full flex items-center font-interm text-[#9499a0] ps-[3px] text-[14px]'>Since last week</p>
            </div>
          </div>

          <div className='lg:w-[23%] w-full h-[20%] my-[7px] lg:my-0 lg:h-full flex flex-wrap bg-[#222e3c] rounded-[5px] p-[10px]'>
            <div className='w-full h-[30%] flex flex-wrap '>
              <p className='w-1/2 h-full flex items-center text-white font-interb text-[14px]'>Revenue</p>
              <div className='w-1/2 h-full flex items-center justify-end '>
                <div className='w-[35px] h-[35px] rounded-[50px] flex items-center justify-center text-[#3b7ddd] bg-[#384350]'><FiShoppingCart /></div>
              </div>
            </div>
            <span className='w-full h-[30%] flex items-center  font-interr text-[28px] text-white'>$20.120</span>
            <div className='w-full h-[30%] flex flex-wrap '>
              <div className='h-[100%] flex justify-start items-center '>
                <div className='px-[3px] py-[1px] rounded-[4px] hover:bg-[#203c43] bg-[#214348] text-[#1cb588] text-[11px] font-interl'>2.35%</div>
              </div>
              <p className='h-full flex items-center font-interm text-[#9499a0] ps-[3px] text-[14px]'>Since last week</p>
            </div>
          </div>

        </div>

        <div className='w-full h-[20%] xl:h-[45%] flex flex-wrap bg-[#222e3c] justify-center rounded-[5px] my-[15px] '>
          <div className='w-full h-[20%] xl:h-[10%] flex flex-wrap  justify-end'>
            <div className='w-fit h-full flex  mx-[5px] py-[15px] '>
              <select name="" id="" className='bg-[#2d3846] text-white px-[10px] text-[14px]  rounded-[3px] '>
                <option className='font-interr' value="">jan</option>
                <option className='font-interr' value="">feb</option>
                <option className='font-interr' value="">mar</option>
                <option className='font-interr' value="">apr</option>
              </select>
            </div>
            <div className='w-fit h-full flex mx-[5px] py-[15px]'>
              <input type="text" placeholder='search...' className='bg-[#2d3846] text-[14px] ps-[5px] rounded-[3px]' />
            </div>
          </div>
          <div className='w-full px-[30px] h-[80%] xl:h-[90%] flex  justify-center '>
            <Line
              data={{
                labels: Data.map(data => data.label),
                datasets: [{
                  label: 'Total Revenue',
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

        <div className='w-full h-[32%] xl:h-[30%] flex flex-wrap lg:flex-nowrap justify-between '>
          <div className='w-full lg:w-[25%] lg:me-[15px] my-[7px] h-[40%] lg:h-full flex flex-wrap justify-center  rounded-[5px] bg-[#222e3c] p-[15px] items-end'>
            <Bar
              data={{
                labels: Data2.map(data => data.label),
                datasets: [{
                  label: 'Sales/Revenue',
                  data: Data2.map(data => data.data),
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
          <div className='w-full lg:w-[75%] lg:ms-[15px] my-[7px] h-[60%] lg:h-full flex flex-wrap  rounded-[5px] bg-[#222e3c] p-[15px]'>

            <div className='w-full h-[10%] flex flex-wrap  justify-between'>
              <h1 className='w-1/2 h-full flex items-center font-interb text-[14.8] text-[#d3d5d8]'>Top Selling Products</h1>
              <span className='w-fit h-full flex items-center text-[#d3d5d8] relative cursor-pointer'>
                <IoIosMore onClick={(event) => { dropmenu(event) }} />
                <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                  <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                  <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                  <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                </ul>
              </span>
            </div>

            <div className='w-full h-[90%] flex flex-wrap '>

              <div className='w-[50%] lg:w-[30%] xl:w-[22%] h-full flex flex-wrap '>
                <div className='w-full h-1/6 flex flex-wrap  items-center'>
                  <p className='text-[14px] text-[#bdc0c5] font-interb'>Name</p>
                </div>
                <div className='w-full h-1/6 flex flex-wrap  items-center'>
                  <div className='w-fit h-full flex items-center '>
                    <div className='w-[40px] h-[40px] rounded-[3px] bg-[#2d3846] flex items-center justify-center'>
                      <figure className='w-[80%] h-[80%] flex items-center justify-center'>
                        <img className='object-contain' src={logo1} alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className='w-1/2 ms-[10px]  h-full flex flex-wrap '>
                    <span className='w-full h-1/2 font-interb text-[14px] text-[#bdc0c5]'>Aurora</span>
                    <span className='w-full h-1/2 font-interm text-[14px] text-[#bdc0c5]'>Ui kit</span>
                  </div>
                </div>
                <div className='w-full h-1/6 flex flex-wrap  items-center'>
                  <div className='w-fit h-full flex items-center '>
                    <div className='w-[40px] h-[40px] rounded-[3px] bg-[#2d3846] flex items-center justify-center'>
                      <figure className='w-[80%] h-[80%] flex items-center justify-center'>
                        <img className='object-contain' src={logo2} alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className='w-1/2 ms-[10px]  h-full flex flex-wrap '>
                    <span className='w-full h-1/2 font-interb text-[14px] text-[#bdc0c5]'>Bender</span>
                    <span className='w-full h-1/2 font-interm text-[14px] text-[#bdc0c5]'>Dashboard</span>
                  </div>
                </div>
                <div className='w-full h-1/6 flex flex-wrap  items-center'>
                  <div className='w-fit h-full flex items-center '>
                    <div className='w-[40px] h-[40px] rounded-[3px] bg-[#2d3846] flex items-center justify-center'>
                      <figure className='w-[80%] h-[80%] flex items-center justify-center'>
                        <img className='object-contain' src={logo3} alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className='w-1/2 ms-[10px]  h-full flex flex-wrap '>
                    <span className='w-full h-1/2 font-interb text-[14px] text-[#bdc0c5]'>Camelot</span>
                    <span className='w-full h-1/2 font-interm text-[14px] text-[#bdc0c5]'>Dashboard</span>
                  </div>
                </div>
                <div className='w-full h-1/6 flex flex-wrap  items-center'>
                  <div className='w-fit h-full flex items-center '>
                    <div className='w-[40px] h-[40px] rounded-[3px] bg-[#2d3846] flex items-center justify-center'>
                      <figure className='w-[80%] h-[80%] flex items-center justify-center'>
                        <img className='object-contain' src={logo4} alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className='w-1/2 ms-[10px]  h-full flex flex-wrap '>
                    <span className='w-full h-1/2 font-interb text-[14px] text-[#bdc0c5]'>Edison</span>
                    <span className='w-full h-1/2 font-interm text-[14px] text-[#bdc0c5]'>Ui kit</span>
                  </div>
                </div>
                <div className='w-full h-1/6 flex flex-wrap  items-center'>
                  <div className='w-fit h-full flex items-center '>
                    <div className='w-[40px] h-[40px] rounded-[3px] bg-[#2d3846] flex items-center justify-center'>
                      <figure className='w-[80%] h-[80%] flex items-center justify-center'>
                        <img className='object-contain' src={logo5} alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className='w-1/2 ms-[10px]  h-full flex flex-wrap '>
                    <span className='w-full h-1/2 font-interb text-[14px] text-[#bdc0c5]'>Fusion</span>
                    <span className='w-full h-1/2 font-interm text-[14px] text-[#bdc0c5]'>Dashboard</span>
                  </div>
                </div>
              </div>


              <div className='w-[31%] h-full hidden xl:flex flex-wrap '>

                <div className='w-full h-1/6 flex items-center '>
                  <p className='w-full font-interb text-[14px] text-[#bdc0c5]'>Company</p>
                </div>
                <div className='w-full h-1/6 flex flex-wrap '>
                  <span className='w-full h-1/2 flex items-center font-interb text-[14px] text-[#bdc0c5]'>Lechters</span>
                  <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#bdc0c5]'>Real Estate</span>
                </div>
                <div className='w-full h-1/6 flex flex-wrap '>
                  <span className='w-full h-1/2 flex items-center font-interb text-[14px] text-[#bdc0c5]'>Cellophane Transportation</span>
                  <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#bdc0c5]'>Transportation</span>
                </div>
                <div className='w-full h-1/6 flex flex-wrap '>
                  <span className='w-full h-1/2 flex items-center font-interb text-[14px] text-[#bdc0c5]'>Clemens</span>
                  <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#bdc0c5]'>Insurance</span>
                </div>
                <div className='w-full h-1/6 flex flex-wrap '>
                  <span className='w-full h-1/2 flex items-center font-interb text-[14px] text-[#bdc0c5]'>Konsili</span>
                  <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#bdc0c5]'>Retail</span>
                </div>

              </div>

              <div className='w-[40%] xl:w-[22%] h-full hidden lg:flex flex-wrap '>

                <div className='w-full h-1/6 flex items-center '>
                  <span className='w-full font-interb text-[14px] text-[#bdc0c5]'>	Assigned</span>
                </div>
                <div className='w-full h-1/6 flex flex-wrap '>
                  <span className='w-full h-1/2 flex items-center font-interb text-[14px] text-[#bdc0c5]'>Vanessa Tucker</span>
                  <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#bdc0c5]'>HTML, JS, React</span>
                </div>
                <div className='w-full h-1/6 flex flex-wrap '>
                  <span className='w-full h-1/2 flex items-center font-interb text-[14px] text-[#bdc0c5]'>William Harris</span>
                  <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#bdc0c5]'>HTML, JS, Vue</span>
                </div>
                <div className='w-full h-1/6 flex flex-wrap '>
                  <span className='w-full h-1/2 flex items-center font-interb text-[14px] text-[#bdc0c5]'>Darwin</span>
                  <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#bdc0c5]'>HTML, JS, Laravel</span>
                </div>
                <div className='w-full h-1/6 flex flex-wrap '>
                  <span className='w-full h-1/2 flex items-center font-interb text-[14px] text-[#bdc0c5]'>Christina Mason</span>
                  <span className='w-full h-1/2 flex items-center font-interm text-[14px] text-[#bdc0c5]'>HTML, JS, Vue</span>
                </div>

              </div>

              <div className='w-[50%] lg:w-[30%] xl:w-[25%] h-full flex flex-wrap '>
                <div className='w-1/2 h-full flex flex-wrap '>
                  <span className='w-full h-1/6 flex items-center pe-[5px] justify-end font-interb text-[14px] text-[#bdc0c5]'>Orders</span>
                  <span className='w-full h-1/6 flex items-center pe-[5px] justify-end font-interm text-[14px] text-[#bdc0c5]'>520</span>
                  <span className='w-full h-1/6 flex items-center pe-[5px] justify-end font-interm text-[14px] text-[#bdc0c5]'>240</span>
                  <span className='w-full h-1/6 flex items-center pe-[5px] justify-end font-interm text-[14px] text-[#bdc0c5]'>180</span>
                  <span className='w-full h-1/6 flex items-center pe-[5px] justify-end font-interm text-[14px] text-[#bdc0c5]'>410</span>
                  <span className='w-full h-1/6 flex items-center pe-[5px] justify-end font-interm text-[14px] text-[#bdc0c5]'>250</span>
                </div>
                <div className='w-1/2 h-full flex flex-wrap  ps-[5px]'>
                  <span className='w-full h-1/6 flex items-center font-interb text-[14px] text-[#bdc0c5]'>Status</span>
                  <span className='w-full h-1/6 flex items-center ps-[5px]'>
                    <div className='w-fit h-fit px-[5px] py-[1px] bg-[#214348] hover:bg-[#203c43] rounded-[3px] text-[11px] text-[#1d9a79]'>In progress</div>
                  </span>
                  <span className='w-full h-1/6 flex items-center ps-[5px]'>
                    <div className='w-fit h-fit px-[5px] py-[1px] bg-[#43433a] hover:bg-[#414033] rounded-[3px] text-[11px] text-[#e5ab2e]'>Paused</div>
                  </span>
                  <span className='w-full h-1/6 flex items-center ps-[5px]'>
                    <div className='w-fit h-fit px-[5px] py-[1px] bg-[#214348] hover:bg-[#203c43] rounded-[3px] text-[11px] text-[#1d9a79]'>In progress</div>
                  </span>
                  <span className='w-full h-1/6 flex items-center ps-[5px]'>
                    <div className='w-fit h-fit px-[5px] py-[1px] bg-[#3e2f3d] hover:bg-[#392c3a] rounded-[3px] text-[11px] text-[#b33343]'>canceled</div>
                  </span>
                  <span className='w-full h-1/6 flex items-center ps-[5px]'>
                    <div className='w-fit h-fit px-[5px] py-[1px] bg-[#43433a] hover:bg-[#414033] rounded-[3px] text-[11px] text-[#e5ab2e]'>Paused</div>
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Ecommerce
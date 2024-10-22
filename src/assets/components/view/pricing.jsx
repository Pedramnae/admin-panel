import React from 'react'
import Header from './header'
import { useRef } from 'react';

function pricing() {
  const mounthly = useRef()
  const annual = useRef()
  const pricing = useRef()

  function switchkey(e) {
    let key = e.currentTarget.getAttribute('data-name')
    console.log(e.currentTarget.previousElementSibling);
    if (key == 'mounthlykey') {
      annual.current.classList.add('hidden')
      annual.current.classList.remove('flex')
      mounthly.current.classList.remove('hidden')
      mounthly.current.classList.add('flex')
      e.currentTarget.classList.add('bg-[#3b7ddd]')
      e.currentTarget.classList.add('text-white')
      e.currentTarget.classList.remove('text-[#3b7ddd]')
      e.currentTarget.nextElementSibling.classList.add('text-[#3b7ddd]')
      e.currentTarget.nextElementSibling.classList.remove('bg-[#3b7ddd]')
      e.currentTarget.nextElementSibling.classList.remove('text-white')
    } else {
      mounthly.current.classList.add('hidden')
      mounthly.current.classList.remove('flex')
      annual.current.classList.remove('hidden')
      annual.current.classList.add('flex')
      e.currentTarget.classList.add('bg-[#3b7ddd]')
      e.currentTarget.classList.add('text-white')
      e.currentTarget.classList.remove('text-[#3b7ddd]')
      e.currentTarget.previousElementSibling.classList.add('text-[#3b7ddd]')
      e.currentTarget.previousElementSibling.classList.remove('bg-[#3b7ddd]')
      e.currentTarget.previousElementSibling.classList.remove('text-white')
    }
  }

  const pricingfunc = (f) => {
    console.log(f);
    if (f == false) {
      pricing.current.classList.add('w-full')
      pricing.current.classList.remove('md:w-[calc(100%-260px)]')
    } else {
      pricing.current.classList.remove('w-full')
      pricing.current.classList.add('md:w-[calc(100%-260px)]')
    }
  }
  const smpricingfunc = (f) => {
    if (f == false) {
      pricing.current.classList.remove('right-[-260px]')
      pricing.current.classList.add('right-0')
    } else {
      pricing.current.classList.add('right-[-260px]')
      pricing.current.classList.remove('right-0')
    }
  }
  return (
    <section className='w-full h-[100vh] flex flex-wrap relative'>
      <Header smpagesfunc={(event) => { smpricingfunc(event) }} pagesfunc={(event) => { pricingfunc(event) }} />
      <div ref={pricing} className='w-[100%] md:w-[calc(100%-260px)] overflow-x-hidden px-[20px] flex flex-wrap content-start duration-[0.2s] h-[370vh] md:h-[280vh] lg:h-[180vh] absolute top-[70px] right-[-260px] md:right-0 bg-[#19222c]'>
        <h1 className='w-full h-[3%]  flex items-end text-white font-interm text-[21px]'>Plans & pricing</h1>
        <div className='w-full h-[97%] flex flex-wrap '>

          <div className='w-full h-[10%] flex flex-wrap '>
            <h2 className='w-full h-1/3 flex justify-center items-center font-interm text-white text-[28px]'>We have a plan for everyone</h2>
            <p className='w-full h-1/3 flex items-center justify-center font-interm text-center text-[17px] text-[#bdc0c5]'>Whether you're a business or an individual, 14-day trial no credit card required.</p>
            <div className='w-full h-1/3 flex items-center justify-center'>
              <div className='w-[240px] h-[30px] flex flex-wrap rounded-[5px] border border-[#3b7ddd]'>
                <button onClick={(event) => { switchkey(event) }} data-name='mounthlykey' className='w-1/2 h-full flex items-center justify-center font-interr text-[14px] text-white bg-[#3b7ddd] hover:text-white hover:bg-[#3b7ddd] duration-[0.4s]'>Mounthly billing</button>
                <button onClick={(event) => { switchkey(event) }} data-name='annualkey' className='w-1/2 h-full flex items-center justify-center font-interr text-[14px] text-[#3b7ddd] hover:text-white hover:bg-[#3b7ddd] duration-[0.4s]'>Annual billing</button>
              </div>
            </div>
          </div>

          <div className='w-full h-[60%] md:h-[40%] flex flex-wrap  content-center justify-center'>
            <div ref={mounthly} className='w-full h-full flex flex-wrap justify-center content-center'>
              <div className='w-full  md:w-[29%] lg:w-[24%] h-[30%] my-[10px] md:h-[94%] flex flex-wrap bg-[#222e3c] mx-[6px] rounded-[5px]'>
                <div className='w-full h-[80%] flex flex-wrap  content-start'>
                  <p className='w-full h-[15%] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Free</p>
                  <p className='w-full h-[25%] flex items-center justify-center fotn-interm text-[#bdc0c5] text-[56px]'>$0</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#e2ebfc] text-[14px]'>Includes:</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>1 User</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>5 Projects</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>5 GB storage</p>
                </div>
                <div className='w-full h-[20%] flex  justify-center items-center'>
                  <button className='px-[20px] py-[10px] font-interm text-[#3b7ddd] text-[14px] border border-[#3b7ddd] rounded-[5px] duration-[0.4s] hover:text-white hover:bg-[#3b7ddd]'>Sign up</button>
                </div>

              </div>
              <div className='w-full  md:w-[29%] lg:w-[24%] h-[30%] my-[10px] md:h-[94%] flex flex-wrap bg-[#222e3c] mx-[6px] rounded-[5px]'>
                <div className='w-full h-[80%] flex flex-wrap  content-start'>
                  <p className='w-full h-[15%] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Standard</p>
                  <div className='w-full h-[25%] flex  justify-center fotn-interm text-[#bdc0c5]'>
                    <p className='w-fit h-full flex items-center font-interr text-[#bdc0c5] text-[56px]'>$19</p>
                    <p className='w-fit h-full flex items-center font-interr text-[#bdc0c5] text-[14px]'>/mo</p>
                  </div>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#e2ebfc] text-[14px]'>Includes:</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>5 User</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>50 Projects</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>50 GB storage</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Security policy</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Weekly backups</p>
                </div>
                <div className='w-full h-[20%] flex  justify-center items-center'>
                  <button className='px-[20px] py-[10px] font-interm text-white text-[14px]  bg-[#3b7ddd]  rounded-[5px] duration-[0.4s]  hover:bg-[#2c4a77]'>Try it for free</button>
                </div>
              </div>

              <div className='w-full  md:w-[29%] lg:w-[24%] h-[30%] my-[10px] md:h-[94%] flex flex-wrap bg-[#222e3c] mx-[6px] rounded-[5px]'>
                <div className='w-full h-[80%] flex flex-wrap  content-start'>
                  <p className='w-full h-[15%] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Plus</p>
                  <div className='w-full h-[25%] flex  justify-center fotn-interm text-[#bdc0c5]'>
                    <p className='w-fit h-full flex items-center font-interr text-[#bdc0c5] text-[56px]'>$39</p>
                    <p className='w-fit h-full flex items-center font-interr text-[#bdc0c5] text-[14px]'>/mo</p>
                  </div>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#e2ebfc] text-[14px]'>Includes:</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Unlimited users</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Unlimited projects</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>250 GB storage</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Priority support</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Security policy</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Daily backups</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Custom CSS</p>
                </div>
                <div className='w-full h-[20%] flex  justify-center items-center'>
                  <button className='px-[20px] py-[10px] font-interm text-[#3b7ddd] text-[14px] border border-[#3b7ddd] rounded-[5px] duration-[0.4s] hover:text-white hover:bg-[#3b7ddd]'>Try it for free</button>
                </div>
              </div>
            </div>



            <div ref={annual} className='w-full h-full hidden flex-wrap justify-center content-center'>
              <div className='w-full  md:w-[29%] lg:w-[24%] h-[30%] my-[10px] md:h-[94%] flex flex-wrap bg-[#222e3c] mx-[6px] rounded-[5px]'>
                <div className='w-full h-[80%] flex flex-wrap  content-start'>
                  <p className='w-full h-[15%] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Free</p>
                  <p className='w-full h-[25%] flex items-center justify-center fotn-interm text-[#bdc0c5] text-[56px]'>$0</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#e2ebfc] text-[14px]'>Includes:</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>1 User</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>5 Projects</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>5 GB storage</p>
                </div>
                <div className='w-full h-[20%] flex  justify-center items-center'>
                  <button className='px-[20px] py-[10px] font-interm text-[#3b7ddd] text-[14px] border border-[#3b7ddd] rounded-[5px] duration-[0.4s] hover:text-white hover:bg-[#3b7ddd]'>Sign up</button>
                </div>

              </div>
              <div className='w-full  md:w-[29%] lg:w-[24%] h-[30%] my-[10px] md:h-[94%] flex flex-wrap bg-[#222e3c] mx-[6px] rounded-[5px]'>
                <div className='w-full h-[80%] flex flex-wrap  content-start'>
                  <p className='w-full h-[15%] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Standard</p>
                  <div className='w-full h-[25%] flex  justify-center fotn-interm text-[#bdc0c5]'>
                    <p className='w-fit h-full flex items-center font-interr text-[#bdc0c5] text-[56px]'>$199</p>
                    <p className='w-fit h-full flex items-center font-interr text-[#bdc0c5] text-[14px]'>/mo</p>
                  </div>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#e2ebfc] text-[14px]'>Includes:</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>5 User</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>50 Projects</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>50 GB storage</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Security policy</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Weekly backups</p>
                </div>
                <div className='w-full h-[20%] flex  justify-center items-center'>
                  <button className='px-[20px] py-[10px] font-interm text-white text-[14px]  bg-[#3b7ddd]  rounded-[5px] duration-[0.4s]  hover:bg-[#2c4a77]'>Try it for free</button>
                </div>
              </div>

              <div className='w-full  md:w-[29%] lg:w-[24%] h-[30%] my-[10px] md:h-[94%] flex flex-wrap bg-[#222e3c] mx-[6px] rounded-[5px]'>
                <div className='w-full h-[80%] flex flex-wrap  content-start'>
                  <p className='w-full h-[15%] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Plus</p>
                  <div className='w-full h-[25%] flex  justify-center fotn-interm text-[#bdc0c5]'>
                    <p className='w-fit h-full flex items-center font-interr text-[#bdc0c5] text-[56px]'>$399</p>
                    <p className='w-fit h-full flex items-center font-interr text-[#bdc0c5] text-[14px]'>/mo</p>
                  </div>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#e2ebfc] text-[14px]'>Includes:</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Unlimited users</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Unlimited projects</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>250 GB storage</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Priority support</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Security policy</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Daily backups</p>
                  <p className='w-full h-fit my-[2px] flex items-center justify-center font-interm text-[#bdc0c5] text-[14px]'>Custom CSS</p>
                </div>
                <div className='w-full h-[20%] flex  justify-center items-center'>
                  <button className='px-[20px] py-[10px] font-interm text-[#3b7ddd] text-[14px] border border-[#3b7ddd] rounded-[5px] duration-[0.4s] hover:text-white hover:bg-[#3b7ddd]'>Try it for free</button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full h-[30%] md:h-[50%] flex flex-wrap '>
            <div className='w-full h-[10%] flex items-center justify-center font-interm text-[24px] text-[#bdc0c5]'>Frequently asked questions</div>
            <div className='w-full h-[90%] flex flex-wrap justify-center'>
              <div className='w-full h-1/2 flex flex-wrap content-center justify-center'>
                <div className='w-full h-[40%] md:w-[38%] lg:w-[29%] xl:w-[23%]  md:h-[95%] xl:h-[85%] flex flex-wrap p-[15px] bg-[#222e3c] rounded-[5px] md:mx-[10px] my-[10px]'>
                  <span className='w-full h-[10%] font-interb text-[14px] text-[#bdc0c5]'>Do I need a credit card to sign up?</span>
                  <p className='w-full h-[90%] flex items-center justify-center text-left font-interm text-[14px] text-[#bdc0c5]'>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, lorem.</p>
                </div>
                <div className='w-full h-[40%] md:w-[38%] lg:w-[29%] xl:w-[23%]  md:h-[95%] xl:h-[85%] flex flex-wrap p-[15px] bg-[#222e3c] rounded-[5px] md:mx-[10px] my-[10px]'>
                  <span className='w-full h-[10%] font-interb text-[14px] text-[#bdc0c5]'>Do you offer a free trial?</span>
                  <p className='w-full h-[90%] flex items-center justify-center text-left font-interm text-[14px] text-[#bdc0c5]'>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, lorem.</p>
                </div>
              </div>
              <div className='w-full h-1/2 flex flex-wrap content-center justify-center'>
                <div className='w-full h-[40%] md:w-[38%] lg:w-[29%] xl:w-[23%]  md:h-[95%] xl:h-[85%] flex flex-wrap p-[15px] bg-[#222e3c] rounded-[5px] md:mx-[10px] my-[10px]'>
                  <span className='w-full h-[10%] font-interb text-[14px] text-[#bdc0c5]'>What if I decide to cancel my plan?</span>
                  <p className='w-full h-[90%] flex items-center justify-center text-left font-interm text-[14px] text-[#bdc0c5]'>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, lorem.</p>
                </div>
                <div className='w-full h-[40%] md:w-[38%] lg:w-[29%] xl:w-[23%]  md:h-[95%] xl:h-[85%] flex flex-wrap p-[15px] bg-[#222e3c] rounded-[5px] md:mx-[10px] my-[10px]'>
                  <span className='w-full h-[10%] font-interb text-[14px] text-[#bdc0c5]'>Can I cancel at anytime?</span>
                  <p className='w-full h-[90%] flex items-center justify-center text-left font-interm text-[14px] text-[#bdc0c5]'>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, lorem.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default pricing
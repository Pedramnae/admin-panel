import React from 'react'
import Header from './header'
import { useRef } from 'react';

function Invoice() {
  const invoice = useRef()
  const invoicefunc = (f) => {
    console.log(f);
    if (f == false) {
      invoice.current.classList.add('w-full')
      invoice.current.classList.remove('md:w-[calc(100%-260px)]')
    } else {
      invoice.current.classList.remove('w-full')
      invoice.current.classList.add('md:w-[calc(100%-260px)]')
    }
  }
  const sminvoicefun = (f) => {
    if (f == false) {
      invoice.current.classList.remove('right-[-260px]')
      invoice.current.classList.add('right-0')
    } else {
      invoice.current.classList.add('right-[-260px]')
      invoice.current.classList.remove('right-0')
    }
  }
  return (
    <section className='w-full h-[100vh] flex flex-wrap relative'>
      <Header smpagesfunc={(event) => { sminvoicefun(event) }} pagesfunc={(event) => { invoicefunc(event) }} />
      <div ref={invoice} className='w-[100%] md:w-[calc(100%-260px)] overflow-x-hidden  flex flex-wrap content-center justify-center duration-[0.2s] h-[185vh] md:h-[125vh] absolute top-[70px] right-[-260px] md:right-0 bg-[#19222c]'>
        <h1 className='w-[98%] md:w-[95%] h-[5%] md:h-[10%] flex items-center justify-start  text-[20px] text-[#bdc0c5] font-interm'>invoice</h1>
        <div className='w-[98%] h-[95%] md:w-[95%] md:h-[90%] flex content-start flex-wrap bg-[#222e3c] p-[25px] md:p-[45px]'>

          <div className='w-full h-[25%] flex flex-wrap border-b border-b-[#bdc0c5]'>
            <div className='w-full h-1/2 flex flex-wrap '>
              <p className='w-full flex items-center justify-start font-interm text-[#bdc0c5] text-[14px]'>Hello Pedram</p>
              <p className='w-full flex items-start justify-start font-interm text-[#bdc0c5] text-[14px]'>This is the receipt for a payment of $268.00 (USD) you made to AdminKit Demo.</p>
            </div>
            <div className='w-full h-1/2 flex flex-wrap '>
              <p className='w-1/2 h-1/2 hidden md:flex font-interm items-center justify-start text-[14px] text-[#bdc0c5]'>Payment No.</p>
              <p className='w-1/2 h-1/2 hidden md:flex font-interm items-center justify-end text-[14px] text-[#bdc0c5]'>Payment Date</p>
              <p className='w-1/2 h-1/2 hidden md:flex font-interm items-start justify-start text-[14px] text-[#e2ebfc]'>741037024</p>
              <p className='w-1/2 h-1/2 hidden md:flex font-interm items-start justify-end text-[14px] text-[#e2ebfc]'>June 2, 2023 - 03:45 pm</p>

              <p className='w-full h-1/4 flex md:hidden font-interm items-center justify-start text-[14px] text-[#bdc0c5]'>Payment No.</p>
              <p className='w-full h-1/4 flex md:hidden font-interm items-center justify-start text-[14px] text-[#e2ebfc]'>741037024</p>
              <p className='w-full h-1/4 flex md:hidden font-interm items-center justify-start text-[14px] text-[#bdc0c5]'>Payment Date</p>
              <p className='w-full h-1/4 flex md:hidden font-interm items-center justify-start text-[14px] text-[#e2ebfc]'>June 2, 2023 - 03:45 pm</p>
            </div>
          </div>


          <div className='w-full h-[40%] md:h-[30%] flex flex-wrap py-[30px]'>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center'>Client</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center justify-end'>Payment To</p>
            <p className='w-1/2 h-[14%] font-interb text-[14px] text-[#e2ebfc] hidden md:flex items-center'>Charles Hall</p>
            <p className='w-1/2 h-[14%] font-interb text-[14px] text-[#e2ebfc] hidden md:flex items-center justify-end'>AdminKit Demo LLC</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center'>4183 Forest Avenue</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center justify-end'>354 Roy Alley</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center'>New York City</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center justify-end'>Denver</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center'>10011</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center justify-end'>80202</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center'>USA</p>
            <p className='w-1/2 h-[14%] font-interm text-[14px] text-[#bdc0c5] hidden md:flex items-center justify-end'>USA</p>
            <a href='#' className='w-1/2 h-[14%] font-interm text-[14px] hidden md:flex items-center cursor-default'><div className='w-fit h-fit text-[#3a79d4] hover:text-[#2f64b1] cursor-pointer'>chris.wood@gmail.com</div></a>
            <a href='#' className='w-1/2 h-[14%] font-interm text-[14px] hidden md:flex items-center justify-end cursor-default'><div className='w-fit h-fit text-[#3a79d4] hover:text-[#2f64b1] cursor-pointer'>info@adminkit.com</div></a>

            <div className='w-full h-1/2 flex md:hidden flex-wrap py-[15px]'>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>Client</p>
              <p className='w-full h-[14%] font-interb text-[14px] text-[#e2ebfc] flex items-center'>Charles Hall</p>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>4183 Forest Avenue</p>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>New York City</p>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>10011</p>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>USA</p>
              <a href='#' className='w-full h-[14%] font-interm text-[14px] flex items-center cursor-default'><div className='w-fit h-fit text-[#3a79d4] hover:text-[#2f64b1] cursor-pointer'>chris.wood@gmail.com</div></a>
            </div>
            <div className='w-full h-1/2 flex md:hidden flex-wrap py-[15px]'>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>Payment To</p>
              <p className='w-full h-[14%] font-interb text-[14px] text-[#e2ebfc] flex items-center'>AdminKit Demo LLC</p>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>354 Roy Alley</p>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>Denver</p>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>80202</p>
              <p className='w-full h-[14%] font-interm text-[14px] text-[#bdc0c5] flex items-center'>USA</p>
              <a href='#' className='w-full h-[14%] font-interm text-[14px] flex items-center cursor-default'><div className='w-fit h-fit text-[#3a79d4] hover:text-[#2f64b1] cursor-pointer'>info@adminkit.com</div></a>
            </div>
          </div>

          <div className='w-full h-[35%] md:h-[45%] flex flex-wrap'>
            <div className='w-full h-[80%] flex flex-wrap '>

              <div className='w-full h-[12.5%] flex flex-wrap border-b border-b-[#bdc0c5] text-[14px]'>
                <p className='w-[60%] h-full flex items-center  font-interb text-[#e2ebfc]'>Description</p>
                <p className='w-[20%] h-full flex items-center  font-interb text-[#e2ebfc]'>Quantity</p>
                <p className='w-[20%] h-full flex items-center  font-interb text-[#e2ebfc] justify-end'>Amount</p>
              </div>
              <div className='w-full h-[12.5%] flex flex-wrap border-b border-b-[#bdc0c5] text-[14px]'>
                <p className='w-[60%] h-full flex items-center  font-interr text-[#bdc0c5]'>AdminKit Demo Theme Customization</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5]'>2</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5] justify-end'>$150.00</p>
              </div>
              <div className='w-full h-[12.5%] flex flex-wrap border-b border-b-[#bdc0c5] text-[14px]'>
                <p className='w-[60%] h-full flex items-center  font-interr text-[#bdc0c5]'>Monthly Subscription</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5]'>3</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5] justify-end'>$25.00</p>
              </div>
              <div className='w-full h-[12.5%] flex flex-wrap border-b border-b-[#bdc0c5] text-[14px]'>
                <p className='w-[60%] h-full flex items-center  font-interr text-[#bdc0c5]'>Additional Service</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5]'>1</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5] justify-end'>$100.00</p>
              </div>
              <div className='w-full h-[12.5%] flex flex-wrap border-b border-b-[#bdc0c5] text-[14px] justify-end'>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5]'>Subtotal</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5] justify-end'>$275.00</p>
              </div>
              <div className='w-full h-[12.5%] flex flex-wrap border-b border-b-[#bdc0c5] text-[14px] justify-end'>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5]'>Shipping</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5] justify-end'>$8.00</p>
              </div>
              <div className='w-full h-[12.5%] flex flex-wrap border-b border-b-[#bdc0c5] text-[14px] justify-end'>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5]'>Discount</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5] justify-end'>5%</p>
              </div>
              <div className='w-full h-[12.5%] flex flex-wrap border-b border-b-[#bdc0c5] text-[14px] justify-end'>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5]'>Total</p>
                <p className='w-[20%] h-full flex items-center  font-interr text-[#bdc0c5] justify-end'>$268.85</p>
              </div>

            </div>

            <div className='w-full h-[20%] flex flex-wrap '>
              <p className='w-full h-1/2 flex items-center justify-center text-[12px] font-interr text-[#bdc0c5] text-center'>Extra note: Please send all items at the same time to the shipping address. Thanks in advance.</p>
              <div className='w-full h-1/2 flex items-cemter justify-center'>
                <button className='px-[20px] py-[15px] rounded-[5px] bg-[#3b7ddd] font-interb text-white flex items-center justify-center text-[14px]'>Print this receipt</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Invoice
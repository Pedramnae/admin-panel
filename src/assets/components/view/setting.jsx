import React from 'react'
import Header from './header'
import { useRef } from 'react';
import img1 from './../../img/avatar.jpg'
import { FaUpload } from "react-icons/fa6";

function setting() {
  const setting = useRef()
  const account = useRef()
  const password = useRef()

  function list(e) {
    let x = e.target.innerText
    switch (x) {
      case 'Account':
        account.current.classList.add('flex')
        account.current.classList.remove('hidden')
        password.current.classList.remove('flex')
        password.current.classList.add('hidden')
        e.target.classList.add('bg-[#3b7ddd]')
        e.target.classList.add('text-black')
        e.target.classList.remove('hover:bg-[#384350]')
        e.target.classList.remove('text-[#bdc0c5')
        e.target.nextElementSibling.classList.add('hover:bg-[#384350]')
        e.target.nextElementSibling.classList.add('text-[#bdc0c5]')
        e.target.nextElementSibling.classList.remove('bg-[#3b7ddd]')
        e.target.nextElementSibling.classList.remove('text-black')
        break;
      case 'Password':
        account.current.classList.remove('flex')
        account.current.classList.add('hidden')
        password.current.classList.add('flex')
        password.current.classList.remove('hidden')
        e.target.classList.add('bg-[#3b7ddd]')
        e.target.classList.add('text-black')
        e.target.classList.remove('hover:bg-[#384350]')
        e.target.classList.remove('text-[#bdc0c5')
        e.target.previousElementSibling.classList.add('hover:bg-[#384350]')
        e.target.previousElementSibling.classList.add('text-[#bdc0c5]')
        e.target.previousElementSibling.classList.remove('bg-[#3b7ddd]')
        e.target.previousElementSibling.classList.remove('text-black')
    }


  }

  const settingfunc = (f) => {
    console.log(f);
    if (f == false) {
      setting.current.classList.add('w-full')
      setting.current.classList.remove('md:w-[calc(100%-260px)]')
    } else {
      setting.current.classList.remove('w-full')
      setting.current.classList.add('md:w-[calc(100%-260px)]')
    }
  }
  const smsettingfunc = (f) => {
    if (f == false) {
      setting.current.classList.remove('right-[-260px]')
      setting.current.classList.add('right-0')
    } else {
      setting.current.classList.add('right-[-260px]')
      setting.current.classList.remove('right-0')
    }
  }
  return (
    <section className='w-full h-[100vh] flex flex-wrap relative'>
      <Header smpagesfunc={(event) => { smsettingfunc(event) }} pagesfunc={(event) => { settingfunc(event) }} />
      <div ref={setting} className='w-[100%] md:w-[calc(100%-260px)] overflow-x-hidden px-[25px] flex flex-wrap content-start duration-[0.2s] h-fit pb-[180px] absolute top-[70px] right-[-260px] md:right-0 bg-[#19222c]'>
        <h1 className='w-full h-fit py-[20px] font-interb text-[21px] text-white '>Setting</h1>
        <div className='w-full h-[90%] justify-between flex flex-wrap'>
          <div className='w-full md:w-[22%] xl:w-[15%] h-fit flex flex-wrap  rounded-[5px] bg-[#222e3c]'>
            <ul className='w-full h-fit flex flex-wrap'>
              <li className='w-full h-fit py-[12px]  flex ps-[20px] font-interb [border-bottom:_1px_solid_#bdc0c5] text-[#bdc0c5]'>Profile Settings</li>
              <li onClick={(event) => list(event)} className='w-full h-fit py-[12px] bg-[#3b7ddd] cursor-pointer text-[14px] [border-bottom:_1px_solid_#bdc0c5] ps-[20px] font-interr text-black'>Account</li>
              <li onClick={(event) => list(event)} className='w-full h-fit py-[12px] hover:bg-[#384350] cursor-pointer text-[14px] [border-bottom:_1px_solid_#bdc0c5] ps-[20px] font-interr text-[#bdc0c5]'>Password</li>
              <li className='w-full h-fit py-[12px] hover:bg-[#384350] cursor-pointer text-[14px] [border-bottom:_1px_solid_#bdc0c5] ps-[20px] font-interr text-[#bdc0c5]'>Privacy & safety</li>
              <li className='w-full h-fit py-[12px] hover:bg-[#384350] cursor-pointer text-[14px] [border-bottom:_1px_solid_#bdc0c5] ps-[20px] font-interr text-[#bdc0c5]'>Email notifications</li>
              <li className='w-full h-fit py-[12px] hover:bg-[#384350] cursor-pointer text-[14px] [border-bottom:_1px_solid_#bdc0c5] ps-[20px] font-interr text-[#bdc0c5]'>Web notifications</li>
              <li className='w-full h-fit py-[12px] hover:bg-[#384350] cursor-pointer text-[14px] [border-bottom:_1px_solid_#bdc0c5] ps-[20px] font-interr text-[#bdc0c5]'>widget</li>
              <li className='w-full h-fit py-[12px] hover:bg-[#384350] cursor-pointer text-[14px] [border-bottom:_1px_solid_#bdc0c5] ps-[20px] font-interr text-[#bdc0c5]'>Your data</li>
              <li className='w-full h-fit py-[12px] hover:bg-[#384350] cursor-pointer text-[14px]  ps-[20px] flex  font-interr text-[#bdc0c5]'>Delete account</li>
            </ul>
          </div>


          {/* account */}
          {/* account */}
          <div ref={account} className='w-full md:w-[76%] xl:w-[83%] flex flex-wrap h-fit  rounded-[5px] mt-[30px] md:mt-[0px]'>
            <div className='w-full h-fit flex flex-wrap bg-[#222e3c] p-[20px]'>
              <span className='w-full font-interb text-[#bdc0c5] text-[14px] py-[5px]'>Public info</span>
              <div className='w-[65%] flex flex-wrap '>
                <span className='w-full h-fit py-[5px] font-interr text-[14px] text-[#bdc0c5]'>Username</span>
                <div className='w-full h-fit  py-[20px] flex'>
                  <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px]' placeholder='Username' type="text" />
                </div>
                <span className='w-full h-fit py-[5px] font-interr text-[14px] text-[#bdc0c5]'>Biography</span>
                <div className='w-full h-fit  flex'>
                  <textarea className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px]' placeholder='Tell something about yourself' name="" id=""></textarea>
                </div>
                <div className='w-full h-fit pt-[30px]'>
                  <button className='px-[20px] py-[7px] rounded-[3px] font-interm text-[14px] mx-[5px] text-white bg-[#3b7ddd] hover:bg-[#355b90]'>Save changes</button>
                </div>
              </div>
              <div className='w-[35%] h-fit flex flex-wrap'>
                <figure className='w-full pt-[40px] flex justify-center'>
                  <img className='w-[130px] h-[130px] rounded-[100px] object-cover' src={img1} alt="" />
                </figure>
                <div className='w-full flex h-fit justify-center my-[8px]'>
                  <button className='px-[20px] py-[7px] rounded-[3px] flex flex-wrap font-interm text-[14px] mx-[5px] text-white bg-[#3b7ddd] hover:bg-[#355b90]'><span className='me-[3px]'><FaUpload /></span>Upload</button>
                </div>
                <p className='w-full font-interr text-[#bdc0c5] text-[11px] text-center'>For best results, use an image at least 128px by 128px in .jpg format</p>
              </div>
            </div>


            <div className='w-full h-fit flex flex-wrap mt-[30px] bg-[#222e3c] p-[20px]'>
              <span className='w-full font-interb text-[14px] text-[#bdc0c5]'>Private info</span>
              <div className='w-1/2 flex flex-wrap pe-[10px]'>
                <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px]'>First name</span>
                <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' placeholder='First name' type="text" />
              </div>
              <div className='w-1/2 flex flex-wrap ps-[10px]'>
                <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px]'>Last name</span>
                <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' placeholder='Last name' type="text" />
              </div>
              <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px] '>Email</span>
              <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' placeholder='Email' type="text" />
              <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px] '>Address</span>
              <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' placeholder='1234 Main St' type="text" />
              <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px] '>Address 2</span>
              <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px]' placeholder='Apartment, Studio, or floor' type="text" />
              <div className='w-1/2 flex flex-wrap pe-[10px]'>
                <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px]'>City</span>
                <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' placeholder='' type="text" />
              </div>
              <div className='w-1/2 flex flex-wrap '>
                <div className='w-[65%] flex flex-wrap px-[10px]'>
                  <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px]'>State</span>
                  <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' type="text" />
                </div>
                <div className='w-[35%] flex flex-wrap ps-[10px]'>
                  <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px]'>Zip</span>
                  <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' type="text" />
                </div>
              </div>
              <div className='w-full flex flex-wrap h-fit pt-[30px]'>
                <button className='px-[20px] py-[7px] rounded-[3px] font-interm text-[14px] mx-[5px] text-white bg-[#3b7ddd] hover:bg-[#355b90]'>Save changes</button>
              </div>
            </div>
          </div>
          {/* account */}


          {/* password */}
          <div ref={password} className='w-full md:w-[76%] xl:w-[83%] hidden flex-wrap h-fit  mt-[30px] md:mt-[0px]'>
            <div className='w-full h-fit flex flex-wrap bg-[#222e3c] rounded-[5px] p-[20px]'>
              <span className='w-full font-interb text-[#bdc0c5] text-[14px] py-[5px]'>Password</span>
              <div className='w-full flex flex-wrap pe-[10px]'>
                <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px]'>Current password</span>
                <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' placeholder='' type="text" />
                <span className='w-full font-interr text-[11px] text-[#3b7ddd] mt-[5px] hover:underline cursor-pointer'>Forgot your password?</span>
              </div>
              <div className='w-full flex flex-wrap pe-[10px]'>
                <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px]'>New password</span>
                <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' placeholder='' type="text" />
              </div>
              <div className='w-full flex flex-wrap pe-[10px]'>
                <span className='w-full font-interr text-[14px] text-[#bdc0c5] my-[15px]'>Verify password</span>
                <input className='w-full font-interr ps-[10px] duration-[0.4s] focus:[box-shadow:_0_0_0_6px_#284164] focus:outline-[#9dbeee] text-[#bdc0c5] h-fit py-[5px] bg-[#222e3c] rounded-[3px] border border-[#bdc0c5] text-[14px] ' placeholder='' type="text" />
              </div>
              <div className='w-full h-fit pt-[30px]'>
                <button className='px-[20px] py-[7px] rounded-[3px] font-interm text-[14px] mx-[5px] text-white bg-[#3b7ddd] hover:bg-[#355b90]'>Save changes</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default setting
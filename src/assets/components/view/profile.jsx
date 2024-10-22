import React from 'react'
import Header from './header'
import { useRef } from 'react';
import img1 from './../../img/avatar.jpg'
import img2 from './../../img/avatar-5.jpg'
import img3 from './../../img/avatar-4.jpg'
import img4 from './../../img/avatar-2.jpg'
import img5 from './../../img/unsplash-2.jpg'
import img6 from './../../img/unsplash-1.jpg'
import { LuMessageSquare } from "react-icons/lu";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BiBriefcaseAlt } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaRegHeart } from "react-icons/fa";
function profile() {
  const profile = useRef()
  const profilefun = (f) => {
    console.log(f);
    if (f == false) {
      profile.current.classList.add('w-full')
      profile.current.classList.remove('md:w-[calc(100%-260px)]')
    } else {
      profile.current.classList.remove('w-full')
      profile.current.classList.add('md:w-[calc(100%-260px)]')
    }
  }
  const smprofilefunc = (f) => {
    if (f == false) {
      profile.current.classList.remove('right-[-260px]')
      profile.current.classList.add('right-0')
    } else {
      profile.current.classList.add('right-[-260px]')
      profile.current.classList.remove('right-0')
    }
  }
  return (
    <section className='w-full h-[100vh] flex flex-wrap relative'>
      <Header smpagesfunc={(event) => { smprofilefunc(event) }} pagesfunc={(event) => { profilefun(event) }} />
      <div ref={profile} className='w-[100%] md:w-[calc(100%-260px)] overflow-x-hidden px-[25px] flex flex-wrap content-start duration-[0.2s] h-fit py-[60px] absolute top-[70px] right-[-260px] md:right-0 bg-[#19222c]'>
        <h1 className='w-full h-[5%] flex font-interm text-[21px] text-white items-end'>Profile</h1>

        <div className='w-full h-[85%] flex flex-wrap py-[15px]  justify-between'>

          <div className=' w-full md:w-[25%] h-fit  flex flex-wrap rounded-[5px] bg-[#222e3c] mb-[50px] justify-center'>
            <div className='w-full h-fit flex flex-wrap  px-[10px] py-[15px] [border-bottom:_1px_solid_#bdc0c5]'>
              <span className='w-full h-fit py-[5px] flex items-center font-interb text-[14.8px] text-[#bdc0c5]'>Profile Details</span>
              <figure className='w-full h-fit py-[5px] flex items-center justify-center '>
                <img className='w-[130px] h-[130px] rounded-[100px] ' src={img1} alt="" />
              </figure>
              <span className='w-full h-fit py-[2px] flex font-interb text-[14px] text-white items-center justify-center '>Pedram</span>
              <span className='w-full h-fit py-[2px] flex font-interm text-[14px] text-[#bdc0c5] items-center justify-center '>Lead Developer</span>
                <span className='w-fit h-fit flex cursor-pointer px-[10px] py-[3px] bg-[#3b7ddd] hover:bg-[#326abc] duration-[0.2s] rounded-[2px] font-interm text-white mx-[4px] my-[4px] text-[12px]'>Follow</span>
                <span className='w-fit h-fit flex cursor-pointer px-[10px] py-[3px] bg-[#3b7ddd] hover:bg-[#326abc] duration-[0.2s] rounded-[2px] font-interm text-white mx-[4px] my-[4px] text-[12px]'><span className='h-full flex items-center translate-y-[3px]'><LuMessageSquare /></span> Message</span>
              <div className='w-full h-fit py-[2px] flex font-interm text-[14px] text-[#bdc0c5] items-center justify-center '>
              </div>
            </div>
            <div className='w-full h-fit flex flex-wrap  px-[10px] py-[15px] [border-bottom:_1px_solid_#bdc0c5]'>
              <span className='w-full h-fit py-[5px] flex items-center font-interb text-[14.8px] text-[#bdc0c5] '>Skills</span>
              <div className='w-full h-fit py-[5px]  flex flex-wrap  content-center'>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>HTML</span>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>Java script</span>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>Sass</span>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>Angular</span>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>Vue</span>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>React</span>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>Redux</span>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>UI</span>
                <span className='w-fit h-fit rounded-[2px] me-[8px] mt-[5px] my-[5px] px-[7px] py-[1px] font-interm text-[11px] text-white bg-[#3b7ddd] flex items-center justify-center'>UX</span>
              </div>
            </div>
            <div className='w-full h-fit flex flex-wrap  px-[10px] py-[15px] [border-bottom:_1px_solid_#bdc0c5]'>
              <span className='w-full h-fit py-[5px]  flex items-center font-interb text-[14.8] text-[#bdc0c5]'>About</span>
              <div className='w-full h-fit py-[5px]  flex flex-wrap '>
                <div className='w-fit h-fit  flex items-center text-[1ppx] me-[5px] text-[#bdc0c5]'><BsFillHouseDoorFill /></div>
                <div className='w-fit h-fit  flex items-center text-[14px] me-[10px] font-interm text-[#bdc0c5]'>Lives in</div>
                <div className='w-fit h-fit  flex items-center text-[14px] font-interm text-[#356bb8] hover:text-[#2f64b1]'>San Francisco, SA</div>
              </div>
              <div className='w-full h-fit py-[5px]  flex flex-wrap '>
                <div className='w-fit h-fit  flex items-center text-[1ppx] me-[5px] text-[#bdc0c5]'><BiBriefcaseAlt /></div>
                <div className='w-fit h-fit  flex items-center text-[14px] me-[10px] font-interm text-[#bdc0c5]'>Works at</div>
                <div className='w-fit h-fit  flex items-center text-[14px] font-interm text-[#356bb8] hover:text-[#2f64b1]'>Github</div>
              </div>
              <div className='w-full h-fit py-[5px]  flex flex-wrap '>
                <div className='w-fit h-fit flex items-center text-[1ppx] me-[5px] text-[#bdc0c5]'><GrLocation /></div>
                <div className='w-fit h-fit  flex items-center text-[14px] me-[10px] font-interm text-[#bdc0c5]'>From</div>
                <div className='w-fit h-fit flex items-center text-[14px] font-interm text-[#356bb8] hover:text-[#2f64b1]'>Boston</div>
              </div>
            </div>
            <div className='w-full h-fit flex flex-wrap  px-[10px] py-[15px]'>
              <span className='w-full h-fit py-[5px] flex items-start font-interb text-[14.8] text-[#bdc0c5]'>Elsewhere</span>
              <div className='w-full h-fit flex flex-wrap '>
                <div className='w-full h-fit py-[5px] flex flex-wrap '>
                  <div className='w-fit h-full flex items-center text-[1ppx] me-[5px] text-[#bdc0c5]'><FaEarthAmericas /></div>
                  <div className='w-fit h-full flex items-center text-[14px] font-interm text-[#356bb8] hover:text-[#2f64b1]'> staciehall.co</div>
                </div>
                <div className='w-full h-fit py-[5px] flex flex-wrap '>
                  <div className='w-fit h-full flex items-center text-[1ppx] me-[5px] text-[#bdc0c5]'><FaTwitter /></div>
                  <div className='w-fit h-full flex items-center text-[14px] font-interm text-[#356bb8] hover:text-[#2f64b1]'>Twitter</div>
                </div>
                <div className='w-full h-fit py-[5px] flex flex-wrap '>
                  <div className='w-fit h-full flex items-center text-[1ppx] me-[5px] text-[#bdc0c5]'><FaFacebook /></div>
                  <div className='w-fit h-full flex items-center text-[14px] font-interm text-[#356bb8] hover:text-[#2f64b1]'>Facebook</div>
                </div>
                <div className='w-full h-fit py-[5px] flex flex-wrap '>
                  <div className='w-fit h-full flex items-center text-[1ppx] me-[5px] text-[#bdc0c5]'><FaInstagram /></div>
                  <div className='w-fit h-full flex items-center text-[14px] font-interm text-[#356bb8] hover:text-[#2f64b1]'>Instagram</div>
                </div>
                <div className='w-full h-fit py-[5px] flex flex-wrap '>
                  <div className='w-fit h-full flex items-center text-[1ppx] me-[5px] text-[#bdc0c5]'><FaLinkedin /></div>
                  <div className='w-fit h-full flex items-center text-[14px] font-interm text-[#356bb8] hover:text-[#2f64b1]'>Linkedin</div>
                </div>
              </div>
            </div>
          </div>




          <div className=' w-full md:w-[73%] h-fit flex flex-wrap bg-[#222e3c] rounded-[5px] px-[10px] py-[20px]'>
            <span className='w-full h-[5%] flex items-center font-interm text-[14.8px] text-[#bdc0c5]'>Activities</span>
            <div className='w-full h-[95%] flex flex-wrap '>

              <div className='w-full h-fit py-[15px] flex flex-wrap  [border-bottom:_1px_solid_#bdc0c5]'>
                <figure className='w-fit h-full flex items-center justify-center'>
                  <img className='w-[38px] h-[38px] rounded-[20px] ' src={img2} alt="" />
                </figure>
                <div className='w-[calc(100%-38px)] h-full flex flex-wrap  ps-[10px]'>
                  <div className='w-full h-1/2 flex flex-wrap justify-between'>
                    <span className='w-fit h-full flex items-center font-interb text-[#bdc0c5] text-[14px]'>Vanessa Tucker started following Christina Mason</span>
                    <span className='w-fit h-full flex items-center font-interm text-[#bdc0c5] text-[11px]'>5min ago</span>
                  </div>
                  <span className='w-fit h-1/2 flex items-center font-interm text-[11px] text-[#bdc0c5]'>Today 7:51 pm</span>
                </div>
              </div>

              <div className='w-full h-fit flex flex-wrap py-[15px] [border-bottom:_1px_solid_#bdc0c5] justify-end'>
                <div className='w-full h-fit flex flex-wrap'>
                  <figure className='w-fit h-full flex items-center justify-center'>
                    <img className='w-[38px] h-[38px] rounded-[20px] ' src={img1} alt="" />
                  </figure>
                  <div className='w-[calc(100%-38px)] h-full flex flex-wrap  ps-[10px]'>
                    <div className='w-full h-1/2 flex flex-wrap justify-between'>
                      <span className='w-fit h-full flex items-center font-interb text-[#bdc0c5] text-[14px]'>Charles Hall posted something on Christina Mason's timeline</span>
                      <span className='w-fit h-full flex items-center font-interm text-[#bdc0c5] text-[11px]'>30min ago</span>
                    </div>
                    <span className='w-fit h-1/2 flex items-center font-interm text-[11px] text-[#bdc0c5]'>Today 7:21 pm</span>
                  </div>
                </div>
                <p className='w-[calc(100%-38px)] h-fit flex flex-wrap mt-[10px] py-[10px] ps-[10px]  font-interr text-[#bdc0c5] text-[12px]'>
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus
                  . Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                </p>
                <div className='w-[calc(100%-38px)] h-fit flex '>
                  <span className='w-fit h-fit py-[5px] cursor-pointer px-[8px] rounded-[2px] flex flex-wrap bg-[#dc3545] hover:bg-[#bb2d3b] font-interm text-white text-[12px]'>
                    <div className='translate-y-[3px] me-[3px]'><FaRegHeart /></div>
                    Like
                  </span>
                </div>
              </div>

              <div className='w-full h-fit py-[15px] flex flex-wrap  [border-bottom:_1px_solid_#bdc0c5]'>
                <figure className='w-fit h-full flex items-center justify-center'>
                  <img className='w-[38px] h-[38px] rounded-[20px] ' src={img3} alt="" />
                </figure>
                <div className='w-[calc(100%-38px)] h-full flex flex-wrap  ps-[10px]'>
                  <div className='w-full h-1/2 flex flex-wrap justify-between'>
                    <span className='w-fit h-full flex items-center font-interb text-[#bdc0c5] text-[14px]'>Christina Mason posted a new blog</span>
                    <span className='w-fit h-full flex items-center font-interm text-[#bdc0c5] text-[11px]'>1h ago</span>
                  </div>
                  <span className='w-fit h-1/2 flex items-center font-interm text-[11px] text-[#bdc0c5]'>Today 6:35 pm</span>
                </div>
              </div>

              <div className='w-full h-fit flex flex-wrap py-[15px] [border-bottom:_1px_solid_#bdc0c5] justify-end'>
                <div className='w-full h-fit flex flex-wrap'>
                  <figure className='w-fit h-full flex items-center justify-center'>
                    <img className='w-[38px] h-[38px] rounded-[20px] ' src={img4} alt="" />
                  </figure>
                  <div className='w-[calc(100%-38px)] h-full flex flex-wrap  ps-[10px]'>
                    <div className='w-full h-1/2 flex flex-wrap justify-between'>
                      <span className='w-fit h-full flex items-center font-interb text-[#bdc0c5] text-[14px]'>3h agoWilliam Harris posted two photos on Christina Mason's timeline</span>
                      <span className='w-fit h-full flex items-center font-interm text-[#bdc0c5] text-[11px]'>3h ago</span>
                    </div>
                    <span className='w-fit h-1/2 flex items-center font-interm text-[11px] text-[#bdc0c5]'>Today 5:12 pm</span>
                  </div>
                </div>
                <div className='w-[calc(100%-38px)] h-fit flex flex-wrap mt-[10px] py-[10px] ps-[10px] '>
                  <figure className='w-fit h-fit me-[8px]'>
                    <img className='w-[190px] h-[130px] object-cover' src={img6} alt="" />
                  </figure>
                  <figure className='w-fit h-fit '>
                    <img className='w-[190px] h-[130px] object-cover' src={img5} alt="" />
                  </figure>
                </div>
                <div className='w-[calc(100%-38px)] h-fit flex '>
                  <span className='w-fit h-fit py-[5px] cursor-pointer px-[8px] rounded-[2px] flex flex-wrap bg-[#dc3545] hover:bg-[#bb2d3b] font-interm text-white text-[12px]'>
                    <div className='translate-y-[3px] me-[3px]'><FaRegHeart /></div>
                    Like
                  </span>
                </div>
              </div>

              <div className='w-full h-fit flex flex-wrap py-[15px] [border-bottom:_1px_solid_#bdc0c5] justify-end'>
                <div className='w-full h-fit py-[15px] flex flex-wrap'>
                  <figure className='w-fit h-full flex items-center justify-center'>
                    <img className='w-[38px] h-[38px] rounded-[20px] ' src={img4} alt="" />
                  </figure>
                  <div className='w-[calc(100%-38px)] h-full flex flex-wrap  ps-[10px]'>
                    <div className='w-full h-1/2 flex flex-wrap justify-between'>
                      <span className='w-fit h-full flex items-center font-interb text-[#bdc0c5] text-[14px]'>Vanessa Tucker started following Christina Mason</span>
                      <span className='w-fit h-full flex items-center font-interm text-[#bdc0c5] text-[11px]'>1d ago</span>
                    </div>
                    <span className='w-fit h-1/2 flex items-center font-interm text-[11px] text-[#bdc0c5]'>Today 5:12 pm</span>
                  </div>
                </div>
                <div className='w-[calc(100%-38px)] h-fit flex flex-wrap mt-[10px] py-[10px] ps-[10px]  justify-between'>
                  <figure className='w-fit h-full flex items-center justify-center'>
                    <img className='w-[38px] h-[38px] rounded-[20px] ' src={img3} alt="" />
                  </figure>
                  <p className='w-[calc(100%-90px)] ps-[5px]  font-interr text-[12px] text-[#bdc0c5] flex items-center border'>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                  </p>
                </div>
              </div>

              <div className='w-full h-fit py-[15px] flex flex-wrap  [border-bottom:_1px_solid_#bdc0c5]'>
                <figure className='w-fit h-full flex items-center justify-center'>
                  <img className='w-[38px] h-[38px] rounded-[20px] ' src={img3} alt="" />
                </figure>
                <div className='w-[calc(100%-38px)] h-full flex flex-wrap  ps-[10px]'>
                  <div className='w-full h-1/2 flex flex-wrap justify-between'>
                    <span className='w-fit h-full flex items-center font-interb text-[#bdc0c5] text-[14px]'>Christina Mason posted a new blog</span>
                    <span className='w-fit h-full flex items-center font-interm text-[#bdc0c5] text-[11px]'>1d ago</span>
                  </div>
                  <span className='w-fit h-1/2 flex items-center font-interm text-[11px] text-[#bdc0c5]'>Yesterday 2:43 pm</span>
                </div>
              </div>

              <div className='w-full h-fit py-[15px] flex flex-wrap  [border-bottom:_1px_solid_#bdc0c5]'>
                <figure className='w-fit h-full flex items-center justify-center'>
                  <img className='w-[38px] h-[38px] rounded-[20px] ' src={img1} alt="" />
                </figure>
                <div className='w-[calc(100%-38px)] h-full flex flex-wrap  ps-[10px]'>
                  <div className='w-full h-1/2 flex flex-wrap justify-between'>
                    <span className='w-fit h-full flex items-center font-interb text-[#bdc0c5] text-[14px]'>Charles Hall started following Christina Mason</span>
                    <span className='w-fit h-full flex items-center font-interm text-[#bdc0c5] text-[11px]'>1d ago</span>
                  </div>
                  <span className='w-fit h-1/2 flex items-center font-interm text-[11px] text-[#bdc0c5]'>Yesterdag 1:51 pm</span>
                </div>
              </div>

              <button className='w-full h-fit flex justify-center py-[5px] mt-[10px] duration-[0.4s] rounded-[3px] text-white items-center bg-[#3b7ddd] hover:bg-[#326abc]'>
                Load more
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default profile
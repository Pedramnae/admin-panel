import React from 'react'
import Header from './header'
import { useRef } from 'react'
import { FaPlus } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import img1 from './../../img/avatar-3.jpg'
import img2 from './../../img/avatar-2.jpg'
import img3 from './../../img/avatar.jpg'
import img4 from './../../img/unsplash-1.jpg'
import img5 from './../../img/unsplash-2.jpg'
import img6 from './../../img/unsplash-3.jpg'

function Projects() {
    const projects = useRef()
    const projectsfunc = (f) => {
        console.log(f);
        if (f == false) {
            projects.current.classList.add('w-full')
            projects.current.classList.remove('md:w-[calc(100%-260px)]')
        } else {
            projects.current.classList.remove('w-full')
            projects.current.classList.add('md:w-[calc(100%-260px)]')
        }
    }
    const smprojectsfunc = (f) => {
        if (f == false) {
            projects.current.classList.remove('right-[-260px]')
            projects.current.classList.add('right-0')
        } else {
            projects.current.classList.add('right-[-260px]')
            projects.current.classList.remove('right-0')
        }
    }
    function dropmenu(e) {
        let ul = e.currentTarget.nextElementSibling
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
            <Header smpagesfunc={(event) => { smprojectsfunc(event) }} pagesfunc={(event) => { projectsfunc(event) }} />
            <div ref={projects} className='w-[100%] md:w-[calc(100%-260px)] overflow-x-hidden px-[25px] flex flex-wrap content-start duration-[0.2s] h-fit py-[50px] absolute top-[70px] right-[-260px] md:right-0 bg-[#19222c]'>
                <div className='w-full flex flex-wrap '>
                    <h1 className='w-1/2 h-fit py-[20px] font-interb text-[21px] text-white '>Setting</h1>
                    <div className='w-1/2 flex h-fit justify-end  py-[20px]'>
                        <button className='px-[20px] py-[7px] rounded-[3px] font-interm text-[14px] mx-[5px] text-[#d3d5d8] bg-[#3b7ddd] hover:bg-[#355b90] flex-wrap flex'><span className='me-[5px]  translate-y-[2px]'><FaPlus /></span>New Project</button>
                    </div>
                </div>
                <div className='w-full flex flex-wrap justify-between'>
                    <div className='w-full md:w-[46%] lg:w-[23%] h-fit p-[20px] flex flex-wrap rounded-[5px] bg-[#222e3c] mt-[25px] lg:mt-[0px]'>
                        <h3 className='w-[75%] h-fit flex py-[5px]  font-interb text-[#bdc0c5] text-[14px]'>Landing page redesign</h3>
                        <div className='w-[25%] h-fit flex py-[5px] text-[18px]  text-[#bdc0c5] justify-center relative'>
                            <span onClick={(event) => { dropmenu(event) }} className='w-fit h-fit cursor-pointer'><IoIosMore /></span>
                            <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                            </ul>
                        </div>
                        <div className='w-full h-fit pt-[5px] pb-[30px] flex '>
                            <span className='w-fit h-fit rounded-[2px] px-[5px] py-[1px] text-white font-interm text-[11px] bg-[#1cbb8c]'>Finished</span>
                        </div>
                        <p className='w-full font-interm text-[#bdc0c5] text-[14px] text-left py-[5px] '>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                        <div className='w-full h-fit flex flex-wrap py-[15px]'>
                            <figure className='w-fit h-fit me-[10px]'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img1} alt="" />
                            </figure>
                            <figure className='w-fit h-fit me-[10px]'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img2} alt="" />
                            </figure>
                            <figure className='w-fit h-fit'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img3} alt="" />
                            </figure>
                        </div>
                        <div className='w-full h-fit pt-[10px] flex flex-wrap'>
                            <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px]'>ّProgress</span>
                            <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px] flex justify-end'>ّ100%</span>
                        </div>
                        <div className='w-full h-fit py-[10px] '>
                            <span className='w-full flex h-[6px] rounded-[10px] bg-[#3b7ddd]'></span>
                        </div>
                    </div>


                    <div className='w-full md:w-[46%] lg:w-[23%] h-fit p-[20px] flex flex-wrap rounded-[5px] bg-[#222e3c] mt-[25px] lg:mt-[0px]'>
                        <h3 className='w-[75%] h-fit flex py-[5px]  font-interb text-[#bdc0c5] text-[14px]'>Company posters</h3>
                        <div className='w-[25%] h-fit flex py-[5px] text-[18px]  text-[#bdc0c5] justify-center relative'>
                            <span onClick={(event) => { dropmenu(event) }} className='w-fit h-fit cursor-pointer'><IoIosMore /></span>
                            <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                            </ul>
                        </div>
                        <div className='w-full h-fit pt-[5px] pb-[30px] flex '>
                            <span className='w-fit h-fit rounded-[2px] px-[5px] py-[1px] text-white font-interm text-[11px] bg-[#fcb92c]'>In progress</span>
                        </div>
                        <p className='w-full font-interm text-[#bdc0c5] text-[14px] text-left py-[5px] '>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.</p>
                        <div className='w-full h-fit flex flex-wrap py-[15px]'>
                            <figure className='w-fit h-fit me-[10px]'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img1} alt="" />
                            </figure>
                            <figure className='w-fit h-fit me-[10px]'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img2} alt="" />
                            </figure>
                            <figure className='w-fit h-fit'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img3} alt="" />
                            </figure>
                        </div>
                        <div className='w-full h-fit pt-[10px] flex flex-wrap'>
                            <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px]'>ّProgress</span>
                            <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px] flex justify-end'>75%</span>
                        </div>
                        <div className='w-full h-fit py-[10px] '>
                            <span className='w-full flex h-[6px] rounded-[10px] bg-[#4e5863]'>
                                <span className='w-[75%] h-full bg-[#3b7ddd]'></span>
                            </span>
                        </div>
                    </div>


                    <div className='w-full md:w-[46%] lg:w-[23%] h-fit p-[20px] flex flex-wrap rounded-[5px] bg-[#222e3c] mt-[25px] lg:mt-[0px]'>
                        <h3 className='w-[75%] h-fit flex py-[5px]  font-interb text-[#bdc0c5] text-[14px]'>Product page design</h3>
                        <div className='w-[25%] h-fit flex py-[5px] text-[18px]  text-[#bdc0c5] justify-center relative'>
                            <span onClick={(event) => { dropmenu(event) }} className='w-fit h-fit cursor-pointer'><IoIosMore /></span>
                            <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                            </ul>
                        </div>
                        <div className='w-full h-fit pt-[5px] pb-[30px] flex '>
                            <span className='w-fit h-fit rounded-[2px] px-[5px] py-[1px] text-white font-interm text-[11px] bg-[#1cbb8c]'>Finished</span>
                        </div>
                        <p className='w-full font-interm text-[#bdc0c5] text-[14px] text-left py-[5px] '>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                        <div className='w-full h-fit flex flex-wrap py-[15px]'>
                            <figure className='w-fit h-fit me-[10px]'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img1} alt="" />
                            </figure>
                            <figure className='w-fit h-fit me-[10px]'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img2} alt="" />
                            </figure>
                            <figure className='w-fit h-fit'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img3} alt="" />
                            </figure>
                        </div>
                        <div className='w-full h-fit pt-[10px] flex flex-wrap'>
                            <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px]'>ّProgress</span>
                            <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px] flex justify-end'>ّ100%</span>
                        </div>
                        <div className='w-full h-fit py-[10px] '>
                            <span className='w-full flex h-[6px] rounded-[10px] bg-[#3b7ddd]'></span>
                        </div>
                    </div>


                    <div className='w-full md:w-[46%] lg:w-[23%] h-fit p-[20px] flex flex-wrap rounded-[5px] bg-[#222e3c] mt-[25px] lg:mt-[0px]'>
                        <h3 className='w-[75%] h-fit flex py-[5px]  font-interb text-[#bdc0c5] text-[14px]'>Upgrade CRM software</h3>
                        <div className='w-[25%] h-fit flex py-[5px] text-[18px]  text-[#bdc0c5] justify-center relative'>
                            <span onClick={(event) => { dropmenu(event) }} className='w-fit h-fit cursor-pointer'><IoIosMore /></span>
                            <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                            </ul>
                        </div>
                        <div className='w-full h-fit pt-[5px] pb-[30px] flex '>
                            <span className='w-fit h-fit rounded-[2px] px-[5px] py-[1px] text-white font-interm text-[11px] bg-[#fcb92c]'>In progress</span>
                        </div>
                        <p className='w-full font-interm text-[#bdc0c5] text-[14px] text-left py-[5px] '>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.</p>
                        <div className='w-full h-fit flex flex-wrap py-[15px]'>
                            <figure className='w-fit h-fit me-[10px]'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img1} alt="" />
                            </figure>
                            <figure className='w-fit h-fit me-[10px]'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img2} alt="" />
                            </figure>
                            <figure className='w-fit h-fit'>
                                <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img3} alt="" />
                            </figure>
                        </div>
                        <div className='w-full h-fit pt-[10px] flex flex-wrap'>
                            <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px]'>ّProgress</span>
                            <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px] flex justify-end'>50%</span>
                        </div>
                        <div className='w-full h-fit py-[10px] '>
                            <span className='w-full flex h-[6px] rounded-[10px] bg-[#4e5863]'>
                                <span className='w-[50%] h-full bg-[#3b7ddd]'></span>
                            </span>
                        </div>
                    </div>


                    <div className='w-full md:w-[46%] lg:w-[23%] h-fit flex flex-wrap rounded-[5px] bg-[#222e3c] overflow-hidden mt-[25px]'>
                        <figure className='w-full h-fit'>
                            <img className='w-full h-[300px] md:h-[180px] object-cover' src={img4} alt="" />
                        </figure>
                        <div className='w-full flex flex-wrap p-[20px]'>
                            <h3 className='w-[75%] h-fit flex py-[5px]  font-interb text-[#bdc0c5] text-[14px]'>Fix form validation</h3>
                            <div className='w-[25%] h-fit flex py-[5px] text-[18px]  text-[#bdc0c5] justify-center relative'>
                                <span onClick={(event) => { dropmenu(event) }} className='w-fit h-fit cursor-pointer'><IoIosMore /></span>
                                <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                </ul>
                            </div>
                            <div className='w-full h-fit pt-[5px] pb-[30px] flex '>
                                <span className='w-fit h-fit rounded-[2px] px-[5px] py-[1px] text-white font-interm text-[11px] bg-[#fcb92c]'>In progress</span>
                            </div>
                            <p className='w-full font-interm text-[#bdc0c5] text-[14px] text-left py-[5px] '>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                            <div className='w-full h-fit flex flex-wrap py-[15px]'>
                                <figure className='w-fit h-fit me-[10px]'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img1} alt="" />
                                </figure>
                                <figure className='w-fit h-fit me-[10px]'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img2} alt="" />
                                </figure>
                                <figure className='w-fit h-fit'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img3} alt="" />
                                </figure>
                            </div>
                            <div className='w-full h-fit pt-[10px] flex flex-wrap'>
                                <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px]'>ّProgress</span>
                                <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px] flex justify-end'>65%</span>
                            </div>
                            <div className='w-full h-fit py-[10px] '>
                                <span className='w-full flex h-[6px] rounded-[10px] bg-[#4e5863]'>
                                    <span className='w-[65%] h-full bg-[#3b7ddd]'></span>
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className='w-full md:w-[46%] lg:w-[23%] h-fit flex flex-wrap rounded-[5px] bg-[#222e3c] overflow-hidden mt-[25px]'>
                        <figure className='w-full h-fit'>
                            <img className='w-full h-[300px] md:h-[180px] object-cover' src={img5} alt="" />
                        </figure>
                        <div className='w-full flex flex-wrap p-[20px]'>
                            <h3 className='w-[75%] h-fit flex py-[5px]  font-interb text-[#bdc0c5] text-[14px]'>New company logo</h3>
                            <div className='w-[25%] h-fit flex py-[5px] text-[18px]  text-[#bdc0c5] justify-center relative'>
                                <span onClick={(event) => { dropmenu(event) }} className='w-fit h-fit cursor-pointer'><IoIosMore /></span>
                                <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                </ul>
                            </div>
                            <div className='w-full h-fit pt-[5px] pb-[30px] flex '>
                                <span className='w-fit h-fit rounded-[2px] px-[5px] py-[1px] text-white font-interm text-[11px] bg-[#dc3545]'>On hold</span>
                            </div>
                            <p className='w-full font-interm text-[#bdc0c5] text-[14px] text-left py-[5px] '>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                            <div className='w-full h-fit flex flex-wrap py-[15px]'>
                                <figure className='w-fit h-fit me-[10px]'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img1} alt="" />
                                </figure>
                                <figure className='w-fit h-fit me-[10px]'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img2} alt="" />
                                </figure>
                                <figure className='w-fit h-fit'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img3} alt="" />
                                </figure>
                            </div>
                            <div className='w-full h-fit pt-[10px] flex flex-wrap'>
                                <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px]'>ّProgress</span>
                                <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px] flex justify-end'>20%</span>
                            </div>
                            <div className='w-full h-fit py-[10px] '>
                                <span className='w-full flex h-[6px] rounded-[10px] bg-[#4e5863]'>
                                    <span className='w-[20%] h-full bg-[#3b7ddd]'></span>
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className='w-full md:w-[46%] lg:w-[23%] h-fit flex flex-wrap rounded-[5px] bg-[#222e3c] overflow-hidden mt-[25px]'>
                        <figure className='w-full h-fit'>
                            <img className='w-full h-[300px] md:h-[180px] object-cover' src={img6} alt="" />
                        </figure>
                        <div className='w-full flex flex-wrap p-[20px]'>
                            <h3 className='w-[75%] h-fit flex py-[5px]  font-interb text-[#bdc0c5] text-[14px]'>Upgrade to latest Maps API</h3>
                            <div className='w-[25%] h-fit flex py-[5px] text-[18px]  text-[#bdc0c5] justify-center relative'>
                                <span onClick={(event) => { dropmenu(event) }} className='w-fit h-fit cursor-pointer'><IoIosMore /></span>
                                <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                </ul>
                            </div>
                            <div className='w-full h-fit pt-[5px] pb-[30px] flex '>
                                <span className='w-fit h-fit rounded-[2px] px-[5px] py-[1px] text-white font-interm text-[11px] bg-[#1cbb8c]'>Finished</span>
                            </div>
                            <p className='w-full font-interm text-[#bdc0c5] text-[14px] text-left py-[5px] '>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                            <div className='w-full h-fit flex flex-wrap py-[15px]'>
                                <figure className='w-fit h-fit me-[10px]'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img1} alt="" />
                                </figure>
                                <figure className='w-fit h-fit me-[10px]'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img2} alt="" />
                                </figure>
                                <figure className='w-fit h-fit'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img3} alt="" />
                                </figure>
                            </div>
                            <div className='w-full h-fit pt-[10px] flex flex-wrap'>
                                <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px]'>ّProgress</span>
                                <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px] flex justify-end'>100%</span>
                            </div>
                            <div className='w-full h-fit py-[10px] '>
                                <span className='w-full flex h-[6px] rounded-[10px] bg-[#4e5863]'>
                                    <span className='w-[100%] h-full bg-[#3b7ddd]'></span>
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className='w-full md:w-[46%] lg:w-[23%] h-fit flex flex-wrap rounded-[5px] bg-[#222e3c] overflow-hidden mt-[25px]'>
                        <figure className='w-full h-fit'>
                            <img className='w-full h-[300px] md:h-[180px] object-cover' src={img4} alt="" />
                        </figure>
                        <div className='w-full flex flex-wrap p-[20px]'>
                            <h3 className='w-[75%] h-fit flex py-[5px]  font-interb text-[#bdc0c5] text-[14px]'>Refactor backend templates</h3>
                            <div className='w-[25%] h-fit flex py-[5px] text-[18px]  text-[#bdc0c5] justify-center relative'>
                                <span onClick={(event) => { dropmenu(event) }} className='w-fit h-fit cursor-pointer'><IoIosMore /></span>
                                <ul data-stat='false' className='w-[180px] h-[100px] hidden flex-wrap border bg-[#222e3c] border-[#d3d5d8] rounded-[5px] absolute top-[100%] right-0 py-[5px]'>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Action</li>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Another action</li>
                                    <li className='w-full h-1/3 flex font-interm text-[14px] text-[#d3d5d8] hover:bg-[#384350] px-[10px] items-center duration-[0.4s]'>Something else here</li>
                                </ul>
                            </div>
                            <div className='w-full h-fit pt-[5px] pb-[30px] flex '>
                                <span className='w-fit h-fit rounded-[2px] px-[5px] py-[1px] text-white font-interm text-[11px] bg-[#dc3545]'>On hold</span>
                            </div>
                            <p className='w-full font-interm text-[#bdc0c5] text-[14px] text-left py-[5px] '>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                            <div className='w-full h-fit flex flex-wrap py-[15px]'>
                                <figure className='w-fit h-fit me-[10px]'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img1} alt="" />
                                </figure>
                                <figure className='w-fit h-fit me-[10px]'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img2} alt="" />
                                </figure>
                                <figure className='w-fit h-fit'>
                                    <img className='w-[30px] h-[30px] object-cover rounded-[30px]' src={img3} alt="" />
                                </figure>
                            </div>
                            <div className='w-full h-fit pt-[10px] flex flex-wrap'>
                                <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px]'>ّProgress</span>
                                <span className='w-1/2  h-fit font-interr text-[#bdc0c5] text-[14px] flex justify-end'>0%</span>
                            </div>
                            <div className='w-full h-fit py-[10px] '>
                                <span className='w-full flex h-[6px] rounded-[10px] bg-[#4e5863]'>
                                    <span className='w-[0%] h-full bg-[#3b7ddd]'></span>
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Projects
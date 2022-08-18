import React from 'react';
import {FaTwitter,FaBell,FaHome,FaHashtag,FaRegBookmark} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {FiUser} from "react-icons/fi"
import {CgMoreO} from "react-icons/cg"
import {VscListSelection} from "react-icons/vsc"
import avtar from "../img/avtar.jpg"
const Sidebar=()=>{
    return (
        <>
        <div className="px-2">
            <button className="px-2 text-left hover:bg-blue-100  text-3xl rounded-full text-blue-500 ">
                <FaTwitter/>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            py-2 px-4 hover:bg-slate-200   rounded-full mr-auto  '>
                <FaHome/>
                <span className="m-1 hidden md:block">Home</span>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            py-2 px-4 hover:bg-slate-200   rounded-full mr-auto  '>
                <FaHashtag/>
                <span className="m-1 hidden md:block">Explore</span>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            py-2 px-4 hover:bg-slate-200   rounded-full mr-auto '>
                <FaBell/>
                <span className="m-1 hidden md:block">Notifications</span>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            py-2 px-4 hover:bg-slate-200   rounded-full mr-auto '>
                <GrMail/>
                <span className="m-1 hidden md:block">Message</span>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            py-2 px-4 hover:bg-slate-200   rounded-full mr-auto  '>
                <FaRegBookmark/>
                <span className="m-1 hidden md:block">Bookmark</span>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            py-2 px-4 hover:bg-slate-200   rounded-full mr-auto  '>
                <VscListSelection/>
                <span className="m-1 hidden md:block">Lists</span>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            py-2 px-4 hover:bg-slate-200   rounded-full mr-auto '>
                <FiUser/>
                <span className="m-1 hidden md:block">Profile</span>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            py-2 px-4 hover:bg-slate-200   rounded-full mr-auto  '>
                <CgMoreO/>
                <span className="m-1 hidden md:block">More</span>
            </button>
            <button className='focus:outline-none hover:text-blue flex items-center
            px-12 py-1 hover:bg-blue-600 hidden md:block justify-center text-xl text-white bg-blue-500  rounded-full mr-auto mb-1 '>
                <span className=""> Tweet</span>
            </button>
            {/* <svg viewBox="0 0 24 24" aria-hidden="true" className="md:hidden  r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path></g></svg> */}
        </div>
        <div className="flex justify-between">
            {/* <button className="flex p-3 ">
                <span className="m-1"> Jaish Chimnani </span>
                <CgMoreO/>
            </button> */}
            <button className='w-full flex  hover:bg-slate-300 px-3 py-1 border-t border-slate-300'>
                <img src={avtar} alt=""  className='w-10 rounded-full m-1'/>
                <div >
                    <p className='text-xs text-left leading-tight flex  text-gray-500'>Jaish Chimnani</p>
                    <p className='text-xs text-left '>@jaish-chimnani</p>
                </div>
            </button>
                    <CgMoreO className='my-5'/>
        </div>
        </>
    )
}

export default Sidebar;
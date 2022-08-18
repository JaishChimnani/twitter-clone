import React from 'react';
import {GrSearch} from "react-icons/gr"
import {FiSettings} from "react-icons/fi"
import {AiOutlineDown} from "react-icons/ai"
import {MdVerified} from "react-icons/md"
import trends from '../data/trends';
import followSuggestions from '../data/Follow';
import avtar from '../img/avtar.jpg';

const Trending=()=>{
    console.log(trends);
    return (
        <>
        <div className="hidden md:block relative p-3 ">
{/* <div className='sticky top-0 mx-2 p-2 bg-white'> */}

        <input type="text" className='pl-12  rounded-full bg-slate-200 w-full p-2 bg-lighter text-sm mb-4' placeholder='search twitter' />
        <GrSearch className='absolute left-0 top-0 mt-5 ml-6 text-sm text-gray-700 '/>
{/* </div> */}
        <div className='w-full rounded-lg bg-slate-200 m-2'>
            <div className='flex items-center justify-between p-3'>
                <p className="text-lg font-bold">Trends For You</p>
                <FiSettings/>
            </div>
            {trends.map((trend)=>{
                return (
                    <>
                    
            <button className='w-full flex justify-between hover:bg-slate-300 px-3 py-1 border-t border-slate-300'>
                <div>
                    <p className='text-sm text-left leading-tight text-gray-500'>{trend.heading}</p>
                    <p className='font-bold text-sm text-left leading-tight'>{trend.title}</p>
                    <p className='text-left leading-tight text-gray-500'>{trend.subHeading}</p>
                </div>
                <AiOutlineDown/>
            </button>
                    </>
                )
            })}
            <button className='p-3 w-full hover:bg-slate-300 text-left text-blue-500 border-t border-slate-300'>
                Show More
            </button>
        </div>
        <div className='w-full rounded-lg  bg-slate-200 m-2'>
            <div className='flex justify-between p-3'>
                <p className="text-lg font-bold">Who to Follow</p>
                <FiSettings/>
            </div>
            {followSuggestions.map((user)=>{
                return (
                    <>
                    
            <button className='w-full flex  hover:bg-slate-300 px-3 py-1 border-t border-slate-300'>
                <img src={avtar} alt=""  className='w-10 rounded-full m-1'/>
                <div >
                    <p className='text-xs text-left leading-tight flex  text-gray-500'>{user.name}{user.verified && <MdVerified className='text-blue-600 text-lg'/>}</p>
                    <p className='font-medium text-xs text-left leading-tight'>{user.userName}</p>
                    {  user.promoted && <p className='text-xs text-left leading-tight'>Promoted</p>}
    
    
                </div>
                <button className="ml-auto text-sm text-blue-500 py-1 px-4  rounded-full border-2 border-blue-500">
                    Follow 
                </button>
            </button>
                    </>
                )
            })}
            <button className='p-3 w-full hover:bg-slate-300 text-left text-blue-500 border-t border-slate-300'>
                Show More
            </button>
        </div>
        </div>
        </>
    )
}

export default Trending;
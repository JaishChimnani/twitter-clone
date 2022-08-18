import React from 'react';
import {BsStars} from 'react-icons/bs'
import avtar from "../img/avtar.jpg"
import tweets from '../data/tweets';

const Feed=()=>{
    return (
        <>
        <div className='px-5 sticky top-0 bg-white py-3 border-b border-slate-200 flex items-center  justify-between'>
            <h1 className="text-xl font-bold">Home</h1>
            <BsStars/>
        </div>
        <div className='px-5 py-3 border-b-8 border-slate-200 flex'>
            <div className='flex-none'>
                <img src={avtar} alt="" className='w-10 rounded-full m-1' />
            </div>
            <form className='w-full px-4 relative'>
                <textarea  placeholder="What's up?" className='w-full focus:outline-none'></textarea>
                <div className='flex items-center'>
                    <BsStars className='text-lg text-blue-500 mx-6 '/>
                    <BsStars className='text-lg text-blue-500 mx-6 '/>
                    <BsStars className='text-lg text-blue-500 mx-6 '/>
                    <BsStars className='text-lg text-blue-500 mx-6 '/>
                </div>
                <button className="h-9 px-4 absolute bottom-0 right-0 text-white font-medium text-sm bg-blue-500 focus:outline-none rounded-full">
                    Tweet
                </button>
            </form>
        </div>
        {tweets.map((tweet)=>{
        return (<div className='w-full p-4 border-b hover:bg-slate-200 flex'>
            <div className='flex-none mr-4'>
                <img src={avtar} alt="" className='w-10 rounded-full m-1' />
            </div>
            <div className='w-full'>
                <div className='flex items-center w-full'>
                    <p className="font-medium">{tweet.name}</p>
                    <p className="text-sm text-slate-900 ml-2">{tweet.username}</p>
                    <p className="text-sm text-slate-900 ml-2">{tweet.time}</p>
                    <BsStars className='text-slate-900 ml-auto'/>
                </div>
                <p className="py-2 text-left">
                    {tweet.tweet}
                </p>
                <div className="flex items-center justify-between w-full">
                    <div className='flex items-center text-sm text-slate-900'>
                        <BsStars className='mr-3'/>
                        <p>{tweet.comments}</p>
                    </div>
                    <div className='flex items-center text-sm text-slate-900'>
                        <BsStars className='mr-3'/>
                        <p>{tweet.retweets}</p>
                    </div>
                    <div className='flex items-center text-sm text-slate-900'>
                        <BsStars className='mr-3'/>
                        <p>{tweet.likes}</p>
                    </div>
                    <div className='flex items-center text-sm text-slate-900'>
                        <BsStars className='mr-3'/>
                    </div>
                </div>
            </div>
        </div>
        )})}

        </>
    )
}

export default Feed;
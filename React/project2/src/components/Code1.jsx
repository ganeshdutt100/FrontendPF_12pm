import React from 'react'

export const Code1 = () => {
    let myName = "Ganesh Dutt"
    let details = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo id enim minus. Commodi nostrum doloremque recusandae ab nulla cum amet repudiandae nisi maiores. Amet doloribus sequi et non impedit."

    let picture = "https://images.unsplash.com/photo-1749627995669-4d4dda3a9c1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"


    return (
        <div className='bg-slate-800 py-5   text-white flex flex-col items-center justify-center text-center'>
            <img src={picture} alt="" className='w-[300px] h-[300px] rounded-full' />

            <h1 className='text-3xl font-extrabold'>Hey I`m {myName}</h1>
            <p>{details}</p>

            <button className='bg-white text-slate-800 py-2 mt-3 px-4 rounded-full'>Click  me </button>
        </div>
    )
}


// DOM
// Virtual DOM

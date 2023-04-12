import React from 'react'
import windows from '../../assets/windows.png'

const Taskbar = () => {
    return (
        <div className="w-full h-14 fixed bottom-0">
            <div className="absolute inset-0 backdrop-filter backdrop-blur-3xl"></div>
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="relative z-10 w-14 h-full ml-4 flex rounded-md justify-center items-center text-white space-x-1 hover:bg-slate-300">
                <img
                    src={windows}
                    alt=""
                    className="w-8 h-8 filter drop-shadow-md bg-white  cursor-pointer"
                />
            </div>
        </div>

    )
}

export default Taskbar

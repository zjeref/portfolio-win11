import React from 'react'

const Icon = ({ icon }) => {


    return (
        <div className="w-20 text-center p-1 icons">
            <img src={icon.icon} alt="" className='' />
            <span className="text-white ">{icon.name}</span>
        </div>
    )
}

export default Icon

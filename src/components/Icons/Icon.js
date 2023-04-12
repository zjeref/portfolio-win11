import React, { useState } from 'react'

const Icon = ({ icon }) => {
    const [isSingleClick, setIsSingleClick] = useState(false)

    const singleClick = () => {
        setIsSingleClick(!isSingleClick)
    }


    return (
        <div className={`w-14 text-center p-1 icons leading-3 ${isSingleClick ? "singleSelect":"line-clamp-1 "} text-white`} onClick={singleClick}>
            <img src={icon.icon} alt="" className='' />
            <span className="text-sm">{icon.name}</span>
        </div>
    )
}

export default Icon

import React, { useContext, useState } from 'react'
import { AppContext } from '../../middlewares/app-switch'

const Icon = ({ icon }) => {
    const [isSingleClick, setIsSingleClick] = useState(false)
    const {dispatch} = useContext(AppContext);

    const singleClick = () => {
        setIsSingleClick(!isSingleClick)
    }

    const doubleClick = (iconName) => {
        dispatch({type:"CURRENT_APP", payload:iconName})
    }

    return (
        <div className={`w-14 text-center p-1 icons leading-3 ${isSingleClick ? "singleSelect" : "line-clamp-1 "} text-white`}
            onClick={singleClick}
            onDoubleClick={()=> doubleClick(icon.name)}
        >
            <img src={icon.icon} alt="" className='' />
            <span className="text-sm">{icon.name}</span>
        </div>
    )
}

export default Icon

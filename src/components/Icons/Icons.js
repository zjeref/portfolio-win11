import React, { useState } from 'react'
import Icon from './Icon'
import iconsdata from '../../icons-data.json'

const Icons = () => {
    const [icons] = useState(iconsdata.data)


    return (
        <div className="flex flex-col space-y-4 mx-4 select-none">
            {
                icons.map((icon) => {
                    return <Icon key={icon.id} icon={icon} />
                })
            }
        </div>
    )
}

export default Icons

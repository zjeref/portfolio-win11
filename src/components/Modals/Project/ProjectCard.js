import React, { useEffect, useState } from 'react'

const ProjectCard = ({ projectdata }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(projectdata);
    }, [projectdata])
    console.log(projectdata.imageUrl)
    return (
        <>
            {data &&
                <div className="w-80 h-60 text-center">
                    <div className="text-2xl">
                        <p>{data.name}</p>
                    </div>
                    <div className="w-full h-full overflow-hidden">
                        <img src={data.imageUrl} alt={data.title} className='object-cover w-full h-full' />
                    </div>
                </div>

            }
        </>
    )
}

export default ProjectCard

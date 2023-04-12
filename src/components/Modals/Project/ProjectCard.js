import React, { useEffect, useState } from 'react'

const ProjectCard = ({ projectdata }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(projectdata);
    }, [projectdata])
    return (
        <>
            {data &&
                <div className="w-80 h-max my-4 flex flex-col bg-white shadow-md hover:scale-105 cursor-pointer delay-100 transition-all">
                    <div className="w-full h-full overflow-hidden">
                        <img src={data.imageUrl} alt={data.title} className='object-cover w-full h-60' />
                    </div>
                    <div className="p-3 space-y-2">
                        <div>
                            <p className="text-xl font-semibold">{data.name}</p>
                            <p className="text-sm text-slate-500">{data.description}</p>
                        </div>

                        <div className="space-x-3 text-center">
                            <button className="projectCard-btn bg-yellow-800">Demo</button>
                            <button className="projectCard-btn bg-teal-800"><a href={data.liveUrl} rel="noopener noreferrer" target="_blank">Open</a></button>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectCard

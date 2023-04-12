import React, { useEffect, useState } from 'react'
import projectsData from '../../../projects-data.json'

import { GrReactjs } from 'react-icons/gr'
import { TbBrandJavascript } from 'react-icons/tb'
import { BsBrowserEdge } from 'react-icons/bs'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        setProjects(projectsData.data);
    }, [])

    return (
        <div className='w-full h-full flex'>
            <div className='w-1/4 max-w-sm h-full bg-teal-400 flex flex-col items-center space-y-2 border-r-2 border-black'>
                <div className='text-3xl text-white font-bold my-6 underline'>
                    <p>My Projects</p>
                </div>
                <div className='text-2xl text-slate-200 space-y-4'>
                    <div className='projects-menu '>
                        <BsBrowserEdge />
                        <p>Web Development</p>
                    </div>
                    <div className='projects-menu'>
                        <GrReactjs />
                        <p>React</p>
                    </div>
                    <div className='projects-menu'>
                        <TbBrandJavascript />
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-around'>
                {projects &&
                    projects.map(project => {
                        return <ProjectCard key={project.id} projectdata={project} />
                    })
                }
            </div>

            {/* <iframe src="https://forum-app-using-mern.vercel.app/" className='w-full h-full'></iframe> */}
        </div>
    )
}

export default Projects

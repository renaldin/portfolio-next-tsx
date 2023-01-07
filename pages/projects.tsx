import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../type"

const Projects = () => {
    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState('all')

    const handlerFilterCategory = (category: Category | 'all') => {
        if (category === 'all') {
            setProjects(projectsData)
            setActive(category)
            return
        }

        const newArray = projectsData.filter(project => project.category.includes(category))
        setProjects(newArray)
        setActive(category)
    }

    return (
        <div className="px-5 py-2 overflow-y-scroll" style={{ height: '65vh' }}>
            <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />

            <div className="grid grid-cols-12 gap-4 my-3 relative">
                {
                    projects.map(project => (
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg" key={project.name}>
                            <ProjectCard project={project} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects

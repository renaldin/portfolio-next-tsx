import ProjectCard from "../components/ProjectCard"
import { projects } from "../data"

const Projects = () => {
    return (
        <div>
            <nav>Navbar</nav>

            <div className="grid grid-cols-12 gap-4 my-3">
                {
                    projects.map(project => (
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-2" key={project.name}>
                            <ProjectCard project={project} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects

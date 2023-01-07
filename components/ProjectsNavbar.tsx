import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem: FunctionComponent<{ value: Category | 'all', handlerFilterCategory: Function }> = ({
  value,
  handlerFilterCategory
}) => {
  return (
    <li className="cursor-pointer hover:text-green capitalize" onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}



const ProjectsNavbar: FunctionComponent<{ handlerFilterCategory: Function }> = (props) => {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="node" {...props} />
    </div>
  )
}

export default ProjectsNavbar

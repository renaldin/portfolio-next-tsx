import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem: FunctionComponent<{ value: Category | 'all', handlerFilterCategory: Function, active: string }> = ({
  value,
  handlerFilterCategory,
  active
}) => {
  let className = "cursor-pointer hover:text-green capitalize"
  if (active === value) className += ' text-green'

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}



const ProjectsNavbar: FunctionComponent<{ handlerFilterCategory: Function, active: string }> = (props) => {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="next" {...props} />
      <NavItem value="laravel" {...props} />
      <NavItem value="codeigniter" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="freelance" {...props} />
    </div>
  )
}

export default ProjectsNavbar

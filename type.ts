import { IconType } from 'react-icons'

export interface IService {
    title: string,
    about: string,
    Icon: IconType
}

export interface ISkill {
    name: string,
    level: string,
    Icon: IconType
}

export interface IProject {
    id: number,
    name: string,
    description: string,
    image_path: string,
    deployed: string,
    deployed_url: string,
    github: string,
    github_url: string,
    category: Category[],
    key_techs: string[]
}

export type Category = "react" | "freelance" | "laravel" | "codeigniter" | "next" | "node"
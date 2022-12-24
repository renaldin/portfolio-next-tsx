import { RiCommandLine, RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { IService, ISkill } from './type'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Devvelopment",
        about:
            "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>css</b>, <b>React Js</b>,",
    },
    {
        Icon: FaServer,
        title: "Backend Devvelopment",
        about:
            "handle database, server, api using <b>Express</b> & other popular frameworks",
    },
    {
        Icon: AiOutlineApi,
        title: "API Devvelopment",
        about:
            "I can develop request REST API using <b>django-rest-api</b> & <b>Node API</b>",
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about:
            "a daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>",
    },
    {
        Icon: AiOutlineAntDesign,
        title: "UI/UX Designer",
        about:
            "stunning user interface designer using <b>Figma</b> and <b>Framer</b>",
    },
    {
        Icon: RiCommandLine,
        title: "Whatever",
        about:
            "Lorem...",
    },
]

export const languages: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Python',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'Javascript',
        level: '60%'
    },
    {
        Icon: BsCircleFill,
        name: 'React Native',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'React',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'Django',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'Bootstrap',
        level: '80%'
    },
]

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '85%'
    },
    {
        Icon: BsCircleFill,
        name: 'Photoshop',
        level: '45%'
    },
    {
        Icon: BsCircleFill,
        name: 'Illustrator',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'Framer',
        level: '45%'
    },
]
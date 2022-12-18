import { RiCommandLine, RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { IService } from './type'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'

export const services: IService[] = [
    {
        icon: RiComputerLine,
        title: "Frontend Devvelopment",
        about:
            "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>css</b>, <b>React Js</b>,",
    },
    {
        icon: FaServer,
        title: "Backend Devvelopment",
        about:
            "handle database, server, api using <b>Express</b> & other popular frameworks",
    },
    {
        icon: AiOutlineApi,
        title: "API Devvelopment",
        about:
            "I can develop request REST API using <b>django-rest-api</b> & <b>Node API</b>",
    },
    {
        icon: MdDeveloperMode,
        title: "Competitive Coder",
        about:
            "a daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>",
    },
    {
        icon: AiOutlineAntDesign,
        title: "UI/UX Designer",
        about:
            "stunning user interface designer using <b>Figma</b> and <b>Framer</b>",
    },
    {
        icon: RiCommandLine,
        title: "Whatever",
        about:
            "Lorem...",
    },
]
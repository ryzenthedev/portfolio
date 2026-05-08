import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiExpress, SiVercel, SiGithub } from "react-icons/si"
import { TbFlower } from "react-icons/tb"

/* You can go to http://react-icons.github.io/react-icons for explore and add icons. */

export default {

    data: [
        {
            name: "JavaScript",
            recentlyIKnow: 100,
            icon: (<SiJavascript color="YELLOW" size="30px"/>)
        },
       
        {
            name: "HTML",
            recentlyIKnow: 80,
            icon: (<SiHtml5 color="#e34c26" size="30px"/>)
        },
        {
            name: "CSS",
            recentlyIKnow: 90,
            icon: (<SiCss3 color="#264de4" size="30px"/>)
        },
        {
            name: "Node.js",
            recentlyIKnow: 100,
            icon: (<SiNodedotjs color="#68a063" size="30px"/>)
        },
        {
            name: "React.js",
            recentlyIKnow: 100,
            icon: (<SiReact color="#61DBFB" size="30px"/>)
        },
        {
            name: "Next.js",
            recentlyIKnow: 100,
            icon: (<SiNextdotjs color="WHITE" size="30px"/>)
        },
        {
            name: "Tailwind CSS",
            recentlyIKnow: 100,
            icon: (<SiTailwindcss color="#3490dc" size="30px"/>)
        },
       
        {
            name: "Vercel",
            recentlyIKnow: 100,
            icon: (<SiVercel color="WHITE" size="30px"/>)
        },
        {
            name: "Github",
            recentlyIKnow: 100,
            icon: (<SiGithub color="WHITE" size="30px"/>)
        }
    ]

}

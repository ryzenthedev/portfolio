import { AiFillHome, AiFillIdcard, AiFillMail, AiOutlineShareAlt } from "react-icons/ai"

/* You can go to http://react-icons.github.io/react-icons for explore and add icons. */

export default {

    links: [
        {key: "home", to: "/", icon: (<AiFillHome size="23px"/>)},
        {key: "about", to: "/about", icon: (<AiFillIdcard size="23px"/>)},
        {key: "contact", to: "/contact", icon: (<AiFillMail size="23px"/>)},
        {key: "projects", to: "/projects", icon: (<AiOutlineShareAlt size="23px"/>)}
    ]

}

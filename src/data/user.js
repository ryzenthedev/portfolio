import { useState, useEffect } from "react"
import User from "./variables"
import useSWR from "swr"

export default function UserInformation() {

    const [user, setUser] = useState(null)
    const [github, setGithub] = useState([])
    let websocket;
    let variables = {user, setUser, github}
    let fetchData = (url) => fetch(url).then(r => r.json())
    let {data, error} = useSWR('https://api.github.com/users/' + User.github + '/repos',fetchData,{refreshInterval:5000})

    useEffect(() => {
        setGithub(data)
    }, [data])

    useEffect(() => {
        // WebSocket bağlantısı kaldırıldı
    }, [])

    return variables

}
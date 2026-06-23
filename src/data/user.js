import { useState } from "react"

export default function UserInformation() {

    const [user, setUser] = useState({
        discord_user: {
            username: "ryzenthedev",
            avatar: null
        },
        avatarUrl: `${process.env.PUBLIC_URL}/image/profile.png`
    })

    return { user, setUser, github: [] }

}

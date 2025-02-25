import {auth} from "@/auth"
import Image from "next/image";

export default async function UserAvatar() {
    const session = await auth()

    if (!session?.user) return null

    if (!session.user.image) return null

    console.log(session.user.image)

    return (
        <div>
            <Image width={50} height={50} src={session.user.image} alt="User Avatar"/>
        </div>
    )
}
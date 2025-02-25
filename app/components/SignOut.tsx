import {signOut} from "@/auth"
import {Button} from "@/components/ui/button";
import {FaSignOutAlt} from "react-icons/fa";

export function SignOut() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <Button className={''} type="submit"><FaSignOutAlt />  Sign Out</Button>
        </form>
    )
}
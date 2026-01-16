import { cn } from "@/lib/utils";
import { FloatingDock } from "./ui/floating-dock";
import {House, SquareTerminal, Info, Contact2Icon} from "lucide-react"
export function NavigationBar({className, ...props}: React.ComponentProps<"nav">){
    const links = [
        {
            title: "Home",
            icon: (
                <House/>
            ),
            href: "#",
        },
        {
            title: "Projects",
            icon: (
            <SquareTerminal/>),
            href: "#"
        },
                {
            title: "About",
            icon: (
            <Info/>),
            href: "#"
        },
        {
            title: "Contact",
            icon: (
            <Contact2Icon/>),
            href: "#"
        }



    ]


    return <nav className={cn(className, "absolute flex items-center")} >

        <FloatingDock items={links} />
    </nav>
}

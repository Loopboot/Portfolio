import { ModeToggle } from "@/components/mode-toggle";
import { NavigationBar } from "@/components/navigation-bar";

export default function Projects() {
    return (
        <div className="flex min-w-screen justify-center">
            <div className="container flex flex-col">
                <div className="flex justify-between p-4">
                    <NavigationBar />
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}

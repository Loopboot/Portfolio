import { ModeToggle } from '@/components/mode-toggle';
import { NavigationBar } from '@/components/navigation-bar';

export default function About() {
    return (
        <div className="flex min-w-screen justify-center">
            <div className="container flex flex-col">
                <div className="flex justify-between p-4">
                    <NavigationBar />
                    <ModeToggle />
                </div>
                <main className="w-full"></main>
            </div>
        </div>
    );
}

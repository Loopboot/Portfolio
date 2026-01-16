import { ModeToggle } from '@/components/mode-toggle';
import { NavigationBar } from '@/components/navigation-bar';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=aldrich:400|bungee:400" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen w-screen flex-col items-center">
                <div className="relative container flex min-h-screen flex-col">
                    <div className="absolute top-0 left-0 z-50 mt-4 flex w-full justify-between p-8">
                        <NavigationBar />
                        <ModeToggle />
                    </div>
                    <main className="mt-32 flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <div className="my-12 flex w-1/2 flex-col items-center gap-12">
                                <h1 className="font-bungee text-6xl tracking-wide">
                                    About <span className="text-emerald-400">Me</span>
                                </h1>
                                <p className="text-lg">
                                    I’m a full-stack developer who enjoys building and refining web applications. I like tackling complex problems,
                                    exploring different approaches, and designing clean, maintainable architectures. I focus on writing clear,
                                    functional code and treat every project as an opportunity to learn and improve.
                                </p>
                            </div>

                            <div className="mt-32 flex flex-col items-center gap-4">
                                <h2 className="font-bungee text-4xl tracking-wide text-emerald-400">Technologies</h2>
                                <div className="grid grid-cols-3">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bungee text-2xl">Frontend</h3>
                                        <ul className="list-disc">
                                            <li>Next.js</li>
                                            <li>React</li>
                                            <li>Typescript</li>
                                            <li>Tailwind CSS</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bungee text-2xl">Backend</h3>
                                        <ul className="list-disc">
                                            <li>Django</li>
                                            <li>Django REST Framework</li>
                                            <li>Postgresql</li>
                                            <li>MySQL</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bungee text-2xl">Infrastructure Tools</h3>
                                        <ul className="list-disc">
                                            <li>Docker</li>
                                            <li>Git</li>
                                            <li>REST APIs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

import { ModeToggle } from '@/components/mode-toggle';
import { NavigationBarFloat } from '@/components/navigation-bar';
import { ProjectTimeline } from '@/components/project-timeline';
import { Boxes } from '@/components/ui/background-boxes';
import { Button } from '@/components/ui/button';
import { Head } from '@inertiajs/react';
import { IconBrandGithub, IconBrandGoogle, IconBrandLinkedin } from '@tabler/icons-react';

const timelineItems = [
    {
        dateTime: '2025-01-15',
        date: 'November 2025',
        title: 'Attendance Monitoring System',
        description: 'Deployed a Attendance Monitoring System using RFID with Facial Recognition',
        stack: ['React', 'Next.js (full-stack)', 'Drizzle-ORM', 'tailwindcss', 'postgresql', 'tensorflow-js'],
    },
    {
        dateTime: '2025-02-01',
        date: 'December 2025',
        title: 'Chatco admin forecasting system',
        description: 'Deployed a frontend web based Dashboard system with backend web service.',
        stack: ['React', 'Next.js (frontend)', 'Django (backend)', 'prophet', 'postgresql'],
    },
    {
        dateTime: '2025-03-01',
        date: 'January 2026  - Ongoing',
        title: 'Document Management System.',
        description: 'Develop a multi-tenant SaaS Document Management System .',
        stack: ['React', 'Next.js (frontend)', 'Django (backend)', 'postgresql', 'Docker', 'MinIO'],
    },
];

export default function Home() {
    return (
        <>
            <Head title="Kian Harvey - Portfolio">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=aldrich:400|bungee:400" rel="stylesheet" />
            </Head>

            {/* Hero Section */}
            <section
                id="home"
                className="relative flex max-h-screen min-h-screen flex-col items-center overflow-hidden bg-background p-6 text-foreground lg:justify-center lg:p-8"
            >
                <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-muted mask-[radial-gradient(transparent,background)]" />
                <Boxes className="top-0 left-0 h-screen max-w-screen" />
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="absolute z-50 flex flex-col gap-4 bg-transparent lg:w-350">
                        <div>
                            <h1 className="font-bungee text-8xl font-thin text-foreground">HEY!, I AM</h1>
                            <span className="font-bungee text-8xl font-thin text-emerald-500">KIAN HARVEY</span>
                        </div>
                        <div className="">
                            <p className="ml-1.25 w-fit rounded-sm bg-background/50 px-2 py-0.5 text-lg backdrop-blur-2xl backdrop-opacity-75">
                                Full-stack developer specializing in <span className="font-bold text-emerald-600">Next.js</span> and{' '}
                                <span className="font-bold text-blue-600">Django</span>, building modern web apps with{' '}
                                <span className="text-emerald-700 italic">clean architecture</span>.
                            </p>
                        </div>
                        <div>
                            <Button
                                asChild
                                size="lg"
                                className="text-lg font-bold bg-accent text-foreground hover:bg-accent/75"
                            >
                                <a href="#contact">Let's talk</a>
                            </Button>
                        </div>
                    </main>
                    <NavigationBarFloat className="bottom-4 z-50" />
                    <div className="fixed top-4 right-4 z-50">
                        <ModeToggle />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="flex min-h-screen w-screen flex-col items-center">
                <div className="relative container flex min-h-screen flex-col">
                    <main className="mt-32 flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <div className="my-12 flex w-1/2 flex-col items-center gap-12">
                                <h1 className="font-bungee text-6xl tracking-wide">
                                    About <span className="text-emerald-400">Me</span>
                                </h1>
                                <p className="text-lg">
                                    I'm a full-stack developer who enjoys building and refining web applications. I like tackling complex problems,
                                    exploring different approaches, and designing clean, maintainable architectures. I focus on writing clear,
                                    functional code and treat every project as an opportunity to learn and improve.
                                </p>
                            </div>

                            <div className="mt-32 flex flex-col items-center gap-4">
                                <h2 className="font-bungee text-4xl tracking-wide text-emerald-400">Technologies</h2>
                                <div className="grid grid-cols-3">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bungee text-2xl">Frontend</h3>
                                        <ul className="list-disc pl-4">
                                            <li>Next.js</li>
                                            <li>React</li>
                                            <li>Typescript</li>
                                            <li>Tailwind CSS</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bungee text-2xl">Backend</h3>
                                        <ul className="list-disc pl-4">
                                            <li>Django</li>
                                            <li>Django REST Framework</li>
                                            <li>Postgresql</li>
                                            <li>MySQL</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bungee text-2xl">Infrastructure Tools</h3>
                                        <ul className="list-disc pl-4">
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
            </section>

            {/* Projects Section */}
            <section id="projects" className="flex min-h-screen w-screen flex-col items-center">
                <div className="relative container flex min-h-screen flex-col">
                    <main className="mt-32 flex flex-col">
                        <div className="flex flex-col justify-center">
                            <div className="my-12 flex flex-col items-center">
                                <h1 className="font-bungee text-6xl tracking-wide">
                                    My <span className="text-emerald-400">Projects</span>
                                </h1>
                            </div>
                            <ProjectTimeline timelineItems={timelineItems} />
                        </div>
                    </main>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="flex min-h-screen w-screen flex-col items-center">
                <div className="relative container flex min-h-screen flex-col ">
                    <main className="mt-32 flex flex-col">
                        <div className="flex flex-col justify-center">
                            <div className="my-12 flex flex-col items-center gap-12">
                                <h1 className="font-bungee text-6xl tracking-wide">
                                    Let's <span className="text-emerald-400">talk</span> at
                                </h1>

                                <div className="grid grid-cols-1">
                                    <div className="flex flex-col">
                                        <ul className="flex flex-col gap-4 *:hover:text-emerald-500 *:hover:underline">
                                            <li className="flex gap-2">
                                                <IconBrandGithub /> <a href="https://github.com/Loopboot">https://github.com/Loopboot</a>
                                            </li>
                                            <li className="flex gap-2">
                                                <IconBrandGoogle /> <a href="#">bsis.rci.kianharvey@gmail.com</a>
                                            </li>
                                            <li className="flex gap-2">
                                                <IconBrandLinkedin />{' '}
                                                <a href="https://www.linkedin.com/in/kian-harvey-tayao-7a468a3a6">
                                                    https://www.linkedin.com/in/kian-harvey-tayao-7a468a3a6
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}

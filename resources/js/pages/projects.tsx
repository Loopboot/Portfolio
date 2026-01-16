import { ModeToggle } from '@/components/mode-toggle';
import { NavigationBar } from '@/components/navigation-bar';
import { ProjectTimeline } from '@/components/project-timeline';
import { Head } from '@inertiajs/react';

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
export default function Projects() {
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
            </div>
        </>
    );
}

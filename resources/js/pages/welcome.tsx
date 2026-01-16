import { ModeToggle } from '@/components/mode-toggle';
import { NavigationBarFloat } from '@/components/navigation-bar';
import { Boxes } from '@/components/ui/background-boxes';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=aldrich:400|bungee:400" rel="stylesheet" />
            </Head>
            <div className="relative flex max-h-screen min-h-screen flex-col items-center overflow-hidden bg-background p-6 text-foreground lg:justify-center lg:p-8">
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
                    </main>
                    <NavigationBarFloat className="bottom-4 z-50" />
                    <div className="absolute top-4 right-4 z-50">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </>
    );
}

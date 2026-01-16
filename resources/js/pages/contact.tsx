import { ModeToggle } from '@/components/mode-toggle';
import { NavigationBar } from '@/components/navigation-bar';
import { Head } from '@inertiajs/react';
import { IconBrandGithub, IconBrandGoogle, IconBrandLinkedin } from '@tabler/icons-react';
export default function Contact() {
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
                            <div className="my-12 flex flex-col items-center gap-12">
                                <h1 className="font-bungee text-6xl tracking-wide">
                                    Let's <span className="text-emerald-400">talk</span>
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
            </div>
        </>
    );
}

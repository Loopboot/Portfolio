import { ModeToggle } from '@/components/mode-toggle';
import { NavigationBar } from '@/components/navigation-bar';
import { Boxes } from '@/components/ui/background-boxes';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=aldrich:400|bungee:400" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-background p-6 text-foreground lg:justify-center lg:p-8">
                <div className="absolute inset-0 w-full h-full bg-muted z-20 mask-[radial-gradient(transparent,background)] pointer-events-none" />
                <Boxes />
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 ">
                    <main className='absolute lg:w-250 z-50 bg-transparent'>
                        <h1 className='font-thin text-9xl font-bungee text-foreground'>HELLO test </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae accusantium dolores dolorem perferendis nesciunt numquam hic asperiores at. Blanditiis quae, ipsa nostrum saepe dolore enim aliquid necessitatibus impedit dolor iure.</p>
                    </main>
                    <NavigationBar className='z-50 bottom-4' />
                    <div className='absolute top-4 right-4 z-50'>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </>
    );
}

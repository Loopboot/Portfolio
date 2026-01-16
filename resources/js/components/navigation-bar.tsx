import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Contact2Icon, House, Info, SquareTerminal } from 'lucide-react';
import { FloatingDock } from './ui/floating-dock';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';
export function NavigationBarFloat({ className, ...props }: React.ComponentProps<'nav'>) {
    const links = [
        {
            title: 'Home',
            icon: <House />,
            href: '/',
        },
        {
            title: 'Projects',
            icon: <SquareTerminal />,
            href: '/projects',
        },
        {
            title: 'About',
            icon: <Info />,
            href: '/about',
        },
        {
            title: 'Contact',
            icon: <Contact2Icon />,
            href: '/contact',
        },
    ];

    return (
        <nav className={cn(className, 'absolute flex items-center')}>
            <FloatingDock items={links} desktopClassName="shadow-md" />
        </nav>
    );
}

export function NavigationBar() {
    return (
        <NavigationMenu className="rounded-md border bg-background/20 shadow-md">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/projects">Projects</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

import { cn } from '@/lib/utils';
import { Contact2Icon, House, Info, SquareTerminal } from 'lucide-react';
import { FloatingDock } from './ui/floating-dock';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export function NavigationBarFloat({ className, ...props }: React.ComponentProps<'nav'>) {
    const links = [
        {
            title: 'Home',
            icon: <House />,
            href: '#home',
        },
        {
            title: 'About',
            icon: <Info />,
            href: '#about',
        },
        {
            title: 'Projects',
            icon: <SquareTerminal />,
            href: '#projects',
        },
        {
            title: 'Contact',
            icon: <Contact2Icon />,
            href: '#contact',
        },
    ];

    return (
        <nav className={cn(className, 'fixed flex items-center')}>
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
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('home');
                            }}
                        >
                            Home
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('about');
                            }}
                        >
                            About
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('projects');
                            }}
                        >
                            Projects
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('contact');
                            }}
                        >
                            Contact
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

import { cn } from '@/lib/utils';

export default function GridBackgroundDemo({ children }: React.ComponentProps<'div'>) {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center bg-background">
            <div
                className={cn(
                    'absolute inset-0',
                    '[background-size:40px_40px]',
                    '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
                    'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="relative z-20 flex w-full flex-col items-center bg-gray-600/20 -bg-linear-180/10 from-emerald-950/10">{children}</div>
        </div>
    );
}

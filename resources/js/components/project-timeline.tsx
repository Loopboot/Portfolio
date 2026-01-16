import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDescription,
    TimelineDot,
    TimelineHeader,
    TimelineItem,
    TimelineTime,
    TimelineTitle,
} from '@/components/ui/timeline';
import { Link } from '@inertiajs/react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface TimelineItem {
    timelineItems: {
        dateTime: string;
        date: string;
        title: string;
        description: string;
        stack: string[];
        link?: string;
    }[];
}

export function ProjectTimeline({ timelineItems }: TimelineItem) {
    return (
        <Timeline variant="alternate" activeIndex={1}>
            {timelineItems.map((item, idx) => {
                const isRight = idx % 2 === 1;

                return (
                    <TimelineItem key={idx}>
                        <TimelineDot />
                        <TimelineConnector />
                        <TimelineContent>
                            <TimelineHeader>
                                <TimelineTime className="text-md" dateTime={item.dateTime}>
                                    {item.date}
                                </TimelineTime>

                                <TimelineTitle className='text-lg'>
                                    {item.link ? (
                                        <Tooltip>
                                            <TooltipTrigger asChild className="hover:underline">
                                                <Link href={item.link}>{item.title}</Link>
                                            </TooltipTrigger>
                                            <TooltipContent>{item.link}</TooltipContent>
                                        </Tooltip>
                                    ) : (
                                        item.title
                                    )}
                                </TimelineTitle>
                            </TimelineHeader>

                            <TimelineDescription className="text-md">
                                <p>{item.description}</p>

                                <ul className={`flex flex-wrap gap-5 ${isRight ? 'justify-start' : 'justify-end'}`}>
                                    {item.stack.map((tech, stackIdx) => (
                                        <li key={stackIdx} className="list-disc">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </TimelineDescription>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
}

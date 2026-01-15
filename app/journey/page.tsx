interface IJourneyItem {
    title: string
    company: string
    date: string
    responsibilities: string[]
}

const items: IJourneyItem[] = [
    {
        title: 'React Frontend Developer | (PART-TIME)',
        company: 'Gigz Official',
        date: 'Jun 2021 - August 2021',
        responsibilities: [
            'Develop robust and user-friendly application with frontend functionality',
            'Determine placement and layout of site pages based on UI/UX designs provided',
            'Create software documentation, and update existing documentation',
            'Assist in gathering requirements and project specifications, Attend biweekly stand-up meetings',
            'Manage project tasks, timelines, and communication.',
        ],
    },
    {
        title: 'Frontend Developer | (FULL-TIME)',
        company: 'Growth Rocket Inc.',
        date: 'Sep 2021 - Dec 2022',
        responsibilities: [
            'Code web components for the frontend interface',
            'Convert PSDs to HTML/CSS/JS',
            'Ensure an adaptive mobile and tablet experience',
            'Participate in implementation plans',
            'Clean up overall site from bug fixes',
        ],
    },
    {
        title: 'React Frontend Developer | (PART-TIME)',
        company: 'NxtWork',
        date: 'Sep 2022 - Jan 2023',
        responsibilities: [
            'Translate wireframes and PSD Design into functional web app',
            'Work with development teams and managers to ideate software solutions',
            'Developing and designing frontend web architecture',
            'Developing well-functioning databases and applications',
            'Address and improve any technical issues',
        ],
    },
    {
        title: 'Frontend Developer(React.js) | (FULL-TIME)',
        company: 'IAccessVision Inc.',
        date: 'Jan 2023 - Nov 2024',
        responsibilities: [
            'Develop a ReactJS-based Web App',
            'Provide input or develop business solutions, estimates, and specifications.',
            'Understand technical designs provided by Architect and Tech Leads, and see them through the Agile development life cycle.',
            'Provide technical application support by analyzing and fixing problems.',
            'Perform technical documentation on current and future designs and features.',
        ],
    },
    {
        title: 'Frontend Developer(React.js) | (FULL-TIME)',
        company: 'Greytech Services Inc.',
        date: 'Nov 2024 - Current',
        responsibilities: [
            'Develop a ReactJS-based Web App',
            'Provide input or develop business solutions, estimates, and specifications.',
            'Understand technical designs provided by Architect and Tech Leads, and see them through the Agile development life cycle.',
            'Provide technical application support by analyzing and fixing problems.',
            'Perform technical documentation on current and future designs and features.',
        ],
    },
]

const JourneyItem = ({ title, company, date, responsibilities }: IJourneyItem) => {
    const highlight = 'font-semibold text-custom-fuchsia'

    return (
        <li className="relative px-2.5 pb-2.5 border-l-2 border-custom-fuchsia mb-5 before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-custom-fuchsia before:-left-1.5 before:top-1.5 before:rounded-full">
            <span className="text-sm">
                {title}
                <span className="font-bold">@ </span>
                <span className={highlight}>{company}</span>
            </span>
            <span className="block pl-2.5 mt-2.5 text-xs text-gray-500">{date}</span>
            <ul className="mt-2.5 pl-5">
                {responsibilities.map((item, index) => (
                    <li key={index} className="text-xs list-disc list-inside">
                        {item}
                    </li>
                ))}
            </ul>
        </li>
    )
}

const Journey = () => {
    return (
        <ul>
            {items.map((item, index) => (
                <JourneyItem key={index} {...item} />
            ))}
        </ul>
    )
}

export default function Page() {
    return (
        <div className="flex flex-col items-center lg:w-4xl lg:mx-auto pt-10 mb-10">
            <h3 className="text-md font-bold mb-5">My Journey</h3>
            <Journey />
        </div>
    )
}

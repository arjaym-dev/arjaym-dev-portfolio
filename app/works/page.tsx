'use client'

import { useState } from 'react'
import Image from 'next/image'
interface IItems {
    title: string
    imgSrc: string
    description: string
    tech: string[]
    category: string[]
}

interface ICategory {
    category: string
    name: string
    handleCategory: (value: string) => void
}

const category: string[] = ['frontend', 'backend']

const items: IItems[] = [
    {
        title: 'Thesis Title Generator',
        imgSrc: '/projects/thesis-title-generator.webp',
        description:
            "If your course are Related to tech here's an app, To give a less struggle thinking thesis or capstone title this app doesn't propose to use the title generated here. But to give out those in need an idea.",
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express.js'],
        category: ['frontend', 'backend'],
    },
    {
        title: 'Boss Burger',
        imgSrc: '/projects/boss-burger.webp',
        description:
            "It's an app made for Burger Shop This app made through off a community challenge where they teach us how to code and learn from it from scratch This app help a beginner to have a good start of. foundation on html, css, javascript.",
        tech: ['Html', 'Css', 'Javascript'],
        category: ['frontend'],
    },
    {
        title: 'Erecord System',
        imgSrc: '/projects/erecord.webp',
        description:
            "This app is an erecord where the office staff of school doesn't have to manually type all of the grades including other info, This system also do have a main function of enabling to print out the computed grades in TOR.",
        tech: ['Html', 'Css', 'Javascript', 'Git', 'Node.js', 'Express.js', 'MongoDB'],
        category: ['frontend', 'backend'],
    },
    {
        title: 'Burger House',
        imgSrc: '/projects/burger-house.webp',
        description:
            'This app is made for Burger Shop for a coding challenge where I landed my job as frontend developer and this shows my skill at react.js environment This app ui could be also use to practice their skill, At using different environment.',
        tech: ['React.js', 'Typescript', 'Sass', 'Git'],
        category: ['frontend'],
    },
    {
        title: 'E-Dris',
        imgSrc: '/projects/e-dris.webp',
        description:
            'e-Learning, anytime, anywhere, even with no internet. Education is changing. From rapid shifts to distance and hybrid learning to a transforming job market and skills landscape.',
        tech: ['Ruby on rails', 'Docker', 'Next.js', 'Redux', 'Sass'],
        category: ['frontend'],
    },
    {
        title: 'Profiles in LosAngeles',
        imgSrc: '/projects/profilesin.webp',
        description:
            'Find people in the Los Angeles Metropolitan Area. View people profiles with phone numbers, addresses, education, work history, relatives & more!',
        tech: ['Java', 'Spring', 'Jquery', 'HTML/JSP', 'CSS', 'Algolia'],
        category: ['frontend'],
    },
    {
        title: 'Mylife Leaf Page',
        imgSrc: '/projects/websat-profile.webp',
        description:
            'View FREE Public Profile & Reputation for specific person and See Court Records | Photos | Address, Email & Phone Number | Personal Review | Income & Net Worth.',
        tech: ['Java', 'Spring', 'Jquery', 'HTML/JSP', 'CSS', 'Algolia'],
        category: ['frontend'],
    },
    {
        title: 'Mylife Top Searches',
        imgSrc: '/projects/top-searches.webp',
        description:
            'View FREE Public Profile through calendar Reputation for specific person by most search name by day and by time.',
        tech: ['Java', 'Spring', 'Jquery', 'HTML/JSP', 'CSS', 'Algolia'],
        category: ['frontend'],
    },
    {
        title: 'Mylife Reverse Address Lookup',
        imgSrc: '/projects/reverse-address-lookup_1.webp',
        description:
            'Find your loved ones or learn more about new people in your neighborhood. Look anyone up by their address with MyLife free address search tool today.',
        tech: ['Java', 'Spring', 'Jquery', 'HTML/JSP', 'CSS', 'Algolia'],
        category: ['frontend'],
    },
    {
        title: 'Mylife Reverse Phone Lookup',
        imgSrc: '/projects/reverse-phone-lookup_1.webp',
        description:
            'Find out who your mystery callers really are. Do a reverse phone search with MyLife free phone lookup tool now & stay safe from scammers &prank callers.',
        tech: ['Java', 'Spring', 'Jquery', 'HTML/JSP', 'CSS', 'Algolia'],
        category: ['frontend'],
    },
    {
        title: 'A Plus Construction & Development Corp.',
        imgSrc: '/projects/apcdcorp.webp',
        description:
            'Known for its reliability,professionalism and integrity. Providing highest level of service to clients. Aim to develop mutually beneficial partnership with our clients and empowering our people.',
        tech: ['React', 'Typescript', 'Styled-components', 'Node.js', 'MongoDB', 'Express.js'],
        category: ['frontend', 'backend'],
    },
    {
        title: 'Simple Todo App',
        imgSrc: '/projects/todo-app.webp',
        description:
            'A simple todo application api for mobile android phone, with authentication and authorization. This allow the user to create, read, update, delete and give them the same experience like other todo app.',
        tech: ['React-native', 'Typescript', 'Styled-components', 'Node.js', 'MongoDB', 'Express.js'],
        category: ['frontend', 'backend'],
    },
]

const CategoryButton = ({ name, category, handleCategory }: ICategory) => {
    const active = category === name
    return (
        <button
            onClick={() => handleCategory(name)}
            className={`capitalize outline-0 border-2 cursor-pointer px-2 py-1 m-1 rounded text-xs hover:border-custom-fuchsia hover:bg-custom-fuchsia/20 transition-all ${active ? 'border-custom-fuchsia bg-custom-fuchsia/20' : ''}`}
        >
            {name}
        </button>
    )
}

const Category = (props: Omit<ICategory, 'name'>) => {
    return (
        <div className="flex justify-center">
            {category.map((cat) => (
                <CategoryButton key={cat} name={cat} {...props} />
            ))}
        </div>
    )
}

const ProjectItem = ({ item }: { item: IItems }) => {
    return (
        <div className="group border-2 p-4 rounded flex flex-col justify-between hover:border-custom-fuchsia transition-all">
            <div>
                <h3 className="group-hover:text-custom-fuchsia text-sm font-semibold mb-2.5 transition-all">
                    {item.title}
                </h3>

                <div className="relative h-[262]">
                    <Image
                        fill
                        loading="eager"
                        src={item.imgSrc}
                        alt={item.title}
                        sizes="auto"
                        className="rounded object-cover"
                        quality={75}
                    />
                </div>

                <p className="text-xs my-2.5">{item.description}</p>
            </div>
            <div className="w-full flex flex-wrap gap-2 text-xs">
                {item.tech.map((tech) => (
                    <span
                        key={tech}
                        className="group-hover:bg-custom-fuchsia/20 group-hover:border-custom-fuchsia p-1 border  rounded transition-all"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}

const Projects = ({ category }: { category: string }) => {
    return (
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {items
                .filter((item) => item.category.includes(category))
                .map((item) => (
                    <ProjectItem key={item.title} item={item} />
                ))}
        </div>
    )
}

export default function Page() {
    const [category, setCategory] = useState<string>('frontend')

    const handleCategory = (value: string) => {
        setCategory(value)
    }

    return (
        <div className="lg:w-4xl lg:mx-auto pt-10 pb-10">
            <Category category={category} handleCategory={handleCategory} />
            <Projects category={category} />
        </div>
    )
}

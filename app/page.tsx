import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="lg:w-4xl lg:mx-auto lg:flex pt-10 lg:justify-center lg:gap-x-20">
            <div className="w-full lg:w-auto">
                <div className="w-[270] lg:w-[565] lg:h-[650] mx-auto h-[310] relative">
                    <Image fill preload loading="eager" alt="Arjay Marquez" src={'/profile.webp'} sizes="auto" />
                </div>
            </div>
            <div className="text-center lg:text-left mb-10">
                <h1 className="text-custom-h1 mt-[20] mb-[40] lg:mt-[60]">Idea/s To Reality.</h1>
                <p className="dark:text-foreground/20 italic">
                    &quot;Software always remain softly for End users! But sometimes hardly to developers!&quot;
                </p>
                <p className="dark:text-foreground/20 italic mt-[25] mb-[50]">- Bananeza Pacifique</p>
                <Link
                    href="/works"
                    className="px-[30] py-[15] w-[230] outline-0 border-2 border-solid rounded-xl hover:border-custom-fuchsia hover:bg-custom-fuchsia/10 transition-all"
                >
                    See my Works!
                </Link>
            </div>
        </div>
    )
}

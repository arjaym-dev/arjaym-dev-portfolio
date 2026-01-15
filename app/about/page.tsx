export default function Page() {
    const highlight = 'font-bold text-custom-fuchsia'
    return (
        <div className="lg:w-4xl lg:mx-auto pt-10 mb-10">
            <div className="flex flex-col gap-y-4">
                <p>
                    Hi, I&apos;m <span className={highlight}>Arjay Marquez</span>. I am a{' '}
                    <span className={highlight}>Frontend Developer</span> with nearly 5 years of professional experience
                    building responsive web applications
                </p>
                <p>
                    Recently, I&apos;ve been transitioning into a <span className={highlight}>Full-Stack</span> role.
                    While my professional focus has been frontend, I have been building personal projects to develop my
                    backend skills and working with
                    <span className={highlight}>DevOps</span> tools like <span className={highlight}>Docker</span>,{' '}
                    <span className={highlight}>AWS</span>, and <span className={highlight}>GitHub Actions</span>.
                </p>
                <p>
                    On a personal note, I&apos;m an IT graduate who loves <span className={highlight}>gaming</span>,{' '}
                    <span className={highlight}>airsoft</span>, and taking long <span className={highlight}>walks</span>{' '}
                    to unwind.
                </p>
            </div>
            <div className="mt-10">
                <p className="font-bold">Tech that I&apos;ve been using:</p>
                <ul className="mt-5">
                    <li>
                        <span className={highlight}>Web fundamentals:</span> HTML, CSS(Tailwind CSS, Styled Components,
                        Material UI, Antd, Sass, Scss, Shadcn, Bootstrap), Javascript (Typescript, Jquery, Lodash)
                    </li>
                    <li>
                        <span className={highlight}>State management:</span> Redux, Redux-toolkit, Zustand
                    </li>
                    <li>
                        <span className={highlight}>Frontend frameworks:</span> React, Next.js
                    </li>
                    <li>
                        <span className={highlight}>Backend technologies:</span> Node.js, Express
                    </li>
                    <li>
                        <span className={highlight}>Database systems:</span> MongoDB (Mongoose)
                    </li>
                    <li>
                        <span className={highlight}>DevOps tools:</span> Docker, AWS, GitHub Actions
                    </li>
                    <li>
                        <span className={highlight}>Testing frameworks:</span> Vitest, React Testing Library
                    </li>
                    <li>
                        <span className={highlight}>Other:</span> Postman, Figma, Git, Svn
                    </li>
                </ul>
            </div>
        </div>
    )
}

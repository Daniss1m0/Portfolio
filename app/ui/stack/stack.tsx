import Image from 'next/image'
import Link from 'next/link'

type Project = {
    name: string
    tags: string
    description: string
    image: string
    link: string
}

const projects: Project[] = [
    {
        name: 'Jajobranie',
        tags: 'Unity • C# • VR',
        description: 'A virtual reality game developed in Unity. Focuses on engaging mechanics and smooth gameplay.',
        image: '/images/jajobranie.png', // gif or png?
        link: 'https://krolgoggle.itch.io/jajobranie',
    },
    {
        name: 'Everything Is Fine',
        tags: 'Unity • C#',
        description: 'A psychological game featuring unique narrative elements and level design.',
        image: '/images/ever.png',
        link: 'https://daniss1m0.itch.io/everything-is-fine',
    },
    {
        name: 'Custom Card Game',
        tags: 'Unity • C#',
        description: 'A custom card game built with Unity, showcasing complex game logic inspired by Hearthstone.',
        image: '/images/cardgame.png',
        link: 'https://github.com/Daniss1m0/CustomCardGame',
    },
    {
        name: 'Shooting Range',
        tags: 'Unity • C# • VR',
        description: 'A virtual reality prototype focusing on immersive weapon mechanics and hand interactions.',
        image: '/images/vr.png',
        link: 'https://github.com/Daniss1m0/VR_Shooting_Range',
    },
    {
        name: 'City Builder',
        tags: 'C++ • OpenGL',
        description: 'A 3D city building simulation project demonstrating custom graphics rendering.',
        image: '/images/city.png',
        link: 'https://github.com/Daniss1m0/Game3D',
    },
    {
        name: 'Ray Tracing',
        tags: 'C++',
        description: 'An advanced rendering project implementing ray tracing algorithms for photorealistic lighting.',
        image: '/images/raytracing.png',
        link: 'https://github.com/ReQss/FotorealistycznaGrafikaKomputerowa',
    },
    {
        name: 'Motion Design',
        tags: 'Blender',
        description: 'A collection of 3D motion design animations showcasing lighting, physics, and rendering.',
        image: '/images/motion.png',
        link: 'https://github.com/Daniss1m0/MotionDesign',
    },
    {
        name: 'Animated Pastiche',
        tags: 'Blender',
        description: 'A creative 3D animation project demonstrating advanced modeling and camera work.',
        image: '/images/anim.jpg',
        link: 'https://github.com/Daniss1m0/AnimatedPastiche',
    },
    {
        name: '2D RPG',
        tags: 'Unreal Engine 5',
        description: 'A 2D Role-Playing Game prototype developed in UE5, featuring character systems and level design.',
        image: '/images/2drpg.png',
        link: 'https://github.com/Daniss1m0/PrZeGr13AA',
    },
]

export default function Stack() {
    return (
        <section id='projects' className='relative border-b border-line'>
            <div className='shell py-20 md:py-28'>
                <div className='reveal-scroll flex flex-wrap items-baseline justify-between gap-4'>
                    <p className='label'>Projects</p>
                    <p className='max-w-[38ch] text-sm text-fg-faint'>
                        Select works, prototypes & university projects.
                    </p>
                </div>

                <h2 className='reveal-scroll mt-6 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.04em] text-fg'>
                    Featured works
                </h2>

                <ul className='reveal-scroll mt-14 grid grid-cols-2 border-t border-l border-line sm:grid-cols-3'>
                    {projects.map(({ name, tags, description, image, link }, index) => (
                        <li
                            key={name}
                            // ВАЖНО: Убрали отсюда overflow-hidden, чтобы линия не обрезалась
                            className='group relative border-r border-b border-line last:col-span-2 sm:last:col-span-1'
                        >
                            <Link href={link} target="_blank" className="block h-full w-full">
                                
                                {/* ВАЖНО: Добавили overflow-hidden сюда на контейнер с картинкой */}
                                <div className="absolute inset-0 z-0 overflow-hidden opacity-0 transition-opacity duration-500 ease-out-soft group-hover:opacity-100">
                                    <Image
                                        src={image}
                                        alt={name}
                                        fill
                                        sizes="(min-width: 640px) 33vw, 50vw"
                                        loading="eager"
                                        className="object-cover opacity-20 grayscale transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                                </div>

                                <div className='relative z-10 flex h-full min-h-[200px] flex-col justify-between gap-8 p-5 transition-colors duration-500 group-hover:bg-ink-elev/30 md:p-6'>
                                    <span className='label transition-colors duration-500 group-hover:text-accent'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <div>
                                        <p className='font-display text-xl leading-none tracking-[-0.02em] text-fg md:text-2xl'>
                                            {name}
                                        </p>
                                        <p className='label mt-3'>{tags}</p>
                                        
                                        <div className='grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]'>
                                            <div className='overflow-hidden'>
                                                <p className='mt-4 text-sm text-fg-dim'>
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Синяя линия снова работает! */}
                                <span
                                    className='pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-soft group-hover:scale-x-100 z-20'
                                    aria-hidden='true'
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
import Image from 'next/image'

const lead =
	'I am a Game Developer specializing in C++ and C#, with a strong focus on game development using Unity and Unreal Engine 5. My experience includes building custom OpenGL graphics projects, developing VR applications, and conducting QA testing.'

const support =
	'Currently pursuing a Master\'s degree in Applied Computer Science, I focus on tackling diverse, multifaceted projects to constantly challenge and expand my skill set.'

const facts = [
	{ key: 'Experience', value: 'Master\'s Student' },
    { key: 'Focus', value: 'GameDev' },
    { key: 'Core', value: 'C#, C++, Unity, UE5, Blender' },
]

export default function Hero() {
	return (
		<section id='top' className='relative border-b border-line'>
			<div className='shell pt-16 pb-20 md:pt-28 md:pb-28'>
				<h1 className='visually-hidden'>
					Daniil Dunytskyi — Game Developer
				</h1>

				<div className='grid items-start gap-x-10 gap-y-12 md:grid-cols-12'>
					{/* Левая колонка: имя и текст */}
					<div className='md:col-span-7'>
						<p className='label reveal'>Game Developer</p>

						<p
							className='reveal mt-7 font-display text-[clamp(3.25rem,10vw,7.5rem)] leading-[0.86] tracking-[-0.045em] text-fg [--reveal-delay:80ms]'
							aria-hidden='true'
						>
							Daniil
							<br />
							Dunytskyi
						</p>

						<div className='reveal mt-10 h-px w-full bg-line [--reveal-delay:160ms]' />

						<div className='reveal [--reveal-delay:220ms]'>
							<p className='mt-8 max-w-[52ch] text-lg leading-[1.65] text-fg-dim md:text-xl'>
								{lead}
							</p>
							<p className='mt-5 max-w-[52ch] text-base leading-[1.7] text-fg-faint'>
								{support}
							</p>
						</div>
					</div>

					{/* Правая колонка: фото и справка */}
					<div className='md:col-span-5 md:pt-2'>
						<figure className='group reveal relative [--reveal-delay:120ms]'>
							<div className='relative aspect-4/5 w-full overflow-hidden border border-line bg-ink-elev'>
								<Image
    								className='object-cover object-[center_25%] scale-[1.35] grayscale contrast-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.42] group-hover:grayscale-0'
    								src='/images/hero/daniil.jpg'
    								alt='Portrait of Daniil Dunytskyi'
    								fill
    								priority
    								sizes='(min-width: 768px) 40vw, 100vw'
								/>
								{/* Затемнение снизу, чтобы фото не спорило с текстом */}
								<div
									className='pointer-events-none absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-transparent'
									aria-hidden='true'
								/>
							</div>

							<figcaption className='label mt-4 flex items-center justify-between'>
								<span>Daniil Dunytskyi</span>
								<span className='text-fg-faint'>Remote</span>
							</figcaption>
						</figure>

						<dl className='reveal mt-10 border-t border-line [--reveal-delay:280ms]'>
							{facts.map(({ key, value }) => (
								<div
									key={key}
									className='flex items-baseline justify-between gap-4 border-b border-line py-3.5'
								>
									<dt className='label'>{key}</dt>
									<dd className='text-right text-sm text-fg-dim'>{value}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	)
}

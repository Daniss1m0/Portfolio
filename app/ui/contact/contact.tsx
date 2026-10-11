import Image from 'next/image'

import EmailIcon from '@/modal/email.svg?url'
import GitHubIcon from '@/modal/gh.svg?url'
import TelegramIcon from '@/modal/tg.svg?url'
import MessengerIcon from '@/modal/mess.svg?url'

type Channel = {
	name: string
	handle: string
	href: string
	icon: typeof TelegramIcon
}

const channels: Channel[] = [
	{
		name: 'Telegram',
		handle: '@Daniss1m0_Legend',
		href: 'https://t.me/Daniss1m0_Legend',
		icon: TelegramIcon,
	},
	{
		name: 'Messenger',
		handle: 'Daniil Dunytskyi',
		href: 'https://m.me/Daniil Dunytskyi',
		icon: MessengerIcon,
	},
	{
		name: 'Email',
		handle: 'daniildu437@gmail.com',
		href: 'mailto:daniildu437@gmail.com',
		icon: EmailIcon,
	},
	{
		name: 'GitHub',
		handle: 'Daniss1m0',
		href: 'https://github.com/Daniss1m0',
		icon: GitHubIcon,
	},
]

export default function Contact() {
	return (
		<section id='contact' className='relative'>
			<div className='shell py-20 md:py-28'>
				<p className='label reveal-scroll'>Contact</p>

				<div className='mt-6 grid gap-x-10 gap-y-12 md:grid-cols-12'>
					<div className='md:col-span-5'>
						<h2 className='reveal-scroll font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.04em] text-fg'>
							Let&rsquo;s build
							<br />
							something.
						</h2>
						<p className='reveal-scroll mt-6 max-w-[34ch] text-base leading-[1.7] text-fg-faint'>
							Open to product work and long-term collaboration. The fastest way
							to reach me is Telegram or Email.
						</p>
					</div>

					<div className='md:col-span-7'>
						<ul className='reveal-scroll border-t border-line'>
							{channels.map(({ name, handle, href, icon }) => {
								const isMail = href.startsWith('mailto:')

								return (
									<li key={name}>
										<a
											href={href}
											target={isMail ? undefined : '_blank'}
											rel={isMail ? undefined : 'noreferrer noopener'}
											className='group flex items-center gap-4 border-b border-line px-1 py-5 transition-colors duration-300 hover:bg-ink-elev sm:gap-6 sm:px-3'
										>
											<Image
												className='size-5 shrink-0 opacity-45 brightness-0 invert transition-opacity duration-300 group-hover:opacity-100'
												src={icon}
												alt=''
												width={20}
												height={20}
											/>

											<span className='min-w-0 flex-1 text-[15px] tracking-tight text-fg'>
												{name}
											</span>

											{/* Адреса и ники регистрозависимы — капс из .label здесь не годится */}
											<span className='truncate font-mono text-[11px] tracking-[0.08em] text-fg-faint transition-colors duration-300 group-hover:text-fg-dim'>
												{handle}
											</span>

											<svg
												viewBox='0 0 16 16'
												className='size-4 shrink-0 text-fg-faint transition-[transform,color] duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent'
												fill='none'
												stroke='currentColor'
												strokeWidth='1.5'
												aria-hidden='true'
											>
												<path d='M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5' />
											</svg>
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

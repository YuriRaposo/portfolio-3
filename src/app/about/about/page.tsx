import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<main className='mx-auto w-full max-w-[1280px] px-6 pt-12 pb-16 md:px-8 md:pt-16 lg:px-[144px]'>
			{/* Mobile: Photo on top */}
			<div className='mb-8 md:hidden'>
				<div className='relative aspect-[4/5] w-full overflow-hidden rounded-2xl'>
					<Image src='/profile.jpg' alt='Profile photo' fill className='object-cover' priority />
				</div>
			</div>

			{/* Two-column layout */}
			<div className='flex flex-col gap-10 md:flex-row md:gap-16'>
				{/* Left Column - Heading + Text */}
				<div className='flex-1'>
					<h1 className='mb-8 font-bold text-[32px] text-foreground leading-[1.15] tracking-tight md:text-5xl'>
						I'm Raposo, a software engineer student based in Utah. I have a passion for building products that solve real-world
						problems.
					</h1>

					<div className='space-y-6 text-base text-zinc-600 leading-7 dark:text-zinc-400'>
						<p>
							I am student at Ensign college, where I am pursuing a degree in software engineering. I have a passion for
							building products that solve real-world problems. I have experience working with a variety of technologies,
							including React, Node.js, Python, Javascript, HTMl and CSS. I am always looking for new opportunities to learn and
							grow as a developer.
						</p>
						<p>
							Besides coding, I enjoy sports, making money, helping others, and spending time with my family. I am also a big
							fan of video games, and I enjoy playing them in my free time.
						</p>
						<p>
							I love learning new technologies and staying up-to-date with the latest trends in the industry. I am always
							looking for new opportunities to learn and grow as a developer. I am also passionate about open source and enjoy
							contributing to projects that I find interesting.
						</p>
						<p>
							I love learning how to cook new recipes, and I enjoy trying out new foods. I am also a big fan of traveling, and I
							enjoy exploring new places and cultures. I am always looking for new opportunities to learn and grow as a person.
						</p>
					</div>
				</div>

				{/* Right Column - Photo (desktop) + Social Links */}
				<div className='w-full flex-shrink-0 md:w-[380px]'>
					{/* Desktop Photo */}
					<div className='mb-8 hidden md:block'>
						<div className='relative aspect-[4/5] w-full overflow-hidden rounded-2xl'>
							<Image src='/WhatsApp image (1).jpeg' alt='Profile photo' fill className='object-cover' priority />
						</div>
					</div>

					{/* Social Links */}
					<div className='space-y-4 text-zinc-800 dark:text-zinc-300'>
						<Link
							href='#'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/X.svg' alt='X' width={20} height={20} className='dark:invert' />
							<span>Follow me on X</span>
						</Link>

						<Link
							href='#'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/GitHub.svg' alt='GitHub' width={20} height={20} className='dark:invert' />
							<span>Follow me on Github</span>
						</Link>

						<Link
							href='#'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/LinkedIn.svg' alt='LinkedIn' width={20} height={20} className='dark:invert' />
							<span>Follow me on LinkedIn</span>
						</Link>
						<div className='w-fit'>
							{/* Divider */}
							<div className='my-2 mt-8 border-zinc-100 border-t dark:border-zinc-300' />

							{/* Email */}
							<Link
								href='mailto:yfr421@ensigncollege.edu'
								className='mt-8 flex items-center gap-3 text-sm text-zinc-800 transition-colors hover:text-foreground dark:text-zinc-300'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5'
								>
									<rect width='20' height='16' x='2' y='4' rx='2' />
									<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
								</svg>
								<span>yfr421@ensigncollege.edu</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Intro() {
	return (
		<section className='flex max-w-2xl flex-col gap-6 p-6'>
			{/* Profile image */}
			<div>
				<Image
					src='/WhatsApp Image.jpeg' // replace with your image path
					alt='Profile picture'
					width={56}
					height={56}
					className='rounded-full'
				/>
			</div>

			{/* Heading */}
			<h1 className='font-bold text-5xl leading-tight'>Software engineer, Athlete, and God fearing man</h1>

			{/* Description */}
			<p className='text-base text-gray-600 leading-relaxed dark:text-zinc-400'>
				My name is Yuri Raposo, I am a freshman at Ensign college, majoring in Software Engineering. I have a passion for learning and creating, and I am always looking for new opportunities to grow and develop my skills. I am currently seeking internships and entry-level positions in the software engineering field, where I can apply my knowledge and gain valuable experience.
			</p>

			{/* Social links */}
			<div className='flex gap-4 text-gray-600'>
				<Link href='#' className='hover:opacity-70'>
					<Image src='/X.svg' alt='X (Twitter)' width={24} height={24} />
				</Link>
				<Link href='https://github.com/YuriRaposo' className='hover:opacity-70'>
					<Image src='/GitHub.svg' alt='GitHub' width={24} height={24} />
				</Link>
				<Link href='https://www.linkedin.com/in/yuri-raposo-372k' className='hover:opacity-70'>
					<Image src='/LinkedIn.svg' alt='LinkedIn' width={24} height={24} />
				</Link>
			</div>
		</section>
	);
}

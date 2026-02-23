'use client';

import { useEffect, useState } from 'react';

export default function Projects(): JSX.Element {
	const [darkMode, setDarkMode] = useState(false);

	// Load saved theme preference
	useEffect(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') setDarkMode(true);
	}, []);

	// Apply dark mode to the <html> element
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const projects = [
		{
			img: <img src='/icons/logo.svg' alt='Company Logo' className='mb-4 h-12 w-12' />,
			title: 'youtube-clone',
			description: 'A YouTube clone built with HTML and CSS.',
			link: 'https://github.com/yourusername/youtube-clone',
		},
		{
			img: <img src='/icons/logo.svg' alt='Company Logo' className='mb-4 h-12 w-12' />,
			title: 'Counting machine',
			description: 'A counting machine built with HTML and CSS.',
			link: 'https://github.com/yourusername/counting-machine',
		},
		{
			img: <img src='/icons/logo.svg' alt='Company Logo' className='mb-4 h-12 w-12' />,
			title: 'Time table',
			description: 'A time table app built with HTML,JavaScript and CSS.',
			link: 'https://github.com/yourusername/time-table',
		},
		{
			img: <img src='/icons/logo.svg' alt='Company Logo' className='mb-4 h-12 w-12' />,
			title: 'Portfolio Website',
			description: 'My personal website showcasing my skills and work.',
			link: 'https://github.com/yourusername/portfolio-website',
		},
		{
			img: <img src='/icons/logo.svg' alt='Portfolio Logo' className='mb-4 h-12 w-12' />,
			title: 'Portfolio Website',
			description: 'My personal website showcasing my skills and work.',
			link: 'https://yourportfolio.com',
		},
		
	];

	return (
		<main className='min-h-screen px-6 py-12 transition-colors duration-300 md:px-24 dark:bg-zinc-900'>
			{/* ---------------------- */}
			{/*        HERO SECTION     */}
			{/* ---------------------- */}
			<section className='max-w-3xl pt-4'>
				<h1 className='font-semibold text-5xl text-zinc-900 tracking-tight dark:text-zinc-100'>
					Things I’ve built so far!
				</h1>

				<p className='mt-4 text-lg text-zinc-600 leading-7 dark:text-zinc-400'>
					Here are some of the projects I’ve worked on. I’m always looking for new opportunities to build cool projects, so if you have an idea or want to collaborate, feel free to reach out!
				</p>
			</section>

			{/* ---------------------- */}
			{/*      PROJECTS GRID     */}
			{/* ---------------------- */}
			<section className= 'mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800'
					>
						{/* IMAGE ON TOP */}
						{project.img && <div className='mb-4'>{project.img}</div>}

						<h2 className='font-semibold text-xl text-zinc-900 dark:text-zinc-100'>{project.title}</h2>

						<p className= 'mt-2 text-zinc-600 dark:text-zinc-300'>{project.description}</p>

						<a
							href={project.link}
							target='_blank'
							rel='noopener noreferrer'
							className='mt-4 inline-block font-medium text-teal-600 hover:underline dark:text-teal-400'
						>
							View Project →
						</a>
					</div>
				))}
			</section>
		</main>
	);
}

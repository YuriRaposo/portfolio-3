'use client';

import { ArticleCard } from '@/components/ArticleCard';
import { Intro } from '@/components/Intro';
import { SignupWidget } from '@/components/SignUp';
import { SkillsWidget } from '@/components/SkillsWidget';
import { WorkWidget } from '@/components/WorkWidget';

const experiences = [
	
	{
		logo: '/icons/OIP.jpg',
		organization: 'Ensign College',
		jobTitle: 'Software Engineering Student',
		startYear: 2025,
		endYear: null,
	},
];

export default function Page() {
	return (
		<main className='mx-auto flex max-w-[1280px] flex-col gap-6 px-4 pt-6 pb-16 lg:px-[144px]'>
			<Intro />
			<div className='flex flex-col gap-6 lg:w-full lg:flex-row lg:items-start lg:justify-between'>
				<div className='space-y-8 lg:flex-1 dark:text-zinc-400'>
					<ArticleCard
						date='2026-2-19'
						title='portfolio website'
						description='My portfolio website built with Next.js and Tailwind CSS.'
						url='/articles/sample-article'
					/>
					<ArticleCard
						date='2026-1-25'
						title='youtube clone'
						description='My youtube clone built with html, Javascript and CSS.'
						url='/articles/sample-article'
					/>
					<ArticleCard
						date='2026-01-15'
						title='Counting machine'
						description='My counting machine built with html, Javascript and CSS.'
						url='/articles/sample-article'
					/>
				</div>

				{/*  SIGNUP COLUMN  */}
				<div className='flex flex-col gap-6'>
					{/* SIGNUP WIDGET */}
					<SignupWidget
						title={'Stay up to date'}
						content={'Get notified when I publish something new, and unsubscribe at any time.'}
					/>

					<WorkWidget
						title={'Work'}
						content={'My work experience includes positions at the following:'}
						experiences={experiences}
					/>
					<SkillsWidget
						title={'Skills'}
						content={'My skills include:'}
						skills={[
							{ icon: '/icons/html.svg', name: 'HTML', proficiency: 85 },
							{ icon: '/icons/css.svg', name: 'CSS', proficiency: 65 },
							{ icon: '/icons/js.svg', name: 'JavaScript', proficiency: 40 },
						]}
					/>
				</div>
			</div>
		</main>
	);
}

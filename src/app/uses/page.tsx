import UsesItem from '@/components/UsesItem';
import UsesSection from '@/components/UsesSection';

export default function Uses() {
	return (
		<main className='min-h-screen px-6 py-16 md:px-24'>
			<div className='mx-auto max-w-6xl'>
				{/* Intro */}
				<section className='flex max-w-[672px] flex-col gap-6'>
					<h1 className='font-bold text-5xl text-foreground leading-tight tracking-tight'>
						Software I use, gadgets I love, and other things I recommend.
					</h1>

					<p className='text-base text-zinc-600 leading-relaxed dark:text-zinc-400'>
						This is a list of the software and hardware I use on a daily basis. It&apos;s not an exhaustive list, but it&apos;s a good starting point if you&apos;re looking for recommendations.
					</p>
				</section>

				{/* Content */}
				<section className='mt-20 space-y-20'>
					{/* Workstation */}
					<UsesSection title='Workstation'>
						<UsesItem
							title='Laptop'
							description='Asus vivobook flips 14, 16gb ram, 512gb ssd, i7-1255U processor. I use this laptop for all my work and personal projects. It has a great balance of performance and portability, and it can handle everything I throw at it.'
						/>
						<UsesItem
							title='logitech mouse'
							description='Logitech  mouse. I use this mouse for all my work and personal projects. It has a great balance of performance and portability, and it can handle everything I throw at it.'
						/>
						<UsesItem
							title='HP monitor'
							description='HP 24" monitor with 1080p resolution. I use this monitor for all my work and personal projects. It has a great display quality and is very easy to set up.'
						/>
						<UsesItem
							title='Portable monitor'
							description='A portable monitor that I use when I travel or work remotely. It has a 15.6" screen with 1080p resolution and is very lightweight.'
						/>
						<UsesItem
							title='Type-C cable'
							description='A high-quality Type-C cable that I use to connect my devices. It is very reliable and fast, and it supports all my devices.'
						/>
					</UsesSection>

					{/* Development tools */}
					<UsesSection title='Development tools'>
						<UsesItem
							title='VsCode'
							description='Visual Studio Code is a free and open-source code editor that I use for all my development projects. It has a great user interface, supports a wide range of programming languages, and has a rich ecosystem of extensions.'
						/>
						<UsesItem
							title='ChatGPT'
							description='ChatGPT is an AI-powered chatbot that I use to help me with coding and other tasks. It is very helpful and easy to use.'
						/>
						<UsesItem
							title='Claude'
							description='Claude is an AI assistant that I use to help me with writing and other tasks. It is very helpful and easy to use.'
						/>
					</UsesSection>

					{/* Design */}
					<UsesSection title='Design'>
						<UsesItem
							title='Whimsical'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Figma'
							description='We initially adopted Figma primarily as a design tool, but it has evolved into our virtual whiteboard that serves the entire company. The unexpected allure turned out to be the powerful collaboration features it offers.'
						/>
					</UsesSection>

					{/* Productivity */}
					<UsesSection title='Productivity'>
						<UsesItem
							title='Notion'
							description='Notion is a productivity tool that I use to organize my thoughts, tasks, and projects. It is very flexible and allows me to create custom workflows that suit my needs.'
						/>
						<UsesItem
							title='Google Calendar'
							description='Google Calendar is a calendar application that I use to organize my schedule and events. It is very easy to use and integrates well with other Google services.'
						/>
						<UsesItem
							title='Google Docs'
							description='Google Docs is a word processing application that I use to create and edit documents. It is very easy to use and allows for real-time collaboration.'
						/>
						<UsesItem
							title='Google Sheets'
							description='Google Sheets is a spreadsheet application that I use to create and edit spreadsheets. It is very easy to use and allows for real-time collaboration.'
						/>
					</UsesSection>
				</section>
			</div>
		</main>
	);
}

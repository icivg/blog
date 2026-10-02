// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Set this to your deployed URL (used for sitemap and canonical links).
	site: 'https://iremcivginer.com',
	integrations: [
		starlight({
			title: 'Irem Civginer',
			description: 'Embedded systems and software projects by Irem Civginer.',
			social: [
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/irem-civginer-a441b6376/' },
				{ icon: 'email', label: 'Contact', href: '/about/#contact' },
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				PageTitle: './src/components/PageTitle.astro',
				Hero: './src/components/Hero.astro',
			},
			lastUpdated: true,
			pagefind: false,
			sidebar: [
				{ label: 'About me', slug: 'about' },
				{
					label: 'Projects',
					items: [{ autogenerate: { directory: 'projects' } }],
				},
			],
		}),
	],
});

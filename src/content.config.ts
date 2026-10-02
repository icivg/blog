import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			// Extra frontmatter used by project pages (src/content/docs/projects/*).
			// All optional so regular docs pages still validate.
			extend: ({ image }) =>
				z.object({
					cover: image().optional(),
					period: z.string().optional(),
					award: z.string().optional(),
					date: z.coerce.date().optional(),
					status: z.enum(['active', 'completed', 'archived', 'wip']).optional(),
					repo: z.string().url().optional(),
					demo: z.string().url().optional(),
					stack: z.array(z.string()).default([]),
					featured: z.boolean().default(false),
				}),
		}),
	}),
};

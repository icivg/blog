import { getCollection, type CollectionEntry } from 'astro:content';

export type Entry = CollectionEntry<'docs'>;

const byDateDesc = (a: Entry, b: Entry) =>
	(b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0);

/** All entries inside a docs subfolder (e.g. "projects"), excluding the folder's index page, newest first. */
async function getSection(section: string) {
	const entries = await getCollection(
		'docs',
		({ id, data }) => id.startsWith(`${section}/`) && !data.draft
	);
	return entries.sort(byDateDesc);
}

export const getProjects = () => getSection('projects');

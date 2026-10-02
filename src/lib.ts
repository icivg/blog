import { getCollection, type CollectionEntry } from 'astro:content';

export type Entry = CollectionEntry<'docs'>;

// Explicit `sidebar.order` first (lower = earlier), then newest first.
const byOrderThenDate = (a: Entry, b: Entry) =>
	(a.data.sidebar.order ?? Infinity) - (b.data.sidebar.order ?? Infinity) ||
	(b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0);

/** All entries inside a docs subfolder (e.g. "projects"), sorted by `sidebar.order`, then newest first. */
async function getSection(section: string) {
	const entries = await getCollection(
		'docs',
		({ id, data }) => id.startsWith(`${section}/`) && !data.draft
	);
	return entries.sort(byOrderThenDate);
}

export const getProjects = () => getSection('projects');

// place files you want to import through the `$lib` alias in this folder.
export const slugFromPath = (path) =>
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const dateLine = (date) =>
	new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
	}).format(new Date(date))
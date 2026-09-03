export function getProjectImages(folderName?: string): string[] {
  if (!folderName) return [];

  // Eagerly load all image files from the projects directory.
  // The query `?url` ensures Vite returns the resolved asset URL.
  const allImages = import.meta.glob("/src/assets/projects/**/*.{png,jpg,jpeg,webp,gif}", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const matches: string[] = [];

  // Filter the images that belong to the specified folderName
  for (const path in allImages) {
    if (path.includes(`/src/assets/projects/${folderName}/`)) {
      matches.push(allImages[path] as string);
    }
  }

  // Sort alphabetically so they appear in a predictable order (e.g. 01.jpg, 02.jpg)
  return matches.sort();
}

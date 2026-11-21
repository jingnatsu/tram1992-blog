export function PostTags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-base text-brand" aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag}>#{tag}</li>
      ))}
    </ul>
  );
}

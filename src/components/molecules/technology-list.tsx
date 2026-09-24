interface TechnologyListProps {
  readonly technologies: readonly string[];
}

export function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <ul className="technology-list" aria-label="Verwendete Technologien">
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

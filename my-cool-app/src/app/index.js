// index.js
import resources from './src/resources';

function HomePage() {
  return (
    <div>
      <h1>Ressursarkiv</h1>
      {resources.map(resource => (
        <div key={resource.url}>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            {resource.title}
          </a>
          </div>
      ))}
    </div>
  );
}

export default HomePage;
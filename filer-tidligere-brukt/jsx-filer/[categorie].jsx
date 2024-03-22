
import React from 'react';
import resource from './ressurser';
import ResourcesComponent from './[category].jsx';

export async function getStaticPaths() {
  //Definering av stier som skal pre-rendres based by kategorier
  const paths = resource.map((resources) => ({
    params: { category: ressurs.category },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Filtrer ressurser basert på kategori 
  const categoryResources = ressurser.filter(
    (ressurs) => ressurs.category === params.category
  );

  return {
    props: {
      category: params.category,
      resources: categoryResources,
    },
  };
}

const ressurser = ({ category, resources }) => {
  return (
    <div>
      <h1>Ressursarkiv for {category}</h1>
      <ul>
        {ressurser.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {ressurser.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Resources = ({ category, resources }) => {
  // Rendrer ressursene for bestemt kategori
  return (
    <div>
      <h1>Ressursarkiv for {category}</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


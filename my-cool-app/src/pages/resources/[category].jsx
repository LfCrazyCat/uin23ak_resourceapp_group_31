// app/resources/[category]
import React from 'react';
import resources from './ressurser';
import styles from '../../app/styles/page.module.scss';


export async function getStaticPaths() {
  console.log('Logging resources in getStaticPaths:', resources);
  const paths = resources.map(resource => ({
    params: { category: resource.category },
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log('Params in getStaticProps:', params);
  const categoryResources = resources.filter(resource => resource.category === params.category);
  console.log(`Resources for category ${params.category}:`, categoryResources);

  return {
    props: {
      category: params.category,
      resources: categoryResources,
    },
  };
}

export default function ResourcesPage({ category, resources }) {
  console.log(`Rendering ResourcesPage for category ${category} with resources:`, resources);
  return (
    // Style for routing sidene 
    <div className={styles.container}> 
      <h1>Ressurser for {category}</h1>
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

 // Måtte legge inn console.log for å passe på at deler av filen blir lastet opp etter
 // jeg fikk masse error brått og kunne se nærmere på problemet.. . 


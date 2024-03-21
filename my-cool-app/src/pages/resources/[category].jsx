// app/resources/[category]
import React from 'react';
import resources from '../../pages/resources/ressurser';
import styles from '../../app/styles/page.module.scss';


export async function getStaticPaths() {
  const paths = resources.map(resource => ({
    params: { category: resource.category },
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const categoryResources = resources.filter(resource => resource.category === params.category);

  return {
    props: {
      category: params.category,
      resources: categoryResources,
    },
  };
}

export default function ResourcesPage({ category, resources }) {
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
}





// src/pages/resources/[category].jsx
import React from 'react';


const Resources = ({ category, resources }) => {
  return (
    <div>
    <h1>Ressursarkiv for {category}</h1>
    <ul>
      {resources.map((resource, index) => (
        <li key={index}>{resource.title}: {resource.url}</li>
      ))}
    </ul>
  </div>
  );
 };

 export default Resources;






 
{ /* 
Noe problemer med importen her, så kommenterer bort 
import ResourcesComponent from './resources/resources.jsx';*/ }
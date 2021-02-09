// Vendor libs
import React from 'react';

// Members
const b = {
  name: 'Adidas',
  slug: 'adidas',
  locales: [
    {
      lang: 'es',
      shortText: 'Texto corto ES',
      description: 'Descripción de Adidas',
    },
    {
      lang: 'en',
      shortText: 'Short text',
      description: 'Adidas brand description',
    },
    {
      lang: 'fr',
      shortText: 'Texte court Adidas',
      description: 'Description de la marque Adidas',
    },
  ],
};

// Component definition
const HomePage = ({ brand = b }) => {
  return (
    <>
      <h4>{brand.name}</h4>
    </>
  );
};

// Exportation
export default HomePage;

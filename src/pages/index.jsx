// Vendor libs
import React, { useState } from 'react';

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

// Components
import BrandForm from '../components/brands/BrandForm';

// Component definition
const HomePage = ({ brand = b }) => {
  // Component state
  const [currentBrand, setCurrentBrand] = useState(brand);

  function handleBrandChanged(b) {
    setCurrentBrand({ ...currentBrand, ...b });
  }

  return (
    <>
      <h4>{currentBrand.name}</h4>
      <BrandForm brand={currentBrand} onBrandChanged={handleBrandChanged} />
      <button type='button' onClick={(e) => console.log({ ...currentBrand })}>
        Save
      </button>
    </>
  );
};

// Exportation
export default HomePage;

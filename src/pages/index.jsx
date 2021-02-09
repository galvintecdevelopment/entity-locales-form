// Vendor libs
import React, { useState } from 'react';

// Data
import { brand as b } from '../data/brand';

// Components
import BrandForm from '../components/brand/BrandForm';

// Component definition
const HomePage = ({ brand = b }) => {
  // Component state
  const [currentBrand, setCurrentBrand] = useState(brand);

  // Event handlers
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

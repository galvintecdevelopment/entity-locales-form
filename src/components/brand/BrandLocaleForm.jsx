// Vendor libs
import React from 'react';

// Component definition
const BrandLocaleForm = ({ brandLocale, onBrandLocaleChanged }) => {
  return (
    <>
      {/* Lang */}
      <div>
        <h4>{brandLocale.lang}</h4>
      </div>

      {/* Short text */}
      <div>
        <label>Short text</label>
        <input
          type='text'
          value={brandLocale.shortText}
          onChange={(e) =>
            onBrandLocaleChanged({
              ...brandLocale,
              shortText: e.target.value,
            })
          }
        />
      </div>

      {/* Description */}
      <div>
        <label>Description</label>
        <input
          type='text'
          value={brandLocale.description}
          onChange={(e) =>
            onBrandLocaleChanged({
              ...brandLocale,
              description: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};

// Exportation
export default BrandLocaleForm;

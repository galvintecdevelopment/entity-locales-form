// Vendor libs
import React from 'react';

// Component definition
const CategoryLocaleForm = ({ categoryLocale, onBrandLocaleChanged }) => {
  <>
    {/* Lang */}
    <div>
      <h4>{brandLocale.lang}</h4>
    </div>

    {/* Name text */}
    <div>
      <label>Name</label>
      <input
        type='text'
        value={brandLocale.name}
        onChange={(e) =>
          onBrandLocaleChanged({
            ...brandLocale,
            name: e.target.value,
          })
        }
      />
    </div>

    {/* Slug text */}
    <div>
      <label>Slug</label>
      <input
        type='text'
        value={brandLocale.Slug}
        onChange={(e) =>
          onBrandLocaleChanged({
            ...brandLocale,
            slug: e.target.value,
          })
        }
      />
    </div>
  </>;
};

// Exportation
export default CategoryLocaleForm;

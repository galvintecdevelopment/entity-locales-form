// Vendor libs
import React, { useState } from 'react';

// Components
import BrandLocaleForm from './BrandLocaleForm';
import LangSelector from '../shared/LangSelector';

// Component definition
const BrandForm = ({ brand, onBrandChanged }) => {
  // Component state
  const [lang, setLang] = useState(brand.locales[0].lang);

  // Members
  const availableLangs = brand.locales.map((bl) => bl.lang);

  // Event handlers
  function handleBrandLocaleChanged(currentBrandLocale) {
    // Extract currentBrandLocale from existenting brandLocales
    const filteredBrandLocale = brand.locales.filter(
      (x) => x.lang !== currentBrandLocale.lang
    );

    // Merge currentBrandLocale with the others locales
    const mergedLocales = [...filteredBrandLocale, currentBrandLocale];

    // Set locales order (same of available langs)
    const locales = availableLangs.map((l) =>
      mergedLocales.find((x) => x.lang === l)
    );
    onBrandChanged({
      ...brand,
      locales,
    });
  }

  return (
    <>
      <form noValidate>
        {/* Name */}
        <div>
          <label>Name</label>
          <input
            type='text'
            value={brand.name}
            onChange={(e) => onBrandChanged({ ...brand, name: e.target.value })}
          />
        </div>

        {/* Slug */}
        <div>
          <label>Slug</label>
          <input
            type='text'
            value={brand.slug}
            onChange={(e) => onBrandChanged({ ...brand, slug: e.target.value })}
          />
        </div>

        <h3>Locales {lang}</h3>
        <hr />
        <LangSelector
          currentLang={lang}
          availableLangs={availableLangs}
          onLangChanged={(l) => setLang(l)}
        />

        {/* Locales */}
        {brand &&
          brand.locales &&
          brand.locales.map((bl) => {
            if (bl.lang === lang) {
              return (
                <BrandLocaleForm
                  key={bl.lang}
                  brandLocale={bl}
                  onBrandLocaleChanged={handleBrandLocaleChanged}
                />
              );
            }
          })}
      </form>
    </>
  );
};

// Exportation
export default BrandForm;

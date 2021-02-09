// Vendor libs
import React from 'react';
import { useFormik } from 'formik';

// Load data
import { category } from '../data/category';

// Component
import CategoryForm from '../components/category/CategoryForm';

// Component definition
const Category = () => {
  function formSubmitHandler(values) {
    console.log(JSON.stringify(values, null, 2));
  }

  return (
    <>
      <h3>Category edit</h3>
      <CategoryForm category={category} onFormSubmit={formSubmitHandler} />
    </>
  );
};

// Exportation
export default Category;

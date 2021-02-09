// Vendor libs
import React from 'react';
import { Formik, FieldArray, Form } from 'formik';
import * as Yup from 'yup';

// Component definition
const CategoryForm = ({ category, onFormSubmit }) => {
  console.log({ category });
  return (
    <Formik
      initialValues={{
        name: category?.name || '',
        position: category?.position || 0,
        locales: category?.locales || [],
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3)
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        position: Yup.number().min(1).max(10000).required('Required'),
      })}
      onSubmit={onFormSubmit}
    >
      {({
        errors,
        values,
        touched,
        handleChange,
        handleBlur,
        setValues,
        getFieldProps,
      }) => (
        <Form>
          {/* Name */}
          <div>
            <label>Name</label>
            <input
              id='name'
              name='name'
              type='text'
              {...getFieldProps('name')}
            />
            {touched.name && errors.name ? <div>{errors.name}</div> : null}
          </div>

          {/* Position */}
          <div>
            <label>Position</label>
            <input
              id='position'
              name='position'
              type='text'
              {...getFieldProps('position')}
            />
            {touched.position && errors.position ? (
              <div>{errors.position}</div>
            ) : null}
          </div>

          <div>
            <button type='submit'>Aceptar</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

// Exportation
export default CategoryForm;

// Vendor libs
import React from 'react';
import { Formik, FieldArray, Form } from 'formik';
import * as Yup from 'yup';

// Custom libs
import { categoryUpdateSchema } from '../../yup/category';

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
      validationSchema={categoryUpdateSchema}
      onBlur={(e) => console.log(e)}
      onSubmit={onFormSubmit}
    >
      {({ isValid, errors, values, dirty, touched, getFieldProps }) => (
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

          {/* Locales */}
          <FieldArray name='locales'>
            {() =>
              values.locales.map((locale, i) => {
                const localeError =
                  (errors.locales?.length && errors.locales[i]) || {};
                const localeTouched =
                  (touched.locales?.length && touched.locales[i]) || {};

                return (
                  <div key={i}>
                    <h5>Locale {i + 1}</h5>
                    <div>
                      <label>Name</label>
                      <input
                        type='text'
                        id={`locales.${i}.name`}
                        name={`locales.${i}.name`}
                        {...getFieldProps(`locales.${i}.name`)}
                      />
                      {localeError.name && localeTouched.name && (
                        <div>{localeError.name}</div>
                      )}
                    </div>

                    <div>
                      <label>Slug</label>
                      <input
                        type='text'
                        id={`locales.${i}.slug`}
                        name={`locales.${i}.slug`}
                        {...getFieldProps(`locales.${i}.slug`)}
                      />
                      {localeError.slug && localeTouched.slug && (
                        <div>{localeError.slug}</div>
                      )}
                    </div>
                  </div>
                );
              })
            }
          </FieldArray>

          {!isValid && dirty && (
            <div style={{ color: 'red' }}>
              <h3>Hay errores</h3>
              <div>{JSON.stringify(errors, 2, null)}</div>
            </div>
          )}

          <div>
            <button disabled={!(dirty && isValid)} type='submit'>
              Aceptar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

// Exportation
export default CategoryForm;

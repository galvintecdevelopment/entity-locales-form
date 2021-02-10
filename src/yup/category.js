// Vendor libs
import * as yup from 'yup';

const regexp = {
  OBJECT_ID: '^[0-9a-fA-F]{24}$',
};

const enums = {
  LANGUAGES: ['es', 'en', 'de', 'it', 'fr', 'pt', 'ca', 'gl', 'eu'],
};

export const categoryUpdateSchema = yup.object().shape({
  name: yup.string().required().min(3).max(255),
  position: yup.number().required().min(1).max(10000),
  locales: yup.array().of(
    yup.object().shape({
      lang: yup.mixed().required().oneOf(enums.LANGUAGES).required(),
      name: yup.string().required('Required').min(3),
      slug: yup.string(),
    })
  ),
});

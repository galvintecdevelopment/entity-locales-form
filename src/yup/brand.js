// Vendor libs
import * as yup from 'yup';

const regexp = {
  OBJECT_ID: '^[0-9a-fA-F]{24}$',
};

const enums = {
  LANGUAGES: ['es', 'en', 'de', 'it', 'fr', 'pt', 'ca', 'gl', 'eu'],
};

export const updateBrandSchema = yup.object().shape({
  id: yup.string().required().matches(regexp.OBJECT_ID),
  name: yup.string().required().min(3).max(255),
  slug: yup.string().min(3).max(255),
  locales: yup
    .array()
    .of(
      yup.object().shape({
        lang: yup.mixed().required().oneOf(enums.LANGUAGES).required(),
        shortText: yup.string(),
        description: yup.string(),
      })
    )
    .required(),
});

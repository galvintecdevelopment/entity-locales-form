// Vendor libs
import * as yup from 'yup';

export const categoryUpdateSchema = yup.object().shape({
  name: yup.string().required().min(3).max(255),
  position: yup.number().required().min(1).max(10000),
});

import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string()
        .email()
        .required(),
    message: yup.string()
        .min(2)
        .required()
});
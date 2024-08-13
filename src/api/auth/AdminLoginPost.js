import { Axios } from '../Axios';

export const AdminLoginPost = async (data, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;
  await Axios.post('/admin/auth/login', data)
    .then(() => {
      navigateSuccess();
    })
    .catch((error) => {
      const errorMessage = error.response?.data?.message;
      navigateError(errorMessage);
    });
};

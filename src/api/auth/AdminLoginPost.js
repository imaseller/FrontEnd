import { Axios } from '../Axios';
import Cookies from 'js-cookie';

export const AdminLoginPost = async (data, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;

  try {
    const response = await Axios.post('/admin/auth/login', {
      id: data.email,
      password: data.password,
    });

    const accessToken = response.data.accessToken;

    // 쿠키에 accessToken 저장
    Cookies.set('accessToken', accessToken, { expires: 7, path: '/' });

    // 로그인 성공 시 navigateSuccess 호출
    navigateSuccess();
  } catch (error) {
    let errorMessage = '로그인에 실패했습니다.';
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = '잘못된 자격 증명입니다.';
      } else if (error.response.status === 403) {
        errorMessage = '계정이 차단되었습니다.';
      }
    }
    navigateError(errorMessage);
  }
};

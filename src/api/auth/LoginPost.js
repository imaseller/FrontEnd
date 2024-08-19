import { Axios } from '../Axios';

/**
 * @param {string} email - 사용자 이메일
 * @param {string} password - 사용자 비밀번호
 * @returns {Promise<Object>} - 로그인 성공 시 액세스 토큰 반환, 실패 시 에러 메시지 반환
 */
export const LoginPost = async (email, password) => {
  try {
    const response = await Axios.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

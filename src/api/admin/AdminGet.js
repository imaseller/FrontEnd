import { Axios } from '../Axios';

export const AdminGet = async (page = 1, limit = 10) => {
  try {
    const response = await Axios.get('/admin', {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching admin list:', error);
    throw error;
  }
};

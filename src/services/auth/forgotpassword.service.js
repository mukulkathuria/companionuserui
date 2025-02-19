export const forgotEmail = async (formdata) => {
  const { BASEURL } = await import('../../Constants/services.constants');
  const {
    default: { post }
  } = await import('../interface/interceptor');
  try {
    const url = BASEURL + '/auth/forgot-password';
    const { data } = await post(url, formdata);
    return { data };
  } catch (error) {
    console.log(error.response);
    if (error.response?.status >= 400)
      return { error: error.response.data.message };
    return { error: 'Something went wrong' };
  }
};

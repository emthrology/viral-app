export const useApi = (endpoint) => {
  const responseData = ref(null);
  const error = ref(null);
  const isLoading = ref(false);
  const methods = ['GET', 'POST', 'PUT', 'DELETE'];
  const fetchData = async (method, params = {}) => {
    isLoading.value = true;
    error.value = null;

    try {
      const targetMethod = methods.find((m) => m === method);
      let url = endpoint;

      // GET 요청일 경우 query parameters 추가
      if (targetMethod === 'GET') {
        const queryParams = new URLSearchParams(params).toString();
        url += `?${queryParams}`;
      }
      const response = await fetch(url, {
        method: targetMethod,
        headers: { 'Content-Type': 'application/json' },
        ...(targetMethod !== 'GET' && { body: JSON.stringify(params) }),
      });
      if (!response.ok) throw new Error('API Error');
      responseData.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  return { responseData, error, isLoading, fetchData };
};

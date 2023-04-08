export const handleApiCall = async (
  apiCall,
  rejectWithValue,
  successCallback,
  errorCallback
) => {
  try {
    const response = await apiCall();
    successCallback && successCallback();

    return response?.data || response;
  } catch (e) {
    errorCallback && errorCallback();

    return rejectWithValue({
      message: e?.response?.data?.message,
      status: e?.response?.status,
      statusText: e?.response?.statusText,
      error: e?.response?.data?.errors,
    });
  }
};

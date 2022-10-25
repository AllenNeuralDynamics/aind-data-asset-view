const getResponse = async (url) => {
  const response = await fetch(url)
    .catch(() => {
    // handleErrors(error);
      if (!response.ok) {
        throw new Error(response.status);
      } return response;
    });
  const data = await response.json();
  // setSchema(data.results);
  return data;
};

export default getResponse;

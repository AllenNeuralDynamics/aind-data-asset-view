const urlBuilder = (urlString, userInput, queryParam) => {
  const urlProxy = new URL(urlString);

  if (userInput) {
    Object.entries(userInput).forEach(([key, value]) => {
      if (!(key === 'type' && value.toLowerCase() === 'both')) {
        urlProxy.searchParams.append(key, value.toLowerCase());
      }
    });
  }
  
  if (queryParam) {
    Object.entries(queryParam).forEach(([key, value]) => {
      if (key === 'query') {
        urlProxy.searchParams.append(key, value.toLowerCase());
      }
    });
  }

  return urlProxy.toString();
};

export default urlBuilder;

const urlBuilder = (urlString, userInput, queryParam) => {
  /**
   * Function to read in a url and user input from dropdown menu and query search, then
   * create and return a completed query string.
   * @returns {string} Query string for GET request to the Code Ocean API
   */

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

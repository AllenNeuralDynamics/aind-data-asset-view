export const urlBuilder = (urlString, userInput) => {
  const urlProxy = new URL(urlString);
  const queryParams = new URLSearchParams(urlProxy.search);
  for (const key in userInput) {
    if (userInput[key] !== undefined) {
      queryParams.append(key, userInput[key].toLowerCase());
    }
  }
  urlProxy.search = queryParams.toString();
  return urlProxy.toString();
};

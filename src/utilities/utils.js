export const urlBuilder = (urlString, userInput) => {
  const urlProxy = new URL(urlString);

  Object.entries(userInput).forEach(([key, value]) => {
    urlProxy.searchParams.append(key, value)
  })
  
  return urlProxy.toString();
};

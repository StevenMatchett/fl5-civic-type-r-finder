export function getQueryParams() {
    // Get the current URL
    let url = window.location.href;
  
    // Get the part of the URL after the '?' character
    let queryString = url.split('?')[1];
  
    // If there are no query parameters, return an empty object
    if (!queryString) {
      return {};
    }
  
    // Split the query string on the '&' character to get individual query parameters
    let queryParams = queryString.split('&');
  
    // Create an object to store the query parameters
    let queryParamsObject = {};
  
    // Loop through the query parameters
    for (let i = 0; i < queryParams.length; i++) {
      // Split each query parameter on the '=' character to get the key and value
      let [key, value] = queryParams[i].split('=');
  
      // Add the key and value to the object
      queryParamsObject[key] = value;
    }
  
    return queryParamsObject;
  }
  
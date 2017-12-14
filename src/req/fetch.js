import baseUrl from './env';

export default async (router = '', data = {}, method = 'GET', type = 'json') => {
  const reqMethod = method.toUpperCase();
  const reqUrl = baseUrl + router;
  const requestConfig = {
    method: reqMethod,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (type === 'json') {
    if (method === 'POST' || method === 'PUT') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data),
      });
    }
  }

  let responseJson = {};
  let response;
  try {
    response = await fetch(reqUrl, requestConfig);
    responseJson = await response.json();
  } catch (error) {
    /* if response body is null, it will catch error */
    /* eslint no-empty: "error" */
  }
  return new Promise((resolve, reject) => {
    if (response.status === 200) {
      resolve(responseJson);
    } else {
      reject(responseJson);
    }
  });
};

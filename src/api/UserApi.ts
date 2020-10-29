const routes = {
    fetchUsers: () => '/users'
}
const API_URL =  'https://jsonplaceholder.typicode.com';

export const apiCall = <T>(): Promise<T> => {
  return fetch(API_URL + routes.fetchUsers())
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  })
  .then(data => {
    return data;
  })
  .catch((error: Error) => {
    console.error(error);
    throw error;
  });
};
const routes = {
    fetchUsers: () => '/users'
}

export const apiCall = <T>(API_URL: string): Promise<T> => {
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
        // tslint:disable-next-line: no-console
        console.error(error);
        throw error;
      });
  };
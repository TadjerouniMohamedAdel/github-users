export const fetchUsers = (search: string) =>
  fetch(`https://api.github.com/search/users?q=${search}`)
    .then((response) => response.json())
    .then((data) => data);

export const fetchUser = (login: string) =>
  fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then((data) => data);

export const fetchRepositories = (login: string) =>
  fetch(`https://api.github.com/users/${login}/repos`)
    .then((response) => response.json())
    .then((data) => data);

export const fetchUsers = (search: string) =>
  fetch(`https://api.github.com/search/users?q=${search}`)
    .then((response) => response.json())
    .then((data) => data);

export const fetchUsers2 = (search: string) =>
  fetch(`https://api.github.com/search/users?q=${search}`)
    .then((response) => response.json())
    .then((data) => data);

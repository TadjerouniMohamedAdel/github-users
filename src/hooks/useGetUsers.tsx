import { useQuery } from 'react-query';
import { fetchUsers } from './services';

const useGetUsers = (search: string) => {
  const { data, ...rest } = useQuery(
    ['users', search],
    () => search !== '' && fetchUsers(search)
  );
  return { users: data?.items || null, ...rest };
};
export default useGetUsers;

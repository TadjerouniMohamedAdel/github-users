import { useQuery } from 'react-query';
import { fetchUser } from './services';

const useGetUser = (login: string) => {
  const { data, ...rest } = useQuery(['user', login], () => fetchUser(login));
  return { user: data || null, ...rest };
};
export default useGetUser;

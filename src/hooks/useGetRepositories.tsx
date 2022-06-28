import { useQuery } from 'react-query';
import { fetchRepositories } from './services';

const useGetRepositories = (login: string) => {
  const { data, ...rest } = useQuery(['repositories', login], () =>
    fetchRepositories(login)
  );
  return { repositories: data || null, ...rest };
};
export default useGetRepositories;

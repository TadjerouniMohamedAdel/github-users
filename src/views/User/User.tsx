import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Repository from '../../components/Repository/Repository';
import RepositorySkeleton from '../../components/Repository/RepositorySkeleton';
import useGetRepositories from '../../hooks/useGetRepositories';
import useGetUser from '../../hooks/useGetUser';
import './styles.css';

type RepositoryType = {
  name: string;
  visibility: string;
  language: string | null;
  updated_at: Date | null;
  description: string | null;
};
const User = () => {
  const { login } = useParams();
  const { isLoading, user } = useGetUser(login || '');
  const { isLoading: isLoadingRepositories, repositories } = useGetRepositories(
    login || ''
  );
  return (
    <div className="user">
      <Link className="back-search" to="/users">
        {'<  Back To search'}
      </Link>
      <div className="user-container">
        {isLoading ? (
          <div className="loading-user">
            <Loader />
          </div>
        ) : (
          <>
            <div className="user-info">
              <div className="imgbox">
                <img src={user.avatar_url} alt="" />
              </div>
              <h1>{user.login}</h1>
              <span>{user.name}</span>
              <ul className="stat">
                <li>
                  <span>Folowing</span> <span>{user.following}</span>
                </li>
                <li>
                  <span>Followers</span> <span>{user.followers}</span>
                </li>
                <li>
                  <span>Repositories</span> <span>{user.public_repos}</span>
                </li>
              </ul>
              <p>{user.bio}</p>
            </div>
            <div className="repositories">
              {isLoadingRepositories ? (
                <>
                  <RepositorySkeleton />
                  <RepositorySkeleton />
                  <RepositorySkeleton />
                  <RepositorySkeleton />
                </>
              ) : (
                repositories.map((repo: RepositoryType) => (
                  <Repository repo={repo} key={repo.name} />
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default User;

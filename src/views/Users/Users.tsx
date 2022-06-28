/* eslint-disable no-nested-ternary */
import React, { FormEvent } from 'react';
import Loader from '../../components/Loader/Loader';
import Overview from '../../components/Overview/Overview';
import UserCard from '../../components/UserCard/UserCard';
import useGetUsers from '../../hooks/useGetUsers';
import './styles.css';

const stats = [
  {
    value: '83+ million',
    topic: 'Developers',
  },
  {
    value: '4+ million',
    topic: 'Organization',
  },
  {
    value: '200+ million',
    topic: 'repositories',
  },
  {
    value: '90%',
    topic: 'Fortune 100',
  },
];

const Users = () => {
  const [search, setSearch] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const { isLoading, users } = useGetUsers(search);

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearch(inputValue);
  };
  return (
    <div className="users-container">
      <div className="banner">
        <div className="content">
          <div className="left">
            <h1>
              Find your new
              <br /> Github team
            </h1>
            <p>
              Millions of developers and companies build, ship, and maintain
              their software on GitHub—the largest and most advanced development
              platform in the world.
            </p>
            <form className="searchbox" onSubmit={submitSearch}>
              <input
                type="text"
                placeholder="Search for a user"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">Search on Github</button>
            </form>
          </div>
          <div className="right">
            <div className="imgbox2">
              <img src="/github-world.png" alt="" />
            </div>
            <div className="imgbox">
              <img src="/github.png" alt="" />
            </div>
          </div>
        </div>
        <div className="stats">
          <hr />
          <ul>
            {stats.map((stat) => (
              <li className="stat-item" key={stat.topic}>
                <span>{stat.value}</span>
                <span>{stat.topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {search !== '' && (
        <p
          style={{
            fontFamily: 'var(--secondary-font)',
            marginTop: 30,
            fontSize: 15,
          }}
        >
          Results of you searching:
        </p>
      )}
      <div className="results">
        {isLoading ? (
          <Loader />
        ) : users?.length === 0 ? (
          <div className="empty">
            <div className="imgbox">
              <img src="/notfound.png" alt="" />
            </div>
            <h3>No result</h3>
          </div>
        ) : (
          users !== null &&
          users.map((user: { login: string; avatar_url: string }) => (
            <UserCard user={user} key={user.login} />
          ))
        )}
      </div>
      <Overview />
    </div>
  );
};
export default Users;

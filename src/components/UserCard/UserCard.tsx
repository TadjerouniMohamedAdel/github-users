import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  user: {
    avatar_url: string;
    login: string;
  };
};
const UserCard: React.FC<Props> = ({ user }) => (
  <div className="user-card">
    <div className="imgBox">
      <img src={user.avatar_url} alt="" />
    </div>
    <h3>{user.login}</h3>
    <Link to={`/users/${user.login}`}>
      <button className="view-details" type="button">
        View Details
      </button>
    </Link>
  </div>
);
export default UserCard;

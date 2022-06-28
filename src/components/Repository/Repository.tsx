import React from 'react';
import './styles.css';

type Props = {
  repo: {
    name: string;
    visibility: 'public' | 'private';
    language: string;
    updated_at: string | null;
    description: string | null;
  };
};

const Repository: React.FC<Props> = ({ repo }) => (
  <div className="repository-container">
    <h3>
      {repo.name} <span>{repo.visibility}</span>
    </h3>
    <p>{repo.description}</p>
    <div>
      <span>{repo.language}</span>
      {repo.updated_at !== null && (
        <span>Last update: {new Date(repo.updated_at).toDateString()}</span>
      )}
    </div>
    <hr />
  </div>
);
export default Repository;

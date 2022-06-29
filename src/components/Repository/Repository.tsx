import React from 'react';
import './styles.css';

type Props = {
  repo: {
    name: string;
    visibility: string;
    language: string | null;
    updated_at: Date | null;
    description: string | null;
  };
};

const Repository: React.FC<Props> = ({ repo }) => (
  <div className="repository-container">
    <h3>
      {repo.name} <span>{repo.visibility}</span>
    </h3>
    <p role="paragraph">{repo.description}</p>
    <div>
      <span data-testid="language">{repo.language ?? 'Other'}</span>
      {repo.updated_at !== null && new Date(repo.updated_at) && (
        <span data-testid="last-update">
          Last update: {new Date(repo.updated_at).toDateString()}
        </span>
      )}
    </div>
    <hr />
  </div>
);
export default Repository;

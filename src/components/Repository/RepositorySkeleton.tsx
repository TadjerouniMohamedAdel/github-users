import React from 'react';
import './styles.css';

const RepositorySkeleton = () => (
  <div className="repository-container">
    <h3>
      <div className="skeleton" /> <span className="skeleton" />
    </h3>
    <p className="skeleton" />
    <div>
      <span className="skeleton" />
      <span className="skeleton" />
    </div>
    <hr />
  </div>
);

export default RepositorySkeleton;

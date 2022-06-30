import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Error404 = () => (
  <div className="error-404">
    <Link className="back-search" to="/users">
      {'<  Back To search'}
    </Link>
    <img src="/404.png" alt="404 page" />
  </div>
);
export default Error404;

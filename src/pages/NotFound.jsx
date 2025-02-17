import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default NotFound;

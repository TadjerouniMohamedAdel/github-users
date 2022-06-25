import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Error404 from './views/Error404/Error404';
import User from './views/User/User';
import Users from './views/Users/Users';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/users" replace />} />
    <Route path="/users" element={<Users />} />
    <Route path="/users/:userid" element={<User />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);
export default App;

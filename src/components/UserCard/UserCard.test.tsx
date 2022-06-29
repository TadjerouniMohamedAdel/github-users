import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import UserCard from './UserCard';

const mockUser = {
  avatar_url: 'https://avatars.githubusercontent.com/u/12677701?v=4',
  login: 'adel@12',
};
describe('UserCard Test', () => {
  it('UserCard===>check the render of the valid props', () => {
    render(
      <BrowserRouter>
        <UserCard user={mockUser} />
      </BrowserRouter>
    );
    const login = screen.getByRole('heading', {
      name: /adel@12/i,
    });
    const avatar = screen.getByRole('img');
    expect(login).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', mockUser.avatar_url);
    expect(avatar).toBeVisible();
  });

  it('UserCard===> Testing Clicking View Details', () => {
    render(
      <BrowserRouter>
        <UserCard user={mockUser} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/view details/i));
    expect(window.location.pathname).toEqual(`/users/${mockUser.login}`);
  });
});

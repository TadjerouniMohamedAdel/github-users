import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { fireEvent } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import Users from './Users';

const queryClient = new QueryClient();
const ComponentToTest: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  </QueryClientProvider>
);
describe('Users Test', () => {
  it('Users====> testing the init render', async () => {
    render(<ComponentToTest />);
    const inputEl = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', {
      name: /search on github/i,
    });
    expect(inputEl).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton.getAttribute('type')).toEqual('submit');
    expect(inputEl.getAttribute('placeholder')).toEqual('Search for a user');
    expect(screen.queryByText(/view details/i)).toBeNull();
  });

  it('Users====> testing search with reults', async () => {
    render(<ComponentToTest />);
    const inputEl = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', {
      name: /search on github/i,
    });
    fireEvent.change(inputEl, { target: { value: 'dan' } });
    expect(inputEl.getAttribute('value')).toEqual('dan');
    fireEvent.click(submitButton);
    const users = await screen.findByTestId('user-card-0');
    expect(users).toBeInTheDocument();
  });

  it('Users ====> testing search with empty result', async () => {
    render(<ComponentToTest />);
    const inputEl = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', {
      name: /search on github/i,
    });
    fireEvent.change(inputEl, { target: { value: 'tadjerouniere' } });
    expect(inputEl.getAttribute('value')).toEqual('tadjerouniere');
    fireEvent.click(submitButton);
    const image = await screen.findByTestId('no-result');
    expect(image.getAttribute('src')).toContain('/notfound.png');
  });
});

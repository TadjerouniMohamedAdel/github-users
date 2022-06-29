import { render, screen, within } from '@testing-library/react';
import React from 'react';
import Repository from './Repository';

const mockRepo = {
  name: 'Repo 1',
  visibility: 'public',
  language: 'css',
  updated_at: new Date(),
  description: 'Autem mollitia culpa et adipisci ex ipsum asperiores sed.',
};
describe('Repository Component Tests', () => {
  it('Repository===>check the render of the valid props', () => {
    render(<Repository repo={mockRepo} />);
    const name = screen.getByRole('heading', {
      name: /Repo 1/i,
    });
    const visibility = within(name).getByText(/public/i);
    const description = screen.getByText(
      /autem mollitia culpa et adipisci ex ipsum asperiores sed./i
    );
    const language = screen.getByTestId('language');
    const lastUpdate = screen.getByTestId('last-update');
    expect(name).toBeInTheDocument();
    expect(visibility).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(language).toHaveTextContent('css');
    expect(lastUpdate).toHaveTextContent(
      new Date(mockRepo.updated_at).toDateString()
    );
  });

  it('Repository===>check component without updated date info', () => {
    render(<Repository repo={{ ...mockRepo, updated_at: null }} />);
    expect(screen.queryByTestId(/Last update/i)).toBeNull();
  });
  it("Repository===>check component  language===null if the component display 'other' as value", () => {
    render(<Repository repo={{ ...mockRepo, language: null }} />);
    const language = screen.getByTestId('language');
    expect(language).toHaveTextContent('Other');
  });
  it('Repository===>check component without description', () => {
    render(<Repository repo={{ ...mockRepo, description: null }} />);
    expect(screen.getByRole('paragraph')).toBeEmptyDOMElement();
  });
});

import { render, screen } from '@testing-library/react';
import Application from './Application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);
    const nameElement = screen.getByRole('textbox', {
      name: /surname/i,
    });

    expect(nameElement).toBeInTheDocument();

    const pageTitle = screen.getByRole('heading', {
    level : 3,
    });
    expect(pageTitle).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    });

    expect(sectionHeading).toBeInTheDocument();

    const jobLocation = screen.getByRole('combobox');
    expect(jobLocation).toHaveLength(6);
  });
});

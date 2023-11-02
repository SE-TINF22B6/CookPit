import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header'

test('renders the header of the website', () => {
    render(<Header />);
    const WebsiteName = screen.getByText("CookPit");
    expect(WebsiteName).toBeInTheDocument();
  });
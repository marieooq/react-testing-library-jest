import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import FrameworkList from './FrameworkList';

afterEach(() => cleanup());

describe('Rendering the list with props', () => {
  it('Should render No data ! when no data propped', () => {
    render(<FrameworkList />);
    expect(screen.getByText('No data!')).toBeInTheDocument();
  });
});

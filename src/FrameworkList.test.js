import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import FrameworkList from './FrameworkList';

afterEach(() => cleanup());

describe('Rendering the list with props', () => {
  it('Should render No data ! when no data propped', () => {
    render(<FrameworkList />);
    expect(screen.getByText('No data!')).toBeInTheDocument();
  });

  it('Should render list item correctly', () => {
    const dammyData = [
      { id: 1, item: 'React dummy' },
      { id: 2, item: 'Angular dummy' },
      { id: 3, item: 'Vue dummy' },
    ];

    render(<FrameworkList frameworks={dammyData} />);
    const frameworkItems = screen
      .getAllByRole('listitem')
      .map((elm) => elm.textContent);
    const dummyItems = dammyData.map((elm) => elm.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText('No data!')).toBeNull();
  });
});

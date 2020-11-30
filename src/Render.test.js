import React from 'react';
import { render, screen } from '@testing-library/react';
import Render from './Render';

describe('Rendering', () => {
  it('Sould render all the elements collectly', () => {
    render(<Render />);
    // screen.debug();
    //https://github.com/A11yance/aria-query#elements-to-roles
    // screen.debug(screen.getByRole('heading'));
    //https://jestjs.io/docs/en/expect
    //https://github.com/testing-library/jest-dom#custom-matchers
    expect(screen.getByRole('heading')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getAllByRole('button')[0]).toBeTruthy();
    expect(screen.getAllByRole('button')[1]).toBeTruthy();

    //check if "Udemy" exists
    expect(screen.getByText('Udemy')).toBeTruthy();

    //check if "Udeeemy" doesn't exiist
    expect(screen.queryByText('Udeeemy')).toBeNull();

    expect(screen.getByTestId('copyright')).toBeTruthy();

    // screen.debug(screen.getByText('Udemy'));
  });
});

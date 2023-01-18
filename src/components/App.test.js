import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';

import StarMatch from './App';

import { render, fireEvent, screen } from '@testing-library/react';

describe('App', () => {
  it('renders ansd increments counter', () => {
    const { getByText, getByTitle, asFragment } = render(
      <StarMatch initialData={{ appName: 'TEST' }} />,
    );
    expect(getByText('TEST')).toMatchInlineSnapshot(`
      <h1>
        TEST
      </h1>
    `);

    const button = screen.getByTitle('increment');
    fireEvent.click(button);
    expect(getByTitle('increment')).toHaveTextContent('1');

    expect(asFragment()).toMatchSnapshot();
  });
});

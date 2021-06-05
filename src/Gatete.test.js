import { render, screen } from '@testing-library/react';
import Gatete from './Gatete';

test('incorrect id', () => {
    render(<Gatete id="99" />)
    const error = screen.getByText(/Esa url no es la de un gatete :\(/g);
    expect(error).toBeInTheDocument();
  });
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('01 Greeting', () => {
  it('greets the name it is given', () => {
    render(<Greeting name="Barry" />);
    expect(screen.getByText('Hello, Barry!')).toBeInTheDocument();
  });

  it('works for a different name', () => {
    render(<Greeting name="Keelah" />);
    expect(screen.getByText('Hello, Keelah!')).toBeInTheDocument();
  });

  it('renders the greeting as a level-1 heading', () => {
    render(<Greeting name="Ada" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello, Ada!');
  });

  it('renders exactly one heading and nothing else', () => {
    const { container } = render(<Greeting name="Ada" />);
    expect(container.children).toHaveLength(1);
    expect(container.firstElementChild?.tagName).toBe('H1');
  });
});

import { render } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should render content correctly', () => {
    const { getByTestId } = render(<Button>Test content</Button>);

    expect(getByTestId('button-test-id')).toHaveTextContent('Test content');
  });

  it('should call onClick function when is clicked', () => {
    const onClickMock = jest.fn();

    const { getByTestId } = render(<Button onClick={onClickMock}>Test content</Button>);

    userEvent.click(getByTestId('button-test-id'));

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should add additional classname', () => {
    const { getByTestId } = render(<Button className="additional-class-name">Test content</Button>);

    expect(getByTestId('button-test-id')).toHaveClass('additional-class-name');
  });

  it('should be disabled if disabled property is tru', () => {
    const { getByTestId } = render(<Button disabled>Test content</Button>);

    expect(getByTestId('button-test-id')).toBeDisabled();
  });
});

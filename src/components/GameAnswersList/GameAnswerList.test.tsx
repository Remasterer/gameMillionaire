import { render } from '@testing-library/react';
import { GameAnswersList } from './GameAnswersList';
import userEvent from '@testing-library/user-event';

const handleGiveAnswerMock = jest.fn();


const component = () =>
  render(
    <GameAnswersList
      answerOptions={['first', 'second', 'third']}
      currentRightAnswers={['first', 'third']}
      isAnswerGiven={false}
      handleGiveAnswer={handleGiveAnswerMock}
    />
  );

describe('GameAnswersList', () => {
  it('should render answers', () => {
    const { getByTestId, getAllByTestId } = component();

    expect(getByTestId('game-answers-list')).toBeInTheDocument();
    expect(getByTestId('game-answers-list')).toHaveTextContent('first');
    expect(getByTestId('game-answers-list')).toHaveTextContent('second');
    expect(getByTestId('game-answers-list')).toHaveTextContent('third');
    expect(getAllByTestId('button-test-id').length).toBe(3);
  });

  it('should call handle handleGiveAnswer', () => {
    const { getAllByTestId } = component();

    userEvent.click(getAllByTestId('button-test-id')[0]);

    expect(handleGiveAnswerMock).toHaveBeenCalled();
  });
});

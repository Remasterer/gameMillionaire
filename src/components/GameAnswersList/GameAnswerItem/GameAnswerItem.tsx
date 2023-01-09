import { Button } from '../../Button';
import { getBemClassName } from '../../../utils';

const { block, element } = getBemClassName('game-answers-list__item');

type Props = {
  answerOption: string;
  isAnswerGiven: boolean;
  isAnswerRight: boolean;
  handleClick: () => void;
};

export const GameAnswerItem = ({
  answerOption,
  handleClick,
  isAnswerGiven,
  isAnswerRight
}: Props) => {
  return (
    <div
      className={block(
        isAnswerGiven && isAnswerRight ? 'right-answer' : null,
        isAnswerGiven && !isAnswerRight ? 'wrong-answer' : null
      )}
    >
      <Button
        type="hexagon"
        className={element('button')}
        disabled={isAnswerGiven}
        onClick={handleClick}
      >
        <span className={element('text')}>{answerOption}</span>
      </Button>
    </div>
  );
};

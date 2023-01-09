import './GameScreen.scss';
import { GameAnswersList } from '../GameAnswersList';
import { getBemClassName } from '../../utils';

const { block, element } = getBemClassName('game-screen');

type Props = {
  question: string;
  answerOptions: string[];
  currentRightAnswers: string[];
  isAnswerGiven: boolean;
  handleGiveAnswer: (userAnswer: string) => void;
};

export const GameScreen = ({
  question,
  answerOptions,
  currentRightAnswers,
  handleGiveAnswer,
  isAnswerGiven
}: Props) => {
  return (
    <div className={block()}>
      <div className={element('question')}>{question}</div>
      <GameAnswersList
        answerOptions={answerOptions}
        isAnswerGiven={isAnswerGiven}
        currentRightAnswers={currentRightAnswers}
        handleGiveAnswer={handleGiveAnswer}
      />
    </div>
  );
};

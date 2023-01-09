import { GameAnswerItem } from './GameAnswerItem';
import './GameAnswersList.scss';

type Props = {
  answerOptions: string[];
  currentRightAnswers: string[];
  isAnswerGiven: boolean;
  handleGiveAnswer: (userAnswer: string) => void;
};

export const GameAnswersList = ({
  answerOptions,
  currentRightAnswers,
  handleGiveAnswer,
  isAnswerGiven
}: Props) => {
  return (
    <div className="game-answers-list" data-testid="game-answers-list">
      {answerOptions.map((answerOption, index) => {
        const isAnswerRight = currentRightAnswers.includes(answerOption);

        return (
          <GameAnswerItem
            key={index}
            answerOption={answerOption}
            isAnswerGiven={isAnswerGiven}
            isAnswerRight={isAnswerRight}
            handleClick={() => handleGiveAnswer(answerOption)}
          />
        );
      })}
    </div>
  );
};

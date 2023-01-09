import './GamePage.scss';
import { GameScreen } from '../../components/GameScreen';
import { useGameState } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MobileMenu } from '../../components/MobileMenu';
import { getBemClassName } from '../../utils';
import { GameProgress } from '../../components/GameProgress';

const { block, element } = getBemClassName('game-page');

export const GamePage = () => {
  const [isAnswerGiven, setIsAnswerGiven] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGameOver = (reward: number) => {
    setTimeout(() => {
      navigate('/game-over', {
        state: {
          reward
        }
      });
    }, 500);
  };

  const {
    currentQuestion,
    currentAnswerOptions,
    currentRightAnswers,
    allRewards,
    currentReward,
    handleCheckAnswer
  } = useGameState({
    handleGameOver
  });

  const handleGiveAnswer = (userAnswer: string) => {
    setIsAnswerGiven(true);

    setTimeout(() => {
      handleCheckAnswer(userAnswer);
      setIsAnswerGiven(false);
    }, 1000);
  };

  return (
    <div className={block()}>
      <GameScreen
        question={currentQuestion}
        answerOptions={currentAnswerOptions}
        isAnswerGiven={isAnswerGiven}
        currentRightAnswers={currentRightAnswers}
        handleGiveAnswer={handleGiveAnswer}
      />
      <MobileMenu containerClassName={element('menu-content')}>
        <GameProgress rewards={allRewards} currentReward={currentReward} />
      </MobileMenu>
    </div>
  );
};

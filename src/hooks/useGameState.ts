import questions from '../data/questions.json';
import { useState } from 'react';

type UseGameStateArguments = {
  handleGameOver: (reward: number) => void;
};

export const useGameState = ({ handleGameOver }: UseGameStateArguments) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [earnedReward, setEarnedReward] = useState<number>(0);

  const currentQuestion = questions[activeQuestionIndex].question;
  const currentAnswerOptions = questions[activeQuestionIndex].answerOptions;
  const currentRightAnswers = questions[activeQuestionIndex].rightAnswers;
  const currentReward = questions[activeQuestionIndex].reward;
  const allRewards = questions.map((question) => question.reward).reverse();

  const handleCheckAnswer = (userAnswer: string): void => {
    const isLastQuestion = questions.length === activeQuestionIndex + 1;

    const isAnswerRight = currentRightAnswers.includes(userAnswer);

    if (isAnswerRight) {
      setEarnedReward((prevState) => prevState + currentReward);

      if (isLastQuestion) {
        handleGameOver(earnedReward + currentReward);
      } else {
        setActiveQuestionIndex((prevState) => prevState + 1);
      }
    } else {
      handleGameOver(earnedReward);
    }
  };

  return {
    currentQuestion,
    currentAnswerOptions,
    currentRightAnswers,
    allRewards,
    currentReward,
    handleCheckAnswer
  };
};

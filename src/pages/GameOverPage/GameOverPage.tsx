import { IntroScreen } from '../../components/IntroScreen';
import { useLocation } from 'react-router-dom';

export const GameOverPage = () => {
  const {
    state: { reward }
  } = useLocation();

  return <IntroScreen isGameOver moneyEarned={reward}></IntroScreen>;
};

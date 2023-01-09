import { useNavigate } from 'react-router-dom';
import { ReactComponent as IntroImage } from '../../assets/images/homePage/hand.svg';
import { Button } from '../Button';
import './IntroScreen.scss';
import { getBemClassName } from '../../utils';

const { block, element } = getBemClassName('intro-screen');

type Props = {
  isGameOver?: boolean;
  moneyEarned?: number;
};

export const IntroScreen = ({ isGameOver, moneyEarned }: Props) => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <div className={block(!isGameOver ? 'with-bg' : null)}>
      <div className={element('image-container')}>
        <IntroImage className={element('image')} />
      </div>
      <div className={element('content')}>
        <div className={element('text')}>
          {isGameOver && moneyEarned !== undefined && (
            <p className={element('sub-title')}>Total score:</p>
          )}
          <h2 className={element('title')}>
            {isGameOver && moneyEarned !== undefined
              ? moneyEarned
              : 'Who wants to be a millionaire?'}
          </h2>
        </div>
        <Button onClick={handleStartGame}> {isGameOver ? 'Try again' : 'Start'}</Button>
      </div>
    </div>
  );
};

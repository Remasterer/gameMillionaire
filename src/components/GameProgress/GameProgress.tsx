import { getBemClassName } from '../../utils';
import './GameProgress.scss';
import { GameProgressItem } from './GameProgressItem';

const { block } = getBemClassName('game-progress');

type Props = {
  rewards: number[];
  currentReward: number;
};

export const GameProgress = ({ rewards, currentReward }: Props) => {
  return (
    <div className={block()}>
      {rewards.map((reward, index) => (
        <GameProgressItem
          key={index}
          reward={reward}
          isCurrentReward={currentReward === reward}
          isPreviousReward={reward < currentReward}
        />
      ))}
    </div>
  );
};

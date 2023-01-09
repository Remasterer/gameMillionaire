import { getBemClassName } from '../../../utils';

const { block, element } = getBemClassName('game-progress__item');

type Props = {
  reward: number;
  isCurrentReward: boolean;
  isPreviousReward: boolean;
};

export const GameProgressItem = ({ reward, isCurrentReward, isPreviousReward }: Props) => {
  return (
    <div
      className={block(isCurrentReward ? 'current' : null, isPreviousReward ? 'previous' : null)}
    >
      <div className={element('reward')}>{reward}$</div>
    </div>
  );
};

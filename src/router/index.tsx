import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { GameOverPage } from '../pages/GameOverPage';
import { GamePage } from '../pages/GamePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/game',
    element: <GamePage />
  },
  {
    path: '/game-over',
    element: <GameOverPage />
  },
  {
    path: '*',
    element: <HomePage />
  }
]);

export default router;

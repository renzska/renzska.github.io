import './Controls.scss';
import * as React from 'react';
import { IconButton } from '../IconButton/IconButton';

export interface IControlsProps {
  randomizeGame: () => void;
  startGame: () => void;
  pauseGame: () => void;
  stopGame: () => void;
  gameState: 'running' | 'paused' | 'ended' | 'ready';
}

export const Controls: React.FC<IControlsProps> = (
  { gameState, randomizeGame, startGame, pauseGame, stopGame }) => (
  <section className="controls-wrapper">
    <div className="controls">
      { (gameState === 'paused' || gameState === 'ready') && <IconButton icon="play" onClick={ startGame } /> }
      { gameState === 'running' && <IconButton icon="pause" onClick={ pauseGame } /> }
      { (gameState === 'ended' || gameState === 'paused' || gameState === 'ready') && <IconButton icon="dice-d20" onClick={ stopGame } />}
      {/* { gameState === 'ended' && <IconButton icon="dice-d20" onClick={ randomizeGame } /> } */}
    </div>
  </section>
);

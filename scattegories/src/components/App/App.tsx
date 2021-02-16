import './App.scss';
import * as React from 'react';
import { Timer } from '../Timer/Timer';
import { Categories } from '../Categories/Categories';
import { Alphabet } from '../Alphabet/Alphabet';
import { Settings } from '../Settings/Settings';
import { Randomizer } from '../../services/Randomizer';
import { Controls } from '../Controls/Controls';
import { useInterval } from '../../hooks';

export const App: React.FC = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const [letter, setLetter] = React.useState('');
  const [time, setTime] = React.useState(180);
  const [maxTime, setMaxTime] = React.useState(180);
  const [categoryCount, setCategoryCount] = React.useState(12);
  const [gameState, setGameState] = React.useState<'running' | 'paused' | 'ended' | 'ready' >('ready');

  const randomizeGame = () => {
    setCategories(Randomizer.getRandomCategories(categoryCount));
    setLetter(Randomizer.getRandomLetter());
  };

  const settingsUpdated = (maxTime: number, categoryCount: number) => {
    setMaxTime(maxTime);
    setCategoryCount(categoryCount);
  }

  const startGame = () => {
    setGameState('running');
  }

  const pauseGame = () => {
    setGameState('paused');
  }

  const endGame = () => {
    setTime(maxTime);
    //randomizeGame();
    setGameState('ended');
  }

  const stopGame = () => {
    setTime(maxTime);
    randomizeGame();
    setGameState('ready');
  }

  React.useEffect(() => {
    stopGame();
  }, [maxTime, categoryCount])

  useInterval(() => {
    setTime((t) => t - 1);
    if (time === 1) {
      endGame();
      if (Audio) {
        const audio = new Audio('build/alarm.mp3');
        audio.play();
      }
    }
  }, gameState === 'running' ? 1000 : null);

  return (
    <div className="app">
      <Timer time={ time } progress={ 100 * ((maxTime - time) / maxTime) } />
      <Categories categories={ categories }
        flipped={ (gameState === 'running' || gameState === 'ended') } />
      <Alphabet letter={ letter } />
      <Controls { ...{ randomizeGame, startGame, stopGame, pauseGame, endGame, gameState } } />
      <Settings defaultMaxTime={ maxTime }
        defaultCategoryCount={ categoryCount }
        onChange={ settingsUpdated } />
    </div>
  );
}

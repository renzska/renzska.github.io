import './Timer.scss';
import * as React from 'react';

export interface ITimerProps {
  time: number;
  progress: number;
}

export const Timer: React.FC<ITimerProps> = ({ time, progress }) => (
  <section className="timer-wrapper">
    <div className={ `timer ${ time <= 10 ? 'ending' : '' }` }>
      <div className="timer-progress"
        style={ { width: `${progress}%`} }></div>
      <div className="timer-time">{ time }</div>
    </div>
  </section>
);

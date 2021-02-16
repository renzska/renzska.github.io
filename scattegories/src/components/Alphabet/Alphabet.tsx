import './Alphabet.scss';
import * as React from 'react';

export interface IAlphabetProps {
  letter: string;
}

export const Alphabet: React.FC<IAlphabetProps> = ({ letter }) => (
  <section className="alphabet-wrapper">
    <div className="alphabet">
      <div className="alphabet-letter">{ letter }</div>
    </div>
  </section>
);

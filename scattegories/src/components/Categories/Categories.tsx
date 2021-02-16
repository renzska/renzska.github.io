import './Categories.scss';
import * as React from 'react';
import { Category } from '../Category/Category';

interface ICategoriesProps {
  categories: string[];
  flipped: boolean;
}

export const Categories: React.FC<ICategoriesProps> = ({ categories, flipped }) =>(
  <section className="categories-wrapper flip-container">
    <div className={ `flipper ${flipped ? 'flipped' : ''}` } >
      <div className="categories front">
        <i className="fas fa-eye-slash"></i>
      </div>
      <div className="categories back">
        { categories.map((cat, i) =>
            <Category key={ i }
              categoryName={ cat }
              number={ i + 1 } />
          ) }
      </div>
    </div>
  </section>
);

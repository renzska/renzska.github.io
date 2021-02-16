import './Category.scss';
import * as React from 'react';

interface ICategoryProps {
  categoryName: string;
  number: number;
}

export const Category: React.FC<ICategoryProps> = ({ categoryName, number }) => (
  <div className="category">
    <span className="category-number">{ number }</span> <span className="category-name">{ categoryName }</span>
  </div>
);

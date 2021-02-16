import './IconButton.scss';
import * as React from 'react';

interface IIconButtonProps {
  icon: string;
  size?: 'sm' | 'lg';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({ icon, size = 'lg', onClick }) => (
  <button type="button"
    className={ `icon-button ${size}` }
    onClick={ onClick }>
    <i className={ `fas fa-${icon}` }></i>
  </button>
);

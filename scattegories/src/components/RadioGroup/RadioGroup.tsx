import './RadioGroup.scss';
import * as React from 'react';

interface IRadioGroupProps {
  values: number[];
  defaultValue: number;
  onChange: (value: number) => void;
}

export const RadioGroup: React.FC<IRadioGroupProps> = ({ values, defaultValue, onChange }) => {
  const [selected, setSelected] = React.useState(defaultValue);
  const clicked = (value: number) => {
    setSelected(value);
    onChange(value);
  }

  return (
    <div className="radio-group">
      { values.map((value, i) => (
        <div key={ i }
          className="radio-item">
          <button type="button"
            className={ `radio-button ${value === selected ? 'checked' : '' }` }
            onClick={ () => clicked(value) }>
            <i className="fas fa-check"></i>
          </button>
          { value }
        </div>
      ))}
    </div>
  );
}

import './Settings.scss';
import * as React from 'react';
import { RadioGroup } from '../RadioGroup/RadioGroup';

export interface ISettingsProps {
  defaultMaxTime: number;
  defaultCategoryCount: number;
  onChange: (maxTime: number, categoryCount: number) => void;
}

export const Settings: React.FC<ISettingsProps> = ({ defaultMaxTime, defaultCategoryCount, onChange  }) => {
  const [visible, setVisible] = React.useState(false);
  const [maxTime, setMaxTime] = React.useState(defaultMaxTime);
  const [categoryCount, setCategoryCount] = React.useState(defaultCategoryCount);

  const settingsClicked = () => {
    setVisible(!visible);
  }

  const maxTimeUpdated = (value: number) => {
    setMaxTime(value);
    onChange(value, categoryCount);
  }

  const categoryCountUpdated = (value: number) => {
    setCategoryCount(value);
    onChange(maxTime, value);
  }

  return (
    <section className="settings-wrapper">
      <div className="settings-button">
        <i className="fas fa-cog"
          onClick={ settingsClicked }></i>
      </div>
      <div className={ `settings ${ visible ? 'visible' : '' }` }>
        <div className="setting">
          <div className="setting-name">Timer</div>
          <div className="setting-value">
            <RadioGroup values={ [90, 120, 150, 180] }
              defaultValue={ defaultMaxTime }
              onChange={ maxTimeUpdated } />
          </div>
        </div>
        <div className="setting">
          <div className="setting-name">Categories</div>
          <div className="setting-value">
            <RadioGroup values={ [10, 12, 15] }
              defaultValue={ defaultCategoryCount }
              onChange={ categoryCountUpdated } />
          </div>
        </div>
      </div>
    </section>
  )
};

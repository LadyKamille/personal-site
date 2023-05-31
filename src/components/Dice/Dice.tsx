import React from 'react';

import * as DiceStyles from './Dice.module.css';

const Dice: React.FC = (): React.ReactElement => (
  <div className={DiceStyles.dice}>
    <div className={DiceStyles.side}></div>
    <div className={DiceStyles.side}></div>
    <div className={DiceStyles.side}></div>
    <div className={DiceStyles.side}></div>
    <div className={DiceStyles.side}></div>
    <div className={DiceStyles.side}></div>
  </div>
);

export default Dice;

import DiceStyles from './Dice.module.css';

const Dice = () => (
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

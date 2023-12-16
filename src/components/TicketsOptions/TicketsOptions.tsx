import React, { FC } from 'react';
import styles from './TicketsOptions.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ICheckBoxClickedAction, checkBoxClicked } from '../../store/actions/ticketOptionsActions';
import { Dispatch } from 'redux';

const { 'options-container': options, 'checkbox-container': checkboxContainer, 'check-box': checkBox } = styles;

const TicketsOptions: FC = () => {
  const dispatch: Dispatch<ICheckBoxClickedAction> = useDispatch();
  const { filterTransfers } = useSelector(({ ticketsListReducer }: any) => ticketsListReducer);

  const handleCheckBoxChange = (id: number) => {
    dispatch(checkBoxClicked(id));
  };

  const checkboxes = filterTransfers.map((el: any) => {
    return (
      <div className={checkboxContainer} key={el.id}>
        <label>
          <input type="checkbox" value={el.value} onChange={() => handleCheckBoxChange(el.id)} checked={el.isChecked} />
          <span className={checkBox}></span>
          {el.name}
        </label>
      </div>
    );
  });

  return (
    <form className={options}>
      <h3>количество пересадок</h3>
      {checkboxes}
    </form>
  );
};

export default TicketsOptions;

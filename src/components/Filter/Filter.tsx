import React, { FC } from 'react';
import styles from './Filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FilterActionsPayload, IFilterActions, setCheapest, setFastest } from '../../store/actions/filterActions';
import { Dispatch } from 'redux';
import { IState } from '../../interfaces';

const { 'ticket-list-filter': formStyle, 'label-filter': labelFilter, checked } = styles;

function isCheapestSelected(state: any): any {
  if (state === FilterActionsPayload.CHEAPEST) return true;
  return false;
}

function isFastestSelected(state: any): any {
  if (state === FilterActionsPayload.FASTEST) return true;
  return false;
}

const Filter: FC = () => {
  const dispatch: Dispatch<IFilterActions> = useDispatch();
  const { filterSelected }: IState = useSelector(({ ticketsListReducer }) => ticketsListReducer);

  const onFilterChange = (e: any): any => {
    if (e.target.value === FilterActionsPayload.CHEAPEST) return dispatch(setCheapest);
    if (e.target.value === FilterActionsPayload.FASTEST) return dispatch(setFastest);
    return;
  };

  const classForCheapest = isCheapestSelected(filterSelected) ? `${labelFilter} ${checked}` : `${labelFilter}`;

  const classForFastest = isFastestSelected(filterSelected) ? `${labelFilter} ${checked}` : `${labelFilter}`;

  return (
    <form className={formStyle}>
      <input
        type="radio"
        id="cheap"
        name="ticketListFilter"
        hidden
        onChange={onFilterChange}
        value={FilterActionsPayload.CHEAPEST}
        checked={isCheapestSelected(filterSelected)}
      />
      <label className={classForCheapest} htmlFor="cheap">
        самый дешевый
      </label>

      <input
        type="radio"
        id="fast"
        name="ticketListFilter"
        hidden
        onChange={onFilterChange}
        value={FilterActionsPayload.FASTEST}
        checked={isFastestSelected(filterSelected)}
      />
      <label className={classForFastest} htmlFor="fast">
        самый быстрый
      </label>
    </form>
  );
};

export default Filter;

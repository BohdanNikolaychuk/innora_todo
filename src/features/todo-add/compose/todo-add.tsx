import { ChangeEvent } from 'react';
import { todoModel } from '../../../entities/todo';
import s from './todo-add.module.scss';
import { HiPlus } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store';

export const TodoAdd = () => {
  const dispatch = useAppDispatch();

  const inputValue = useAppSelector(state => state.todo.inputValue);

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(todoModel.setInputValue(event.target.value));
  };

  const handleAddTodo = () => {
    dispatch(todoModel.addTodo());
    dispatch(todoModel.setActiveTab('all'));
  };

  return (
    <div className={s['feed__container']}>
      <div className={s['feed__action']}>
        <input
          placeholder="Input your note..."
          className={s['feed__input']}
          value={inputValue}
          onKeyDown={handleEnterPress}
          onChange={handleInputChange}
        />
        <button className={s['add__button']} onClick={handleAddTodo}>
          <HiPlus className={s['add-icon']} size={20} />
        </button>
      </div>
    </div>
  );
};

import React, { ChangeEvent } from 'react';
import s from './styles.module.scss';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { TodoList } from '../../features/todo-list';
import { useAppDispatch, useAppSelector } from '../../shared/lib/store';
import { todoModel } from '../../entities/todo';

export const FeedPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const activeTab = useAppSelector(state => state.todo.activeTab);

  const inputValue = useAppSelector(state => state.todo.inputValue);

  // const filteredTodos = todos.filter(todo => {
  //   if (activeTab === 'all') {
  //     return true;
  //   } else if (activeTab === 'deleted') {
  //     return todo.deleted;
  //   }
  //   return false;
  // });

  const handleTabClick = (tab: 'all' | 'deleted') => {
    dispatch(todoModel.setActiveTab(tab));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(todoModel.setInputValue(event.target.value));
  };

  const handleAddTodo = () => {
    dispatch(todoModel.addTodo());
  };

  return (
    <section className={s['feed']}>
      <h2 className={s['feed__title']}>TODO LIST</h2>

      <div className={s['feed__container']}>
        <div className={s['feed__action']}>
          <input
            placeholder="Input your note..."
            className={s['feed__input']}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className={s['add__button']} onClick={handleAddTodo}>
            <IoIosAddCircleOutline size={20} />
          </button>
        </div>
      </div>

      <div className={s['feed__tabs']}>
        <button
          className={`${s['tab__button']} ${
            activeTab === 'all' ? s['active'] : ''
          }`}
          onClick={() => handleTabClick('all')}
        >
          All
        </button>
        <button
          className={`${s['tab__button']} ${
            activeTab === 'deleted' ? s['active'] : ''
          }`}
          onClick={() => handleTabClick('deleted')}
        >
          Archive
        </button>
      </div>

      <TodoList />
    </section>
  );
};

import React from 'react';
import s from './feed.module.scss';

import { TodoList } from '../../features/todo-list';
import { TodoAdd } from '../../features/todo-add/compose/todo-add';
import { TodoTabs } from '../../features/todo-tabs/compose/todo-tabs';
export const FeedPage: React.FC = () => {
  return (
    <section className={s['feed']}>
      <h2 className={s['feed__title']}>TODO LIST</h2>
      <TodoAdd />
      <TodoTabs />
      <TodoList />
    </section>
  );
};

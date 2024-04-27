import { todoModel } from '../../../entities/todo';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store';
import s from './todo-tabs.module.scss';
export const TodoTabs = () => {
  const dispatch = useAppDispatch();

  const activeTab = useAppSelector(state => state.todo.activeTab);
  const todos = useAppSelector(state => state.todo.todos);

  const nonDeletedTodos = todos.filter(todo => !todo.deleted);
  const deletedTodos = todos.filter(todo => todo.deleted);
  const handleTabClick = (tab: 'all' | 'deleted') => {
    dispatch(todoModel.setActiveTab(tab));
  };

  return (
    <div className={s['feed__tabs']}>
      <button
        className={`${s['tab__button']} ${
          activeTab === 'all' ? s['active'] : ''
        }`}
        onClick={() => handleTabClick('all')}
      >
        All ({nonDeletedTodos.length})
      </button>
      <button
        className={`${s['tab__button']} ${
          activeTab === 'deleted' ? s['active'] : ''
        }`}
        onClick={() => handleTabClick('deleted')}
      >
        Archive ({deletedTodos.length})
      </button>
    </div>
  );
};

import s from './todo-list.module.scss';
import { useAppSelector } from '../../../shared/lib/store';
import { TodoItem } from '../ui/todo-item';
export const TodoList = () => {
  const todos = useAppSelector(state => state.todo.todos);
  const activeTab = useAppSelector(state => state.todo.activeTab);

  const nonDeletedTodos = todos.filter(todo => !todo.deleted);
  const deletedTodos = todos.filter(todo => todo.deleted);

  const sortedTodos =
    activeTab === 'all' ? [...nonDeletedTodos] : [...deletedTodos];

  return (
    <ul className={s['feed__list']}>
      {sortedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

import { MdAutoDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { todoModel } from '../../../entities/todo';
import s from '../../../pages/feed/styles.module.scss';
import { useAppSelector } from '../../../shared/lib/store';
export const TodoList = () => {
  const todos = useAppSelector(state => state.todo.todos);
  const activeTab = useAppSelector(state => state.todo.activeTab);

  const dispatch = useDispatch();

  const handleMarkAsDeleted = (id: number) => {
    dispatch(todoModel.markAsDeleted(id));
  };

  const filteredTodos = todos.filter(todo => {
    if (activeTab === 'all') {
      return true;
    } else if (activeTab === 'deleted') {
      return todo.deleted;
    }
    return false;
  });

  return (
    <ul className={s['feed__list']}>
      {filteredTodos.map(todo => (
        <li
          key={todo.id}
          className={`${s['todo__item']} ${todo.deleted ? s['deleted'] : ''}`}
        >
          {todo.text}
          {!todo.deleted && (
            <button
              className={s['delete__button']}
              onClick={() => handleMarkAsDeleted(todo.id)}
            >
              <MdAutoDelete size={20} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

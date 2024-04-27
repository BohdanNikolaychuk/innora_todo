import { todoModel } from '../../../entities/todo';
import { Todo } from '../../../entities/todo/model';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store';
import s from './todo-item.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineUnarchive } from 'react-icons/md';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(state => state.todo.todos);

  const deletedTodos = todos.filter(todo => todo.deleted);
  const handleMarkAsDeleted = (id: number) => {
    dispatch(todoModel.markAsDeleted(id));
  };
  const handleMarkAsUndeleted = (id: number) => {
    dispatch(todoModel.markAsUndeleted(id));
    if (deletedTodos.length === 0) {
      dispatch(todoModel.setActiveTab('all'));
    }
  };
  return (
    <li
      key={todo.id}
      className={`${s['todo__item']} ${todo.deleted ? s['deleted'] : ''}`}
    >
      <div className={`${s['todo__item_wrap']}`}>
        {todo.text}
        {!todo.deleted ? (
          <button
            className={s['delete__button']}
            onClick={() => handleMarkAsDeleted(todo.id)}
          >
            <AiOutlineDelete className={s['delete-icon']} size={20} />
          </button>
        ) : (
          <button
            className={s['delete__button']}
            onClick={() => handleMarkAsUndeleted(todo.id)}
          >
            <MdOutlineUnarchive className={s['delete-icon']} size={20} />
          </button>
        )}
      </div>
    </li>
  );
};

import { Link } from 'react-router-dom';
import s from './home.module.scss';
export const HomePage = () => {
  return (
    <div className={s['home']}>
      <div className={s['home__action']}>
        <h2 className={s['home__title']}>Hey there!</h2>
        <p className={s['home__desc']}>How's it going? </p>
        <Link to="/feed" className={s['home__link']}>
          go to ToDos
        </Link>
      </div>
    </div>
  );
};

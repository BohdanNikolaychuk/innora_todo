import { Outlet } from 'react-router-dom';

export function GenericLayout() {
  return (
    <>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

import Loader from 'components/Loader/Loader';
import css from "../Layout/Layout.module.css"
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink className={css.header__link} to="home">Home</NavLink>
          <NavLink className={css.header__link} to="movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;

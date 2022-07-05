import NavMenu from './NavMenu';
import ToggleTheme from 'components/ToggleTheme';
import s from './style.module.css';

const Header = () => {
  return (
    <div className={s.navContainer}>
      <div className={s.menu}>
        <NavMenu />
      </div>

      <ToggleTheme />
    </div>
  );
};

export default Header;

import s from './style.module.css';

function Footer() {
  return (
    <div className={s.container}>
      <p className={s.copy}> &copy;</p>
      <div className={s.text}>2022</div>
      <div className={s.text}>All Rights Reserved</div>
      <div className={s.authors}>Developed by</div>
      <div className={s.a}> </div>
      <div>
        <a
          href="https://github.com/mrok-creator"
          target="_blank"
          rel="noopener noreferrer"
          className={s.author}
        >
          Kasianenko Oleksandr
        </a>
      </div>
    </div>
  );
}

export default Footer;

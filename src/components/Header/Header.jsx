import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  'header': {
    'width': '100%',
    'height': 40,
    'background': '#343538',
    'font': '700 20px Roboto',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  'wrapper': {
    '@media (min-width: 768px)': {
      'width': 700,
    },
    '@media (min-width: 1024px)': {
      'width': 960,
    },
    'width': 340,
  },

  'title': {
    'color': '#feffff',
  },
});

function Header() {
  const style = useStyles();

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.title}>
          Simple Chat
        </div>
      </div>
    </header>
  );
}

export default Header;
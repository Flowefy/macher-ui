import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '4.5rem',
    backgroundColor: 'black',
    color: 'white',
    padding: '1rem',
  },
  title: {
    fontSize: '1.5rem',
  },
});

export const Header = ({ title }) => {
  const styles = useStyles();

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

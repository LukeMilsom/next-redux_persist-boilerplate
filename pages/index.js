import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoilerAction } from '../redux/actions/boilerActions';
import styles from '../styles/Index.module.css';

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state?.boilerActions?._state);

  const handleClick = () => {
    dispatch(setBoilerAction('STATEFUL 😃'));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className={styles.titleContainer}>
          <h1>{globalState}</h1>
          <button onClick={handleClick}>Click me</button>
        </div>
      )}
    </>
  );
};

export default Home;

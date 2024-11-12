import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import TaskCard from './Components/TaskCard';

function App() {
  return (
    <div className={styles.MainContainer}>
      <Header></Header>
      <AddTodo></AddTodo>
      <div className={styles.Cards}>
        <TaskCard></TaskCard>

      </div>

    </div>
  )
}

export default App

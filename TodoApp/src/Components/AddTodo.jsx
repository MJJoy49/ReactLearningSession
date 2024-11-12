import React from 'react';
import styles from './AddTodo.module.css';
import { MdNoteAdd } from "react-icons/md";

function AddTodo() {
    return (
        <div className={styles.AddTodoContainer}>
            <input type="text" className={styles.EnterTask} />
            <input type="date" className={styles.SelectDate} />
            <MdNoteAdd className={styles.TodoSave} />
        </div>
    )
}

export default AddTodo

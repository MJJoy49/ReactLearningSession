import React from 'react';
import styles from './TaskCard.module.css';
import { MdDelete } from "react-icons/md";

function TaskCard() {
    return (
        <div className={styles.TaskCardContainer}>
            <p className={styles.TaskName}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum.</p>
            <h1 className={styles.TaskDate}>11/12/2024</h1>
            <MdDelete className={styles.DeleteTask} />
        </div>
    )
}

export default TaskCard

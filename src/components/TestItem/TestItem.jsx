import React from 'react';
import classes from './TestItem.module.css'
const TestItem = ({test_number,create_date, number_of_users, actions}) => {
    return (
        <div className={classes.testBox}>
            <p>Тест {test_number}</p>
            <p> {create_date}</p>
            <p> {number_of_users}</p>
            <p> {actions}</p>
        </div>
    );
};

export default TestItem;
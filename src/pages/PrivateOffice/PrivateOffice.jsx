import React from 'react';
import MyTestItem from "../../components/TestItem/TestItem";
import classes from './PrivateOffice.module.css'

const PrivateOffice = () => {
    return (
        <div className={classes.mainBlock}>
            <h2>Мои тесты</h2>
            <section className={classes.testBlock}>
                <p>Название</p>
                <p>Дата Создания</p>
                <p>Кол-во участников</p>
                <p>Действия</p>
            </section>
            <MyTestItem actions='Кнопки сюда' create_date='23.22.2023' test_number='1' number_of_users='0'/>
        </div>

    );
};

export default PrivateOffice;
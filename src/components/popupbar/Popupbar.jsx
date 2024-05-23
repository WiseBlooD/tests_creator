import React, {useState} from 'react';
import classes from './Popupbar.module.css'


const Popupbar = ({children}) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        // Сюда добавить логику для MongoDB

        setLogin('')
        setPassword('')
    }

    const togglePopup = () => {
        setIsFormOpen(!isFormOpen)
    }

    const handleOverlayClick = () => {
        setIsFormOpen(false)
    }

    return (
        <div>
            <button onClick={togglePopup} className={classes.button}>
                {isFormOpen ? 'Скрыть' : 'Показать'} попап
            </button>
            {isFormOpen && (
                <>
                    <div className={classes.overlay} onClick={handleOverlayClick}></div>
                    <form action="" method="post">
                        <div className={classes.popUp}>
                            <h2>{children}</h2>
                            <label htmlFor="login">Логин</label>
                            <input type='text'
                                   id="login"
                                   name="login"
                                   value={login}
                                   onChange = {(e) => setLogin(e.target.value)}
                                   placeholder="Введите логин"
                            />
                            <br/>
                            <label htmlFor="password">Пароль</label>
                            <input type='text'
                                   id="password"
                                   name="password"
                                   value={password}
                                   onChange = {(e) => setPassword(e.target.value)}
                                   placeholder="Введите пароль"
                            />
                            <a href='/'>Forget password?</a>
                            <button type="submit">Зарегестрироваться</button>

                        </div>
                    </form>

                </>
            )}
        </div>
    );
};

export default Popupbar;
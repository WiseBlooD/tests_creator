import React, { useState } from 'react';

const TestWithOptions = ({ test_number, test_question, answer_option }) => {
    const [options, setOptions] = useState([answer_option]);
    const [isOptions, setIsOptions] = useState(false)

    const addOption = () => {
        const newOptions = [...options, ''];
        setOptions(newOptions);
    };

    const removeOption = (index) => {
        const newOptions = [...options];
        newOptions.splice(index, 1);
        setOptions(newOptions);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const choiceOptions = () => {
        setIsOptions(!isOptions)
        console.log(isOptions)
    }

    return (
        <div>
            <p>
                {test_number} {test_question}
            </p>
            <label>
                <label>
                    <input
                        type='radio'
                        id='oneOption'
                        name='answerType'
                        value='single'
                        onChange={choiceOptions}
                    />{' '}
                    Один вариант ответа
                </label>
                <label>
                    <input
                        type='radio'
                        id='multipleOptions'
                        name='answerType'
                        value='multiple'
                        onChange={choiceOptions}
                    />{' '}
                    Несколько вариантов ответов
                </label>
            </label>
            <label>
                {options.map((option, index) => (
                    <div key={index}>
                        <input
                            type={isOptions ? 'radio' : 'checkbox'}
                            id={`option${index}`}
                            name='answer'
                            value={index}
                        />
                        <input
                            type='text'
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                        />
                        <button onClick={() => removeOption(index)}>Удалить</button>
                    </div>
                ))}
            </label>
            <button onClick={addOption}>Добавить вариант</button>
        </div>
    );
};

export default TestWithOptions;
import React from 'react';
import TestWithOptions from "../../components/testWithOptions/TestWithOptions.jsx";
import ButtonForTest from "../../components/buttonForTests/ButtonForTests.jsx";

const TestBuilder = () => {

    return (
        <div>
            <h1>test builder</h1>
            <TestWithOptions test_number='1' test_question='How are you' answer_option='None' button_text='+добавить'/>
            <ButtonForTest  button_text='+добавить'/>

        </div>
    );
};

export default TestBuilder;
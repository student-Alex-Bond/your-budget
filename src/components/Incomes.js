import React from 'react';
import ExpanseAndIncome from "./ExpanseAndIncome";

const Incomes = (props) => {
    return (
        <ExpanseAndIncome  title={'Ввести доходы'} onSubmit={props.onSubmit}/>
    );
};

export default Incomes;
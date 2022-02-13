import React from 'react';
import ExpanseAndIncome from "./ExpanseAndIncome";

const Expanse = (props) => {
    return (
        <ExpanseAndIncome title={'Ввести расходы'} onSubmit={props.onSubmit} />
    )

};

export default Expanse;
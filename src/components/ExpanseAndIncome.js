import React, {useState} from 'react';
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.5;
`;
const Input = styled.input`
  font-family: 'Marmelad', serif;
  font-size: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
`;
const LineTitle = styled.dt`
  width: 180px;
`;
const LineInput = styled.dd`
  width: 150px;
  margin: 0;
`;
const Button = styled.button`
  font-family: 'Marmelad', serif;
  color: white;
  border: 1px solid white;
  border-radius: 31px;
  background-color: transparent;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  padding: 5px 20px;
`;

const ExpanseAndIncome = (props) => {

    const [transaction, setTransaction] = useState('')
    const [category, setCategory] = useState('')


    const handleChangeTransaction = (e) => {
        setTransaction(e.currentTarget.value)
    }

    const handleChangeCategoryName = (e) => {
        setCategory(e.currentTarget.value)
    }


    const handleEnter = () => {
        props.onSubmit(transaction, category)
        setTransaction('')
        setCategory('')
    }


    return (
        <Container>
            <dl>
                <InputLine>
                    <LineTitle>{props.title}:</LineTitle>
                    <LineInput>
                        <Input

                            onChange={handleChangeTransaction}
                            value={transaction}
                        />
                    </LineInput>
                </InputLine>
                <InputLine>
                    <LineTitle>Категория:</LineTitle>
                    <LineInput>
                        <Input
                            onChange={handleChangeCategoryName}
                            value={category}
                        />
                    </LineInput>
                </InputLine>
            </dl>
            <Button onClick={handleEnter}>Внести</Button>
        </Container>
    );

};

export default ExpanseAndIncome;
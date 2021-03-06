import './App.css';
import React, {useState} from "react";
import {subtractDay, addDay} from './utils/date'
import styled from 'styled-components';
import moment from "moment";
import Expanse from "./components/Expanse";
import Incomes from "./components/Incomes";
import {handleSubmit} from './utils/submitTransaction'

const DateButton = styled.button`
  color: lightslategray;
  border: 1px solid lightslategray;
  background-color: transparent;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  font-size: 25px;
`;

const DateLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.span`
  font-family: 'Marmelad', serif;
  cursor: pointer;
  color: lightslategray;
  margin: 0 8px;
  border-bottom: ${({selected}) => (selected ? '2px solid lightslategray' : 'none')};
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 40px 0 15px;
`
const Table = styled.table`
  width: 450px;
  text-align: center;
  padding-top: 30px;
  margin: 0 auto;
 


`;

function App() {

    const [date, setDate] = React.useState(moment().format('DD.MM.YYYY'))

    const [navSelected, setNavSelected] = useState('expanse')

    const [tableTransaction, setTransaction] =useState([])


    const handleSubtractDay = () => {
        setDate(subtractDay())
    }

    const handleAddDay = () => {
        setDate(addDay())
    }


    const handleNavClick = (event) => {
        setNavSelected(event.target.getAttribute('name'))
    }

  const handleSubmitTransactionExpanse = (sum, category) => {
        handleSubmit(-sum, category, tableTransaction, setTransaction, date)

  }

const handleSubmitTransactionIncomes = (sum, category) => {
        handleSubmit(sum, category, tableTransaction, setTransaction, date)
}

const daily = () => {
        if(tableTransaction.length !== 0){
        return tableTransaction.reduce((acc, item) => {
            return acc + Number(item.summary)
        }, 0)}
}
    console.log(daily())
    return (
        <div className="App">
            <section>
                <header>
                    <h1>???????? ????????????</h1>
                    <DateLine>
                        <p style={{marginRight: '20px'}}>?????????????? ????????: {date}</p>
                        <DateButton onClick={handleSubtractDay}>-</DateButton>
                        <DateButton onClick={handleAddDay}>+</DateButton>
                    </DateLine>
                    {daily() === undefined ? '' : <p>?????????????????? ?????????? ??????????????????:  {(daily()/30).toFixed()} ??????</p>}
                </header>
                <main>
                        <Nav>
                            <Link name='expanse'
                                  onClick={handleNavClick}
                                  selected={navSelected === 'expanse'}>
                                ?????????????? ???? ??????????????
                            </Link>
                            <Link name='incomes'
                                  onClick={handleNavClick}
                                  selected={navSelected === 'incomes'}>????????????</Link>
                        </Nav>
                    {navSelected === 'expanse'
                        ? <Expanse onSubmit ={handleSubmitTransactionExpanse}/>
                        : <Incomes onSubmit ={handleSubmitTransactionIncomes} />}
                </main>

                <Table>
                    <tbody>
                    <tr style={{border: '2px solid'}}>
                        <th style={{border: '2px solid'}}>Date</th>
                        <th style={{border: '2px solid'}}>Summary</th>
                        <th style={{border: '2px solid'}}>Category</th>
                    </tr>
                    {tableTransaction.map((item, index) =>(
                        <tr key={index}>
                            <td style={{border: '2px solid'}}>{item.transactionDay}</td>
                            <td style={{border: '2px solid'}}>{item.summary} p</td>
                            <td style={{border: '2px solid'}}>{item.category}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </section>
        </div>
    );
}

export default App;

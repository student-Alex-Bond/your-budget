export const handleSubmit = (sum, category, tableTransaction, setTransaction, date) => {
    const newTableTransaction = [...tableTransaction,  {transactionDay: date, summary: sum, category: category}]
    const newTableTransactionSort = Object.assign( [],
        newTableTransaction.sort((a,b) => a.transactionDay > b.transactionDay? 1 : -1))
    setTransaction(newTableTransactionSort)

}
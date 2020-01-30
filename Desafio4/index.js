const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

function createTransation(transaction) {
  if (transaction.type === 'credit') {
    user.balance = transaction.value + user.balance
    user.transactions.push(transaction)
  } else {
    user.balance = user.balance - transaction.value
    user.transactions.push(transaction)
  }
  console.table(transaction)
}


function getHigherTransactionByType(transactionType){
  let transactionValue = 0
  
  for(transaction of user.transactions) {
    if(transaction.type === transactionType && transaction.value > transactionValue) {
        transactionValue = transaction.value
        typeTransaction = transaction
    }
}
console.table(typeTransaction)
}

function getAverageTransactionValue() {
 let sum = 0

 for (let i = 0; i < user.transactions.length; i++) {
   sum += user.transactions[i].value
 }
 const average = sum / user.transactions.length

 console.log(average)

}

function getTransactionCount(){
  let count = {
    credit : 0,
    debit : 0
  }

  for (let transaction of user.transactions) {
    if (transaction.type === 'credit') {
      count.credit++
    } else {
      count.debit++
    }
  }

  console.table(count)
}

createTransation({ type: 'credit', value: 50 })
createTransation({ type: 'credit', value: 120 })
createTransation({ type: 'debit', value: 80 })
createTransation({ type: 'debit', value: 30 })

console.log(user.balance)

getHigherTransactionByType('credit')// Busca a maior transação feita no crédito
getHigherTransactionByType('debit')

getAverageTransactionValue()
getTransactionCount()
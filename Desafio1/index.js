// CALCULO DE IMC

const nome = 'Carlos'
const peso = 84
const altura = 1.88
const sex = 'M'

const imc = (peso / (altura * altura)).toFixed(2); //toFixed utiliza somente duas casas decimais depois do .

if (imc >= 30 ) {
  console.log(`${nome} você é do SEXO ${sex} e está acima do peso pois seu IMC é de ${imc} é maior que 30!`)
} else {
  console.log(`${nome} você é do SEXO ${sex} e não está acima do peso pois seu IMC é de ${imc} é menor que 30!`)
}

// CALCULO DE APOSENTADORIA

const name = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23 

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem
//precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

if ( sexo == 'F' && contribuicao >= 30) {
  if ( contribuicao + idade >= 85){
    console.log(`${name} , você pode se aposentar!`)
  } else {
    console.log(`${name} , você tem o tempo de contribuição mais não a idade total`)
  }
} else {
  console.log(`${name} , você ainda não pode se aposentar!`)
}
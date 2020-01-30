const classA = [
  {
    name: 'Maik',
    grade: 0.0
  },
  {
    name: 'Rodrigo',
    grade: 8.2
  },
  {
    name: 'Redivo',
    grade: 7.3
  },
  {
    name: 'Diego',
    grade: 5.4
  },
  {
    name: 'ego',
    grade: 0.9
  }

]

const classB = [
  {
    name: 'Diego',
    grade: 1.0
  },
  {
    name: 'João',
    grade: 4.0
  },
  {
    name: 'José',
    grade: 10.0
  },
  {
    name: 'Zezinho',
    grade: 10.0
  }

]

function calculateAverage(students) {
  let sum = 0
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }

  const average = (sum / students.length).toFixed(2)
  return average
}

const averageTurmaA = calculateAverage(classA)
const averageTurmaB = calculateAverage(classB)

function enviarSomaTotal(average, turma) {
  if (average > 5) {
    console.log(`A média da turma ${turma} é de ${average}. =D`)
  } else {
    console.log(`A média da turma ${turma} é de ${average} muito abaixo da metade =/`)
  }
}

enviarSomaTotal(averageTurmaA, 'Turma A')
enviarSomaTotal(averageTurmaB, 'Turma B')

function markAsFlunked(student) {
  student.flunked = false

  if (student.grade < 5) {
    student.flunked = true
  }
}

function sendMessageReprovado(student) {
  if (student.flunked) {
    console.table(student)
  }
}

function studentReprovado(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendMessageReprovado(student)
  }
}

studentReprovado(classA)
studentReprovado(classB)

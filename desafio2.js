const nome = 'Maria'
const sexo = 'F'
const idade = 50
const contribuicao = 35

const calcontribuicao = idade + contribuicao

if(sexo == 'M' && calcontribuicao >= 95){
    console.log(`${nome},você já pode aposentar`)
}else{
    console.log(`${nome},você ainda não pode aposentar`)
}


if(sexo == 'F' && calcontribuicao >= 85){
    console.log(`${nome},você já pode aposentar`)
}else{
    console.log(`${nome},você ainda não pode aposentar`)
}

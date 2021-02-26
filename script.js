
function calMedia (){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: 'Johnny',
    notas: [9, 9],

    media: calMedia

}


var aluno1 = {
    nome: 'João',
    notas: [5, 9],

    media: calMedia

}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())
